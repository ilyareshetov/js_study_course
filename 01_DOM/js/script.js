let money = prompt('How money you have?');
let apple = parseInt(prompt('How many apples you buy?'));
let bread = parseInt(prompt('How many bread you buy?'));
let appleSum = parseFloat(prompt('How much is 1 apple?')) * apple;
let breadSum = parseFloat(prompt('How much is 1 bread?')) * bread;
let balance = money > (appleSum + breadSum);
document.body.innerHTML = balance;