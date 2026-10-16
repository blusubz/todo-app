import { Project } from './models/project.js';
import { Todo } from './models/todo.js';


const todo1 = new Todo('Buy', 'Eggs', 'This week', '1', 'To make breakfast');
const todo2 = new Todo('Buy', 'Milk', 'This week', '1');
const todo3 = new Todo('Buy', 'Bacon', 'This week', '1');
const project = new Project('Shopping List');

project.addTodo(todo1);
project.addTodo(todo2);
project.addTodo(todo3);


console.log(project);