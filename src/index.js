import { Project } from './models/project.js';
import { Todo } from './models/todo.js';
import { renderProjects, renderTodos, highlightActiveProject } from './domController.js';
import './styles.css';

let projects = []; // Store all projects here for easy display later
let activeProject = null;

const dialog = document.getElementById('project-dialog');
const openBtn = document.getElementById('addProjectBtn');
const form = document.getElementById('project-name-form');

openBtn.addEventListener('click', () => {
    dialog.showModal();
});

// Add project
form.addEventListener('submit', e => {
    e.preventDefault(); // Stops refresh of the page after button submit is clicked
    
    const projectName = document.getElementById('projectName-input').value;

    createProject(projectName);
    // Render Projects and highlight selected Project name
    renderProjects(projects, (selectedProject) => {
        activeProject = selectedProject;
        highlightActiveProject(activeProject.id);
        renderTodos(activeProject.getTodos());
    });

    // Highlight created Project immediately
    if (activeProject) {
        highlightActiveProject(activeProject.id);
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

// 'Add Todo' logic 
const todoForm = document.getElementById('todo-form');
const todoDialog = document.getElementById('todo-dialog');

// Event delegation is used to click the 'Add Todo' button since it's dynamically created in renderProjects once a project is created
document.addEventListener('click', e => {
    if (e.target.matches("#create-todo-btn")) {
        todoDialog.showModal();
    }
});

// Create Todo Logic - Event listener 
todoForm.addEventListener('submit', e => {
    e.preventDefault(); // Stops refresh of the page after button submit is clicked

    // render todos of current project
    const title = document.getElementById('todo-title').value;
    const description = document.getElementById('todo-description').value;
    const priority = document.getElementById('todo-priority').value;
    const notes = document.getElementById('todo-notes').value;
    const isCompleted = document.getElementById('isCompleted').checked;

    createTodo(title, description, priority, notes, isCompleted);
    renderTodos(activeProject.getTodos());

    todoForm.reset();
    todoDialog.close();
});

// Create Todo function
function createTodo(title, description, priority, notes, isCompleted) {
    // Universal Unique Identifier = UUID
    const id = crypto.randomUUID();

    // Create a new Todo object and push it to .todo-card
    const newTodo = new Todo(title, description, priority, notes, isCompleted, id);

    activeProject.addTodo(newTodo);
}

// Check for checkbox click(change)
document.addEventListener('change', e => {
    if (e.target.type === 'checkbox') {
        // which card was clicked?
        const card = e.target.closest(".todo-card"); 
        const isTodoCompleted = e.target.checked;

        // Check if the checkbox selected is from a todo-card and not the todo-dialog (this will cause a runtime error)
        if (card === null) {
            return;
        }

        // what's the card UUID?
        const todoId = card.dataset.id;

        // how do we update our data?         
        let currentProjectTodos = activeProject.getTodos();
        
        const foundTodo = currentProjectTodos.find(todo => todo.id === todoId);

        if (foundTodo) {
            // isTodoCompleted === true ? foundTodo.isCompleted = false : foundTodo.isCompleted = true;
            foundTodo.isCompleted = isTodoCompleted;
        }
    }
});

// Delete Todo Logic
document.addEventListener('click', e => {
    const deleteTarget = e.target.closest(".delete-todo-btn");

    if (deleteTarget === null) {
        return;
    }

    const card = e.target.closest(".todo-card");

    // what's the card UUID?
    const todoId = card.dataset.id;

    // Remove todo 
    activeProject.removeTodo(todoId);

    // Render current Todos 
    renderTodos(activeProject.getTodos());
});

// Delete Project Logic 
document.addEventListener('click', e => {
    const deleteProject = e.target.closest('.delete-project-btn');

    if (deleteProject === null) {
        return;
    }

    if (activeProject === null) {
        return;
    }

    const projectId = activeProject.id;

    // Remove Project 
    const updatedProjects = projects.filter(project => project.id !== projectId);

    projects = updatedProjects;

    // Render Projects and highlight selected Project name
    renderProjects(projects, (selectedProject) => {
        activeProject = selectedProject;
        highlightActiveProject(activeProject.id);
        renderTodos(activeProject.getTodos());
    });

    activeProject = null; // Since previous project deleted we point activeProject to null, leaving us to click on a different project if any to render it's contents

    // This wipes the todos from screen for current project deletion
    const todoCardsContainer = document.getElementById('card-container');
    todoCardsContainer.textContent = '';

    // Reference for main content to remove buttons 
    const mainContent = document.getElementById('main-content');

    // Remove 'Add Todo' button
    const addTodoBtn = document.getElementById('create-todo-btn');
    
    mainContent.removeChild(addTodoBtn);

    // Remove 'Delete Project' button
    const deleteProjectBtn = document.getElementById('delete-project-btn');

    mainContent.removeChild(deleteProjectBtn);
}); 