const ul = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.onclick = () => {
    let producto = input.value;
    input.value = '';
    let liPro = document.createElement('li');
    let spanPro = document.createElement('span');
    let buttonPro = document.createElement('button');

    spanPro.textContent = producto;
    buttonPro.textContent = 'Delete';
    
    liPro.appendChild(spanPro);
    liPro.appendChild(buttonPro);
    ul.appendChild(liPro);

    buttonPro.addEventListener('click', () => {
        ul.removeChild(liPro);
    })

    input.focus();
}