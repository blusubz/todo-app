import { Project } from './models/project.js';
import { Todo } from './models/todo.js';
import { renderProjects, renderTodos, highlightActiveProject } from './domController.js';
import './styles.css';

let projects = []; // Store all projects here for easy display later
let todos = [];
let activeProject = null;

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
    // Render Projects and highlight selected Project name
    renderProjects(projects, (selectedProject) => {
        activeProject = selectedProject;
        highlightActiveProject(activeProject.id);
        // renderTodos(activeProject.getTodos());
    });

    // const testTodo = new Todo('Buy Bacon', 'Get Colanta brand', 'High', 'Check expiration date', true);
    // activeProject.addTodo(testTodo);

    // Highlight created Project immediately
    if (activeProject) {
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
const todoForm = document.getElementById('todo-form');

// Event delegation is used to click the 'Add Todo' button since it's dynamically created in renderProjects once a project is created
document.addEventListener('click', e => {
    if (e.target.matches("#create-todo-btn")) {
        const todoDialog = document.getElementById('todo-dialog');
        todoDialog.showModal();
    }
});

todoForm.addEventListener('submit', e => {
    e.preventDefault(); // Stops refresh of the page after button submit is clicked

    // render todos of current project
    const title = document.getElementById('todo-title').value;
    const description = document.getElementById('todo-description').value;
    const priority = document.getElementById('todo-priority').value;
    const notes = document.getElementById('todo-notes').value;
    const checklist = document.getElementById('check').checked;

    createTodo(title, description, priority, notes, checklist);
    renderTodos(activeProject.getTodos());

    todoForm.reset();
    todoDialog.close();
});

// Create Todo function
function createTodo(title, description, priority, notes, checklist) {
    // Universal Unique Identifier = UUID
    const id = crypto.randomUUID();

    // Create a new Todo object and push it to TodoCard?
    const newTodo = new Todo(title, description, priority, notes, checklist, id);

    activeProject.addTodo(newTodo);
}