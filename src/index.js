import { Project } from './models/project.js';
import { Todo } from './models/todo.js';
import { renderProjects, renderTodos } from './domController.js';
import './styles.css';

let projects = []; // Store all project here for easy display later
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
    
    // Create a new Project object and push it to array
    const newProject = new Project(projectName);
    projects.push(newProject);
    activeProject = newProject; // Project just created and should render TODOs


    renderProjects(projects);

    if (activeProject) {
        // render TODOs for this project
        renderTodos();
    }

    form.reset();
    dialog.close();
});

// If there's more than one project and it's selected we can create a click event on that project that is selected and then we can call renderTodos on that project. 
// const projectSelect = document.getElementById(projects[]);