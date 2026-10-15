import { loadhome } from './home.js';
import { loadabout } from './about.js';
import { loadmenu } from './menu.js';
import { loadcontact } from './contact.js';
import './styles.css';

// Logic for selecting tab
const parentDiv = document.getElementById('content');
const homeBtn = document.getElementById('home-btn');
const menuBtn = document.getElementById('menu-btn');
const aboutBtn = document.getElementById('about-btn');
const contactBtn = document.getElementById('contact-btn');


homeBtn.addEventListener('click', () => {
    setActiveTab(homeBtn);
    parentDiv.textContent = "";
    loadhome();
});

aboutBtn.addEventListener('click', () => {
    setActiveTab(aboutBtn);
    parentDiv.textContent = "";
    loadabout();
});

menuBtn.addEventListener('click', () => {
    setActiveTab(menuBtn);
    parentDiv.textContent = "";
    loadmenu();
});

contactBtn.addEventListener('click', () => {
    setActiveTab(contactBtn);
    parentDiv.textContent = "";
    loadcontact();
})

// Driver page is Home page - Load at page start 
loadhome();
setActiveTab(homeBtn);

function setActiveTab(selectedBtn) {
    const allBtns = document.querySelectorAll('nav button');

    allBtns.forEach((btn) => {
        btn.className = '';
    });

    selectedBtn.className = 'active';
}