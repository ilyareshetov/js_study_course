let money = prompt('How money you have?');
let apple = parseInt(prompt('How many apples you buy?'));
let bread = parseInt(prompt('How many bread you buy?'));
let appleSum = parseFloat(prompt('How much is 1 apple?')) * apple;
let breadSum = parseFloat(prompt('How much is 1 bread?')) * bread;

function haveEnough(money, appleSum, breadSum) {
	return (money > (appleSum + breadSum)) ? 'Вам хватает денег на покупки' : 'Вам не хватает денег';
}

console.log(haveEnough(money, appleSum, breadSum));