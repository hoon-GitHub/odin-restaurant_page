export function renderMenu() {
  
  // main div for the menu page
  const content = document.getElementById('content');
  const mainDiv = document.createElement('div');
  mainDiv.setAttribute('id', 'menuDiv');
  
  // menu items
  const menu1 = document.createElement('div');
  menu1.classList.add('menuItem');
  const menu1Title = document.createElement('h2');
  menu1Title.innerText = "Menu1"
  menu1.appendChild(menu1Title);

  const menu2 = document.createElement('div');
  menu2.classList.add('menuItem');
  const menu2Title = document.createElement('h2');
  menu2Title.innerText = "Menu2"
  menu2.appendChild(menu2Title);
  
  const menu3 = document.createElement('div');
  menu3.classList.add('menuItem');
  const menu3Title = document.createElement('h2');
  menu3Title.innerText = "Menu3"
  menu3.appendChild(menu3Title);
  
  const menu4 = document.createElement('div');
  menu4.classList.add('menuItem');
  const menu4Title = document.createElement('h2');
  menu4Title.innerText = "Menu4"
  menu4.appendChild(menu4Title);
  
  const menu5 = document.createElement('div');
  menu5.classList.add('menuItem');
  const menu5Title = document.createElement('h2');
  menu5Title.innerText = "Menu5"
  menu5.appendChild(menu5Title);
  
  const menu6 = document.createElement('div');
  menu6.classList.add('menuItem');
  const menu6Title = document.createElement('h2');
  menu6Title.innerText = "Menu6"
  menu6.appendChild(menu6Title);
  
  mainDiv.appendChild(menu1);
  mainDiv.appendChild(menu2);
  mainDiv.appendChild(menu3);
  mainDiv.appendChild(menu4);
  mainDiv.appendChild(menu5);
  mainDiv.appendChild(menu6);

  content.appendChild(mainDiv);
}