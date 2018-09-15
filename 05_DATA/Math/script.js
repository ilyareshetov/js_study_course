function Power(number) {
	return Math.abs(number**Math.floor(Math.random()*9+1));
}

var number = prompt('Write a number');

alert(Power(parseInt(number)));