export class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
        this.activeProject;
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    getTodos() {
        return this.todos;
    }
}