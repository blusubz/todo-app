import { Project } from './models/project.js';
import { Todo } from './models/todo.js';

const defaultProject = new Project('Shopping List');
const todoShopping1 = new Todo('Buy', 'Eggs', '1', 'To make breakfast');
const todoShopping2 = new Todo('Buy', 'Milk', '1');
const todoShopping3 = new Todo('Buy', 'Bacon', '1');

const booksToBuyProject = new Project('Books to Buy');
const todoBlakesBook = new Todo('Buy', 'A Ruby Bright As Fire', '')


defaultProject.addTodo(todoShopping1);
defaultProject.addTodo(todoShopping2);
defaultProject.addTodo(todoShopping3);


console.log(project);