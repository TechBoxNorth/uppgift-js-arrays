const numbers = [2, 6, 12, 7, 22, 35];

// 1
let firstElement = numbers[0];
console.log(`First element: ${firstElement}`);

// 2
let lastElement = numbers[numbers.length - 1];
console.log(`Last element: ${lastElement}`);

// 3
let fourthElement = numbers[3];
console.log(`Fourth element: ${fourthElement}`);

// 4
let secondElement = numbers[1];
let fifthElement = numbers[4];
let newArray = [secondElement, fifthElement];
console.log(newArray);

// 5
let numbersLength = numbers.length;
console.log(`The array holds ${numbersLength} elements.`)

// 6
let pushed = numbers.push(99); // returns the new length of the array
console.log(`The new length of the array is ${pushed}.`);

// 7
let unshifted = numbers.unshift(111); // returns the new length of the array
console.log(`The new length of the array is ${unshifted}.`);

// 8
let popped = numbers.pop(); // returns the value of the popped element
console.log(`The value of the removed element was ${popped}.`);

// 9
let shifted = numbers.shift(); // returns the value of the shifted element
console.log(`The value of the removed element was ${shifted}.`);

// 10
console.log(numbers);