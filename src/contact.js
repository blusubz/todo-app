import reservationImg from './assets/reservar-pic-asset.jpg';

export function loadcontact() {
    const parentDiv = document.getElementById('content');
    const contactarHeader = document.createElement('h1');

    contactarHeader.textContent = 'Contactar';
    parentDiv.appendChild(contactarHeader);

    // Contact card goes here
    const contactDiv = document.createElement('div');
    const contactCardHeader = document.createElement('h3');
    const chefName = document.createElement('p');
    const chefNumber = document.createElement('p');
    const chefEmail = document.createElement('p');

    contactDiv.className = 'contact-container';

    contactCardHeader.textContent = 'La guardiana del fuego';
    chefName.textContent = 'Luz Marinita';
    chefNumber.textContent = '(444)444-4444';
    chefEmail.textContent = 'elpatitolindo@patito.com';

    contactDiv.appendChild(contactCardHeader);
    contactDiv.appendChild(chefName);
    contactDiv.appendChild(chefNumber);
    contactDiv.appendChild(chefEmail);

    parentDiv.appendChild(contactDiv);

    // Form goes here 
    const formDiv = document.createElement('div');
    formDiv.className = 'form-container';

    const form = document.createElement('form');
    form.action = 'https://httpbin.org/post';
    form.method = 'post';
    form.id = 'reservation-form';

    const reservar = document.createElement('img');
    reservar.src = reservationImg;
    reservar.alt = 'Foto de mesa de reservación';
    reservar.loading = 'lazy';

    const formHeader = document.createElement('h2');
    formHeader.textContent = 'Reservar:';

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'name';
    nameInput.placeholder = 'Nombre';
    nameInput.required = true;

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = 'email';
    emailInput.placeholder = 'Correo Electronico *';
    emailInput.required = true;

    const phoneInput = document.createElement('input');
    phoneInput.type = 'tel';
    phoneInput.id = 'phone';
    phoneInput.placeholder = 'Telefono';
    phoneInput.required = true;

    const textArea = document.createElement('textarea');
    textArea.id = 'comment';
    textArea.placeholder = 'Escribe tu comentario aquí...';

    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.id = 'submit-btn';
    submitBtn.textContent = 'Enviar';

    form.appendChild(reservar);
    form.appendChild(formHeader);
    form.appendChild(nameInput);
    form.appendChild(emailInput);
    form.appendChild(phoneInput);
    form.appendChild(textArea);
    form.appendChild(submitBtn);

    formDiv.appendChild(form);

    parentDiv.appendChild(formDiv);
}