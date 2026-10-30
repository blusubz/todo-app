export function renderProjects(projects, onProjectSelect) {
    const projectsList = document.getElementById('projectsList');
    const mainContent = document.getElementById('main-content');
    const ul = document.createElement('ul');

    projectsList.textContent = ''; // Clear out current UL to begin adding project names
    projects.forEach(project => {
        const li = document.createElement('li');
        li.textContent = project.name;
        li.dataset.id = project.id; // This creates data-id="<uuid>" on the HTML element

        // Logic for selecting project
        li.addEventListener('click', e => {
            onProjectSelect(project);
        });

        ul.appendChild(li);
    });
    projectsList.appendChild(ul);

    // Now that Project is created we can dynamically add a 'Add Todo' button into main content
    let createTodoBtn = document.getElementById('create-todo-btn');
    
    if (!createTodoBtn && projects.length > 0) {
        createTodoBtn = document.createElement('button');
        createTodoBtn.textContent = 'Add Todo';
        createTodoBtn.id = 'create-todo-btn';
        createTodoBtn.type = 'button';

        mainContent.appendChild(createTodoBtn);
    }

    let deleteProjBtn = document.createElement('button');
    deleteProjBtn.textContent = 'Delete Project';
    deleteProjBtn.classList.add('delete-project-btn');

    mainContent.appendChild(deleteProjBtn);
}

export function renderTodos(todos) {
    const cardContainer = document.getElementById('card-container'); 
    cardContainer.innerHTML = '';  

    todos.forEach(todo => {
        const divTodoCard = document.createElement('div');
        divTodoCard.classList.add('todo-card');
        divTodoCard.dataset.id = todo.id;

        const todoTitle = document.createElement('h4');
        todoTitle.textContent = todo.title;

        const todoDescription = document.createElement('p');
        todoDescription.textContent = todo.description;

        const todoPriority = document.createElement('p'); // select input
        todoPriority.textContent = `Priority: ${todo.priority}`; 

        const todoNotes = document.createElement('p');
        todoNotes.textContent = todo.notes;

        const todoChecklist = document.createElement('div');
        todoChecklist.classList.add('checklist');
        const checklistLabel = document.createElement('label');
        checklistLabel.htmlFor = `checkbox-${todo.id}`;
        checklistLabel.textContent = 'Completed';
        const inputCheckbox = document.createElement('input');
        inputCheckbox.type = 'checkbox';
        inputCheckbox.id = `checkbox-${todo.id}`;
        inputCheckbox.name = 'isCompleted';
        inputCheckbox.checked = todo.isCompleted;

        todoChecklist.appendChild(checklistLabel);
        todoChecklist.appendChild(inputCheckbox);

        const deleteTodoBtn = document.createElement('button');
        deleteTodoBtn.type = 'button';
        deleteTodoBtn.classList.add('delete-todo-btn');
        deleteTodoBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><title>bin-2</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 2H14M4 7H20M6 7H18V19C18 20.6569 16.6569 22 15 22H9C7.34315 22 6 20.6569 6 19V7ZM10 11L10 18M14 11L14 18"/></svg>'

        divTodoCard.appendChild(todoTitle);
        divTodoCard.appendChild(todoDescription);
        divTodoCard.appendChild(todoPriority);
        divTodoCard.appendChild(todoNotes);
        divTodoCard.appendChild(todoChecklist);
        divTodoCard.appendChild(deleteTodoBtn);

        cardContainer.appendChild(divTodoCard);
    });
}

export function highlightActiveProject(projectId) {
    const activeLi = document.querySelector(`[data-id="${projectId}"]`);

    // Loop through all projects rendered on screen
    const liElements = document.querySelectorAll('li');

    // Reset all that are on screen to black
    liElements.forEach(li => {
      li.style.color = "black";
    });

    activeLi.style.color = "yellow";
}