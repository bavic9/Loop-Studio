const main = document.querySelector('.main');
const closemenu = document.querySelector('.closemenu');
const hamburger = document.querySelector('.hamburger');


hamburger.addEventListener('click',show);
closemenu.addEventListener('click',close);

function show(){
    main.style.display = 'flex';
    main.style.left = '0'
}
function close(){
    main.style.left = '-100vh';
}