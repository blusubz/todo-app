import { Project } from './models/project.js';
import { Todo } from './models/todo.js';
import { renderProjects, renderTodos, highlightActiveProject, renderProjectView } from './domController.js';
import './styles.css';

let projects = []; // Store all projects here for easy display later
projects = loadProjects(); // Load projects if they exist in storage, otherwise 
let activeProject = projects.length > 0 ? projects[0] : null;

// Load projects if any saved
if (projects.length > 0) {
    // Render list of projects in sidebar
    renderProjects(projects, selectedProject => {
        activeProject = selectedProject;
        highlightActiveProject(activeProject.id);
        // Display the main content for selected project 
        renderProjectView(activeProject);
    });

    // Highlight and render the view for the active project
    highlightActiveProject(activeProject.id);
    renderProjectView(activeProject);
}

const dialog = document.getElementById('project-dialog');
const openBtn = document.getElementById('addProjectBtn');
const form = document.getElementById('project-name-form');

openBtn.addEventListener('click', () => {
    dialog.showModal();
});

// Add project by form
form.addEventListener('submit', e => {
    e.preventDefault(); // Stops refresh of the page after button submit is clicked
    
    const projectName = document.getElementById('projectName-input').value;

    createProject(projectName);
    renderProjects(projects, selectedProject => {
        activeProject = selectedProject;
        highlightActiveProject(activeProject.id);
        // Display the main content for selected project 
        renderProjectView(activeProject);
    });

    // Highlight created Project immediately
    if (activeProject) {
        highlightActiveProject(activeProject.id);
        renderProjectView(activeProject);
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

    // Store state here
    saveProjects();
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

// Create Todo-Card Logic - Event listener 
todoForm.addEventListener('submit', e => {
    e.preventDefault(); // Stops refresh of the page after button submit is clicked

    // render todos of current project
    const title = document.getElementById('todo-title').value;
    const description = document.getElementById('todo-description').value;
    const priority = document.getElementById('todo-priority').value;
    const notes = document.getElementById('todo-notes').value;
    const isCompleted = document.getElementById('isCompleted').checked;

    createTodo(title, description, priority, notes, isCompleted);
    renderProjectView(activeProject); // renderTodos is within renderProjectView func

    // Store state here
    saveProjects(); 

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

        // Store state here
        saveProjects();
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
    renderProjectView(activeProject);

    // Store state here
    saveProjects();
});

// Delete Project Logic 
// Should handle deleting the full project view and project name from the projects list
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

    // Fallback
    activeProject = projects.length > 0 ? projects[0] : null; 

    // Render Projects and highlight selected Project name
    renderProjects(projects, (selectedProject) => {
        activeProject = selectedProject;
        highlightActiveProject(activeProject.id);
        renderProjectView(activeProject);
    });

   // Re-render workspace (clears view automatically if activePlayer is null)
   renderProjectView(activeProject);

   if (activeProject) {
    highlightActiveProject(activeProject.id);
   }

    // Store state here
    saveProjects();
});

// Save Projects to local storage
function saveProjects() {
    localStorage.setItem('projects', JSON.stringify(projects));
}

// Load Projects from local storage
function loadProjects() {
    try { // If nothing in storage then initialize projects = []
        const storedData = localStorage.getItem('projects');

        if (!storedData) {
            // Start the page with null values
            return [];
        }

        const rawProjects = JSON.parse(storedData);

        if (!rawProjects) {
            return [];
        }

        const rehydratedProjects = rawProjects.map(rawProject => {
            // 1. Rebuild the Project instance
            const project = new Project(rawProject.name, rawProject.id);

            // 2. Loop through the raw todos array inside this project (if it exists)
            if (rawProject.todos) {
                rawProject.todos.forEach(rawTodo => {
                    const todo = new Todo(
                        rawTodo.title,
                        rawTodo.description,
                        rawTodo.priority,
                        rawTodo.notes,
                        rawTodo.isCompleted,
                        rawTodo.id
                    );
                    
                    // Add it back to the project using the project addTodo method
                    project.addTodo(todo);
                });
            }

            return project; // Return the fully restored Project instance
        });

        return rehydratedProjects;
    } catch (e) {
        // Display error
        console.log(`error message: ${e}`);
        return []; // Fallback so app doesn't crash on corrupted data
    }
}