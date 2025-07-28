# HTML

A modern HTML project utilizing Tailwind CSS for building responsive web applications with minimal setup.

## 🚀 Features

- **HTML5** - Modern HTML structure with best practices
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Custom Components** - Pre-built component classes for buttons and containers
- **NPM Scripts** - Easy-to-use commands for development and building
- **Responsive Design** - Mobile-first approach for all screen sizes

## 📋 Prerequisites

- Node.js (v12.x or higher)
- npm or yarn

## 🛠️ Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Start the development server:
```bash
npm run dev
# or
yarn dev
```

## 📁 Project Structure

```
html_app/
├── css/
│   ├── tailwind.css   # Tailwind source file with custom utilities
│   └── main.css       # Compiled CSS (generated)
├── pages/             # HTML pages
├── index.html         # Main entry point
├── package.json       # Project dependencies and scripts
└── tailwind.config.js # Tailwind CSS configuration
```

## 🎨 Styling

This project uses Tailwind CSS for styling. Custom utility classes include:


## 🧩 Customization

To customize the Tailwind configuration, edit the `tailwind.config.js` file:


## 📦 Build for Production

Build the CSS for production:

```bash
npm run build:css
# or
yarn build:css
```

## 📱 Responsive Design

The app is built with responsive design using Tailwind CSS breakpoints:

- `sm`: 640px and up
- `md`: 768px and up
- `lg`: 1024px and up
- `xl`: 1280px and up
- `2xl`: 1536px and up


..................................................................................................

..................................................................................................

..................................................................................................

Your Project Folder (A6_TECH)
1. index.html
Your main homepage.

It’s just like the HTML files you’ve worked with before.

When someone opens your site, this is the entry point.

2. pages/ Folder
Contains extra pages for your site (dashboard, login, registration, etc.).

dashboard.html – Your dashboard page after login.

user_login.html – Login page.

user_registration.html – Registration page.

analytics_dashboard.html – Analytics UI.

all_members_list.html – Shows all members.

This is no different from multiple .html files in your previous projects—just organized inside a pages folder.

3. css/ Folder
main.css – Your custom styles (like normal CSS you write).

tailwind.css – A CSS file where Tailwind CSS utility classes are imported. (You don’t manually write much here; Tailwind builds its own CSS from this file.)

4. public/ Folder
Stores static files like icons, images, and JavaScript files.

dhws-data-injector.js – Auto-generated script by rocket.new (you might not need to touch it).

favicon.ico – Tiny icon in the browser tab.

manifest.json – Tells browsers how to handle your web app if installed as a PWA.

5. node_modules/ Folder
A huge folder with dependencies (libraries like Tailwind, PostCSS, etc.).

You never edit this manually—it's created automatically when you run npm install.

6. package.json
This is like a "project recipe".

It lists:

Your project name.

The libraries used (Tailwind, PostCSS).

Scripts like npm run dev (for starting a local server) or npm run build.

Think of this as the manager of your project.

7. package-lock.json
A "lockfile" that freezes versions of your libraries so nothing breaks if they update.

You don’t edit it; npm updates it automatically.

8. tailwind.config.js
Tailwind’s configuration file.

Here, you define custom colors, fonts, breakpoints, etc.

9. postcss.config.js
Configuration for PostCSS, a tool that processes your Tailwind CSS and generates final main.css.

Again, you don’t edit this much unless you know what you’re doing.

10. README.md
A text file describing your project (often for GitHub).

Not essential for running the project.