import { Project } from './models/project.js';
import { Todo } from './models/todo.js';
import { renderProjects, renderTodos, highlightActiveProject } from './domController.js';
import './styles.css';

let projects = []; // Store all projects here for easy display later
let activeProject = null;
let todos = [];

const dialog = document.getElementById('project-dialog');
const openBtn = document.getElementById('addProjectBtn');
const form = document.getElementById('project-name-form');

openBtn.addEventListener('click', () => {
    dialog.showModal();
});

// Add project
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Stops refresh of the page after button submit is clicked
    
    const projectName = document.getElementById('projectName-input').value;

    createProject(projectName);
    renderProjects(projects, selectedProject => {
        activeProject = selectedProject;
        highlightActiveProject(activeProject.id);
        // renderTodos(activeProject.getTodos());
    });

    // const testTodo = new Todo('Buy Bacon', 'Get Colanta brand', 'High', 'Check expiration date', true);
    // activeProject.addTodo(testTodo);

    // render TODOs for this active project
    if (activeProject) {
        // highlight the Active Project
        highlightActiveProject(activeProject.id);

        // renderTodos(activeProject.getTodos());
    }

    form.reset();
    dialog.close();
});

// Create Project function
function createProject(projectName) {
    // Universal Unique Identifier = UUID
    const id = crypto.randomUUID();

    // Create a new Project object and push it to array
    const newProject = new Project(projectName, id);
    projects.push(newProject);
    activeProject = newProject; // Project just created and should render TODOs
}

// Add Todo logic 
const createTodoBtn = document.getElementById('create-todo-btn');
const todoDialog = document.getElementById('todo-dialog');
const addTodoBtn = document.getElementById('add-todo-btn');
const todoForm = document.getElementById('todo-form');

document.addEventListener('click', e => {
    if (e.target.matches("#create-todo-btn")) {
        console.log('clicked')
    }
});

// createTodoBtn.addEventListener('click', () => {
//     // Form logic goes here?
//     // On click open todoDialog
//     todoDialog.showModal();
// });

// todoForm.addEventListener('submit', e => {
//     e.preventDefault(); // Stops refresh of the page after button submit is clicked
// });