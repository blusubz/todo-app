# Todo App

A clean, responsive and intuitive task management application built with a warm minimalist aesthetic. Organized around project workflows, this app allows users to create custom project categories, track specific TODO cards with priority levels and manage tasks seamlessly without clutter.

📝 [Live Demo](https://blusubz.github.io/todo-app/)

## Features & Design Principles 

- **Warm Minimalist Palette:** Designed with custom CSS design tokens utilizing muted slate tones, warm off-white linen text, soft lavender sidebar accents and earthy rose hover states.
- **Project Categorization:** Create, view and delete project containers dynamically 
- **To-Do Task Management:** Add a todo task with title, description, priority, notes and completed checkbox. A delete todo button built in per todo card container. 
- **Active State Highlighting:** Dynamic sidebar and header indicators reflect the currently selected project.
- **Responsive Grid Layout:** Powered by CSS Grid and Flexbox for responsive design for various screen sizes. Both for mobile and desktop. 


## Tech Stack

* HTML5 & CSS3 (with CSS Custom Properties/Variables)
* JavaScript (ES6 Modules)
* Webpack (Module Bundler)
* Git & Github (Version Control & GitHub Pages Deployment)

## Webpack Configuration & Loaders
* `css-loader` & `style-loader`: To process and inject CSS stylesheets directly into the DOM
* **HTML Webpack Plugin** (`html-webpack-plugin`): To automatically generate the `index.html` files in `dist` with all bundled scripts injected


## Local Installation

1. Clone the repo:
```bash
git clone https://github.com/blusubz/todo-app.git
```

2. Install dependencies:
```bash
npm install
```

3. Build and run locally with Webpack:
```bash
npx webpack serve
```