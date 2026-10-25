import { Todo } from "./models/todo.js";

export function renderProjects(projects) {
    const projectsList = document.getElementById('projectsList')
    const ul = document.createElement('ul');

    projectsList.textContent = ''; // Clear out current UL to begin adding project names
    projects.forEach(project => {
        const li = document.createElement('li');
        li.textContent = project.name;

        // Logic for selecting project
        li.addEventListener('click', () => {
            // renderTodos(todos);
        });

        ul.appendChild(li);
    });
    projectsList.appendChild(ul);
}

export function renderTodos(todos) {
   return;
}

// pass in active project in renderTodos