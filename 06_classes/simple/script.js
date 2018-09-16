class Custumer {
	constructor(name) {
		this.name = name;
	}
	buy() {
		console.log('Куплено');
	}
}

class childCustumer extends Custumer {
	getPresent() {
		console.log('Шарик в подарок');
	}
}

const people1 = new Custumer('Alena');
people1.buy();

const people2 = new childCustumer('Boris');
people2.getPresent();