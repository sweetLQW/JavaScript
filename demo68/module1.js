// module1.js
// export var number = 0;
// export var addNumber = function () {
//   return ++number;
// }

// var number = 0;
// function addNumberInner() {
//   return ++number;
// }
// export { number, addNumberInner as addNumber };

// var number = 0;
// function addNumber() {
//   return ++number;
// }
// export { number, addNumber };

export var number = 1;
function addNumber() {
	return ++number;
}
export { addNumber };

