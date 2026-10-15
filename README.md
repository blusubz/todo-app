# Marinas Restaurant

This is a simple SPA website with multiple tabs for a made up restaurant. The main takeaway here is that I used a bundler to build and deploy it for learning purposes. 

[Live Demo](https://blusubz.github.io/restaurant-website/)

## Features

- **Dynamic Tab Switching:** Loading content dynamically into DOM nodes without reloading the browser
- **Modular View Structure:** Distinct modules for Home, Menu, About and Contact/Reservations
- **Interactive Form & Styling:** Styled reservation form with layout controls and responsive card containers
- **Custom Styling:** Clean CSS variables and typography

## Tech Stack

* HTML5 & CSS3 (with CSS Custom Properties/Variables)
* JavaScript (ES6 Modules)
* Webpack (Module Bundler)
* Git & Github (Version Control & GitHub Pages Deployment)

## Webpack Configuration & Loaders
* `css-loader` & `style-loader`: To process and inject CSS stylesheets directly into the DOM
* **Webpack Asset Modules** (`type: 'asset/resource'`): To import images directly in JavaScript files (like `import reservationImg from './assets/...'`)
* **HTML Webpack Plugin** (`html-webpack-plugin`): To automatically generate the `index.html` files in `dist` with all bundled scripts injected

## Local Installation

1. Clone the repo:
```bash
git clone https://github.com/blusubz/restaurant-website.git
```

2. Install dependencies:
```bash
npm install
```

3. Build and run locally with Webpack:
```bash
npx webpack serve
```