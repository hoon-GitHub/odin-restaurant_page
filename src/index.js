import './style.css';

function renderHome() {
  console.log("home");
}

function renderMenu() {
  console.log("menu");
}

function renderAbout() {
  console.log("about");
}

const home = document.getElementById('home');
const menu = document.getElementById('menu');
const about = document.getElementById('about');

home.addEventListener('click', renderHome);
menu.addEventListener('click', renderMenu);
about.addEventListener('click', renderAbout);