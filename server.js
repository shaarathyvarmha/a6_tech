const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

// ====== MongoDB Connection ======
mongoose.connect("mongodb://127.0.0.1:27017/a6tech", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// ====== User Schema ======
const userSchema = new mongoose.Schema({
  a6id: { type: String, required: true, unique: true },
  fullName: { type: String, default: "" },
  email: { type: String, default: "" },
  role: { type: String, default: "user" }
});

const User = mongoose.model("User", userSchema);

// ====== Middleware ======
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/css", express.static(path.join(__dirname, "css")));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "pages")));

app.use(
  session({
    secret: "a6tech_secret_key",
    resave: false,
    saveUninitialized: true,
  })
);

// ====== Default Route ======
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "user_login.html"));
});

// ====== Login Route ======
app.post("/login", async (req, res) => {
  const { a6id } = req.body;
  console.log("Login attempt:", a6id);

  try {
    const user = await User.findOne({ a6id });

    if (user) {
      req.session.user = user.a6id;
      console.log("Login success");
      return res.json({ success: true, user });
    } else {
      console.log("Login failed");
      return res.json({ success: false, message: "Invalid A6ID" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
});

// ====== Dashboard Route ======
app.get("/dashboard", (req, res) => {
  if (!req.session.user) {
    return res.redirect("/");
  }
  res.sendFile(path.join(__dirname, "pages", "dashboard.html"));
});

// ====== Logout ======
app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/user_login.html");
  });
});

// ====== Start Server ======
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
