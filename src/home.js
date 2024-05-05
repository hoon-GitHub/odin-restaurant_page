export function renderHome() {
  
  // content div
  const content = document.getElementById('content');

  // hero section of home page
  const mainDiv = document.createElement('div');
  mainDiv.setAttribute('id', 'pageMain');
  
  // title within the hero
  const title = document.createElement('h1');
  title.innerText = "Shizuka";
  
  const para = document.createElement('p');
  para.setAttribute('id', 'pagePara')
  para.innerText = "Since opening in 2024, We have been one of America's leading Japanese restaurants, applauded for both its gracious service and casual take on fine dining.";

  mainDiv.appendChild(title);
  content.appendChild(mainDiv);
  content.appendChild(para);
}