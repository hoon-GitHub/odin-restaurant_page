export function renderMenu() {
  
  // menu page contents to be added..
  const content = document.getElementById('content');
  const mainDiv = document.createElement('div');
  mainDiv.setAttribute('id', 'pageMain');
  
  const title = document.createElement('h1');
  title.innerText = "Menu";
  
  mainDiv.appendChild(title);
  content.appendChild(mainDiv);
}