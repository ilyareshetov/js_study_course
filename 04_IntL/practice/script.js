const button = document.querySelector('.request');
const block = document.querySelector('.popup');
const close = document.querySelector('.closePopup');
const openMenu = document.querySelector('.openMenu');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.closeMenu');

button.onclick = function() {
	block.style.display = 'flex';
}

close.onclick = function() {
	block.style.display = 'none';
}

openMenu.onclick = function() {
	menu.style.left = 0;
}

closeMenu.onclick = function() {
	menu.style.left = '-50vw';
}