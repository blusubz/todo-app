export function renderProjects(projects, onProjectSelect) {
    const projectsList = document.getElementById('projectsList');
    const ul = document.createElement('ul');

    projectsList.textContent = ''; // Clear out current UL to begin adding project names
    projects.forEach(project => {
        const li = document.createElement('li');
        li.textContent = project.name;
        li.dataset.id = project.id; // This creates data-id="<uuid>" on the HTML element

        // Logic for selecting project
        li.addEventListener('click', e => {
            console.log(`Selected ${project.name} project with ${project.id} id`);
            onProjectSelect(project);
        });

        ul.appendChild(li);
    });
    projectsList.appendChild(ul);

    // Now that Project is created we can dynamically add a 'Add Todo' button into main content
    let createTodoBtn = document.getElementById('create-todo-btn');
    
    if (!createTodoBtn && projects.length > 0) {
        const createTodoBtn = document.createElement('button');
        createTodoBtn.textContent = 'Add Todo';
        createTodoBtn.id = 'create-todo-btn';
        createTodoBtn.type = 'button';

        const mainContent = document.getElementById('main-content');

        mainContent.appendChild(createTodoBtn);
    }
}

export function renderTodos(todos) {
    const cardContainer = document.getElementById('card-container'); 
    cardContainer.innerHTML = '';  

    todos.forEach(todo => {
        const divTodoCard = document.createElement('div');
        divTodoCard.classList.add('todo-card');

        const todoTitle = document.createElement('h5');
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
        checklistLabel.htmlFor = 'isChecked';
        checklistLabel.textContent = 'Completed';
        const inputCheckbox = document.createElement('input');
        inputCheckbox.type = 'checkbox';
        inputCheckbox.id = 'isChecked';
        inputCheckbox.name = 'isChecked';
        inputCheckbox.checked = todo.checklist;

        todoChecklist.appendChild(checklistLabel);
        todoChecklist.appendChild(inputCheckbox);

        divTodoCard.appendChild(todoTitle);
        divTodoCard.appendChild(todoDescription);
        divTodoCard.appendChild(todoPriority);
        divTodoCard.appendChild(todoNotes);
        divTodoCard.appendChild(todoChecklist);

        cardContainer.appendChild(divTodoCard);
    });
}

export function highlightActiveProject(projectId) {
    const activeLi = document.querySelector(`[data-id="${projectId}"]`);
    activeLi.style.color = "yellow";
}