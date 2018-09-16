let names = [
	[
		['куры', 'гуси', 'павлины'],
		['сокол', 'орел', 'соловей']
	],
	[
		['собака', 'кошка'],
		['обезьяна', 'рысь']
	]
];

for (subname of names) {
	for (subsubname of subname) {
		subsubname.forEach((name) => {
			console.log(name);
		})
	}

}