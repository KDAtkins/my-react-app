// arguments object - no longer bound with arrow functions

const add = (a, b) => {
	// console.log(arguments);
	return a + b;
};

console.log(add(55, 1));

// this keyword - no longer bound to arrow functions

const user = {
	name: 'Kevin',
	cities: ['San Diego', 'Birmingham', 'Virginia Beach'],
	printPlacesLived() {
		return this.cities.map((city) => this.name + ' has lived in ' + city);


		// return this.cities.map((city) => {
		// 	return this.name + ' has lived in ' + city;
		// });


		// const cityMessages = this.cities.map((city) => {
		// 	return this.name + ' has lived in ' + city;
		// });
		//
		// return cityMessages;


		// this.cities.forEach((city) => {
		// 	console.log(this.name + ' Has lived in ' + city);
		// });
	}
};

console.log(user.printPlacesLived());

// user.printPlacesLived();

const multiplier = {
	numbers: [1, 2, 3, 4],
	multiplyBy: 3,
	multiply() {
		return this.numbers.map((number) => this.multiplyBy * number);
	}
};

console.log(multiplier.multiply());