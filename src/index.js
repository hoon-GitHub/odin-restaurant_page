import './style.css';
import { renderHome } from "./home.js";
import { renderMenu } from "./menu.js";
import { renderAbout } from "./about.js";

// page navigation buttons
const home = document.getElementById('home');
const menu = document.getElementById('menu');
const about = document.getElementById('about');

// clear all elements within content div
function clearContent() {
  const content = document.getElementById('content');
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  };
  home.style.textDecoration = 'none';
  menu.style.textDecoration = 'none';
  about.style.textDecoration = 'none';
}

home.addEventListener('click', () => {
  clearContent();
  renderHome();
});

menu.addEventListener('click', () => {
  clearContent();
  renderMenu();
});

about.addEventListener('click', () => {
  clearContent();
  renderAbout();
});

// render home page initially
renderHome();