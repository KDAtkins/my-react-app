'use strict';

// const square = function (x) {
// 	return x * x;
// };
//
// console.log(square(3));
//
// // const squareArrow = (x) => {
// // 	return x * x;
// // };
//
// const squareArrow = (x) => x * x;
//
// console.log(squareArrow(9));

var fullName = 'Kevin D. Atkins';

var getFirst = function getFirst(fullName) {
	return fullName.split(' ')[0];
};

var getFirstName = function getFirstName(fullName) {
	return fullName.split(' ')[0];
};

console.log(getFirstName(fullName));
console.log(getFirst(fullName));
