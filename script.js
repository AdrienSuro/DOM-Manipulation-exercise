const body = document.querySelector('body');
const firstTask =  document.createElement('p');
firstTask.style.color = 'red';
firstTask.textContent = `Hey I'm red!`; 
body.appendChild(firstTask);

const secondTask = document.createElement('h3') ;
secondTask.style.color = `blue`;
secondTask.textContent = "I'm a blue h3!";
body.appendChild(secondTask);

const thirdTask = document.createElement('div');
thirdTask.setAttribute('style', 'background-color : pink; border-width: 10px; border-color: black; border-style: solid; padding: 5px;');
thirdTask.classList.toggle('mainDiv');

const h1Title = document.createElement('h1') ;
h1Title.textContent = "I'm in a div!" ;
thirdTask.appendChild(h1Title);

const pinDiv = document.createElement('p') ;
pinDiv.textContent = "ME TOO!" ; 
thirdTask.appendChild(pinDiv);

body.appendChild(thirdTask);