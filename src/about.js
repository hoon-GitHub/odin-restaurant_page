export function renderAbout() {

  // main div for the about page
  const content = document.getElementById('content');
  const mainDiv = document.createElement('div');
  mainDiv.setAttribute('id', 'aboutDiv');
  
  const title = document.createElement('h2');
  title.innerText = "How to Find Us";

  const map = document.createElement('div');
  map.setAttribute('id', 'map');
  map.innerText = "Map to be added here";

  const para = document.createElement('p');
  para.innerHTML = "<strong>Contact Us:</strong><br><u>shizuka_restaurant@google.com</u><br>(123) 123-1234<br>123 Shizuka Blvd., New York, NY 12345";
    
  mainDiv.appendChild(title);
  mainDiv.appendChild(map);
  mainDiv.appendChild(para);
  content.appendChild(mainDiv);
}