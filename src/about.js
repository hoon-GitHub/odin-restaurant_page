export function renderAbout() {

  // main div for the about page
  const content = document.getElementById('content');
  const mainDiv = document.createElement('div');
  mainDiv.setAttribute('id', 'aboutDiv');
  
  const title = document.createElement('h2');
  title.innerText = "Authentic Japanese Fine Dining";
  
  mainDiv.appendChild(title);
  content.appendChild(mainDiv);
}