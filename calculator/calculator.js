function add (x ,y) {
	return x + y;
	
}

function subtract (x, y) {
	return x - y;
}

function sum (numList) {
	let totalSum = 0;
	for(i = 0; i < numList.length; i++) {totalSum += parseInt(numList[i], 10);}
	return totalSum;
}

function multiply (numList) {
	let total = 1;
	for(i = 0; i < numList.length; i++) {total *= parseInt(numList[i], 10);}
	return total;
}

function power(base, power ) {
	let total = 1;
	for(i = 0; i < power; i++) {total *= parseInt(base, 10);}
	return total;
}

function factorial(num) {
	if(num === 0) {return 1;}
	else {
		let total = 1;
		for(i = num; i > 0; i--) {total *= parseInt(i, 10);}
		return total;
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}