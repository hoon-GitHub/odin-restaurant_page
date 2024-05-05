import Map from './map.png';

export function renderAbout() {

  // add underline to indicate active page
  const aboutBtn = document.getElementById('about');
  aboutBtn.style.textDecoration = 'underline';

  // main div for the about page
  const content = document.getElementById('content');
  const mainDiv = document.createElement('div');
  mainDiv.setAttribute('id', 'aboutDiv');
  
  const title = document.createElement('h2');
  title.innerText = "How to Find Us";

  const map = document.createElement('div');
  map.setAttribute('id', 'map');
  const mapImage = new Image();
  mapImage.src = Map;
  mapImage.alt = "Sample map image, not actual"
  mapImage.setAttribute('width', '60%');
  map.appendChild(mapImage);

  const para = document.createElement('p');
  para.innerHTML = "<strong>Hours:</strong><br>MON-THU: 5pm-10pm<br>FRI-SAT: 5pm-11pm<br>SUN: Closed<br><br><strong>Contact Us:</strong><br><u>shizuka_restaurant@google.com</u><br>(123) 123-1234<br>123 Shizuka Blvd., New York, NY 12345";
    
  mainDiv.appendChild(title);
  mainDiv.appendChild(map);
  mainDiv.appendChild(para);
  content.appendChild(mainDiv);
}