export function renderAbout() {

  // about page contents to be added..
  const content = document.getElementById('content');
  const mainDiv = document.createElement('div');
  mainDiv.setAttribute('id', 'pageMain');
  
  const title = document.createElement('h1');
  title.innerText = "About";
  
  mainDiv.appendChild(title);
  content.appendChild(mainDiv);
}