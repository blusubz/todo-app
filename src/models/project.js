export class Project {
    constructor(name, id) {
        this.name = name;
        this.todos = [];
        this.id = id;
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    getTodos() {
        return this.todos;
    }
}