const page = document.querySelector('body');

for(var i = 6; i <= 100000; i = i+6) {
	page.innerHTML += i + '<br>';
}