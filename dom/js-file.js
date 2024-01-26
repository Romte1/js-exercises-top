const container = document.querySelector('#container');


const para = document.createElement('p');
container.appendChild(para);
para.style.color= 'red';
para.textContent = 'Hey I’m red!';

const h3 = document.createElement('h3');
container.appendChild(h3);
h3.style.color= 'blue';
h3.textContent = "I'm a blue h3!";

const div = document.createElement('div');
div.style.cssText= 'background-color:pink; border: 2px solid black;'

const h1 = document.createElement('h1');
div.appendChild(h1);
h1.textContent= 'I’m in a div';

const para2 = document.createElement('p');
div.appendChild(para2);
para2.textContent = 'ME TOO!';

container.appendChild(div);



