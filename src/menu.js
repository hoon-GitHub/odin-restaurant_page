import Kaiseki from './kaiseki.jpeg';
import Wagyu from './wagyu.jpg';
import Sashimi from './sashimi.jpg';
import Sushi from './sushi.jpg';
import Unagidon from './unagidon.jpg';
import Tendon from './tendon.jpg';

export function renderMenu() {
  
  // add underline to indicate active page
  const menuBtn = document.getElementById('menu');
  menuBtn.style.textDecoration = 'underline';

  // main div for the menu page
  const content = document.getElementById('content');
  const mainDiv = document.createElement('div');
  mainDiv.setAttribute('id', 'menuDiv');
  
  // menu items
  const menu1 = document.createElement('div');
  menu1.classList.add('menuItem');
  const menu1Img = new Image();
  menu1Img.src = Kaiseki;
  menu1.appendChild(menu1Img);
  const menu1Title = document.createElement('h3');
  menu1Title.innerText = "Kaiseki"
  menu1.appendChild(menu1Title);

  const menu2 = document.createElement('div');
  menu2.classList.add('menuItem');
  const menu2Img = new Image();
  menu2Img.src = Wagyu;
  menu2.appendChild(menu2Img);
  const menu2Title = document.createElement('h3');
  menu2Title.innerText = "Wagyu"
  menu2.appendChild(menu2Title);
  
  const menu3 = document.createElement('div');
  menu3.classList.add('menuItem');
  const menu3Img = new Image();
  menu3Img.src = Sashimi;
  menu3.appendChild(menu3Img);
  const menu3Title = document.createElement('h3');
  menu3Title.innerText = "Sashimi"
  menu3.appendChild(menu3Title);
  
  const menu4 = document.createElement('div');
  menu4.classList.add('menuItem');
  const menu4Img = new Image();
  menu4Img.src = Sushi;
  menu4.appendChild(menu4Img);
  const menu4Title = document.createElement('h3');
  menu4Title.innerText = "Sushi"
  menu4.appendChild(menu4Title);
  
  const menu5 = document.createElement('div');
  menu5.classList.add('menuItem');
  const menu5Img = new Image();
  menu5Img.src = Unagidon;
  menu5.appendChild(menu5Img);
  const menu5Title = document.createElement('h3');
  menu5Title.innerText = "Unagi Don"
  menu5.appendChild(menu5Title);
  
  const menu6 = document.createElement('div');
  menu6.classList.add('menuItem');
  const menu6Img = new Image();
  menu6Img.src = Tendon;
  menu6.appendChild(menu6Img);
  const menu6Title = document.createElement('h3');
  menu6Title.innerText = "Ten Don"
  menu6.appendChild(menu6Title);
  
  mainDiv.appendChild(menu1);
  mainDiv.appendChild(menu2);
  mainDiv.appendChild(menu3);
  mainDiv.appendChild(menu4);
  mainDiv.appendChild(menu5);
  mainDiv.appendChild(menu6);

  content.appendChild(mainDiv);
}