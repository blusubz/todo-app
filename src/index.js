import { Project } from './models/project.js';
import { Todo } from './models/todo.js';
import './styles.css';

let projects = []; // Store all project here for easy display later

const defaultProject = new Project('Shopping List');
const todoShopping1 = new Todo('Buy', 'Eggs', '1', 'To make breakfast');
const todoShopping2 = new Todo('Buy', 'Milk', '1');
const todoShopping3 = new Todo('Buy', 'Bacon', '1');

defaultProject.addTodo(todoShopping1);
defaultProject.addTodo(todoShopping2);
defaultProject.addTodo(todoShopping3);

const booksToBuyProject = new Project('Books to Buy');
const todoBlakesBook = new Todo('Buy', 'A Ruby Bright As Fire', '1', 'To learn more Blakes teachings and works');
const todoHermeticaBook = new Todo('Buy', 'HERMETICA I: [...] Ordered as a Path of Initiation', '2', 'To learn more about hermetic philosophy');

booksToBuyProject.addTodo(todoBlakesBook);
booksToBuyProject.addTodo(todoHermeticaBook);

console.log(defaultProject);
console.log(booksToBuyProject);


const dialog = document.getElementById('projectDialog');
const openBtn = document.getElementById('addProjectBtn');
const closeBtn = document.getElementById('submitBtn');

openBtn.addEventListener('click', () => {
    dialog.showModal();
});

closeBtn.addEventListener('click', () => {
    dialog.close();
});

// TODO: Phase 2 -> Application State / Managing Multiple Projects
// to store the projects and TODOs, I can have a dialog pop up when the user clicks on 'new project' which will be in the sidebar, then they'll input the name and it will display the name on the main-content div. then a button will be created and be called 'add todo'. then same concept with a dialog to be created and then display the new todo 