// constants
const APIKey = '84428272ae9f013404028c86a5c295b3';
const city = 'Москва';
const url = 'https://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=' + APIKey;
const weather = new XMLHttpRequest;
const form = document.forms[0];
const pName = document.querySelector('.personName');
const icon = document.querySelector('.icon');

//functions and classes
class Person {
	constructor(name) {
		this.name = name;
		this.happiness = 0;
	}

	hasCat() {
		return ++this.happiness;
	}

	hasRest() {
		return ++this.happiness;
	}

	﻿hasMoney() {
		return ++this.happiness;
	}

	﻿isSunny() {
		weather.open('GET', url, false);
		weather.send();

		var response = JSON.parse(weather.responseText)

		if (response.main.temp-273 > 15) {
			this.happiness++;
		}

		return this.happiness;
	}
}

form.onsubmit = (e) => {
	e.preventDefault();

	let name = form.name.value;
	let cat = form.cat.value;
	let rest = form.rest.value;
	let money = form.money.value;

	let user = new Person(name);

	if (cat == 'yes') user.hasCat();
	if (rest == 'yes') user.hasRest();
	if (money == 'yes') user.hasMoney();

	user.isSunny();

	pName.innerHTML = user.name;

	switch (user.happiness) {
		case 4:
			icon.innerHTML = '😁';
			break;
		case 3:
			icon.innerHTML = '😐';
			break;
		case 2:
			icon.innerHTML = '😐';
			break;
		default:
			icon.innerHTML = '☹️';
			break;
	}
}