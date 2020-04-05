const colorBtn = document.querySelector('.colorBtn');
const bodyBg = document.querySelector('body');

const colors = ['#edd2c5', '#90a1ae', '#bfafb6', '#cfdbe3', '#efe2c7v'];

colorBtn.addEventListener('click', changeColor);

function changeColor() {
    let random = Math.floor(Math.random() * colors.length)
    bodyBg.style.backgroundColor = colors[random]
}