// console.log("hello world")
// alert('Hello, world!');
// window.document.write('<p>Welcome to CSEN 60!</p>');

// document.append('<p>This should come after the h1</p>')

/*
    Function to calculate the sum of two numbers.
    Inputs: a, b - numbers to be added.
    Output: returns the sum of a and b.
*/

// TODO: fix this function

/**
 * @description: adds two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @return {number} The sum of a and b.
 */

function add(a, b) {
    return a + b;
}

let x = 100;
if (true) {
    x = 200;
}
console.log(x);

let y
y = null
let z = 0
console.log(y, z);

let greeting = "Hello, world!";
let response = `The time is ${new Date()}`;
console.log(response)

const age = 17

if(age > 18){
    console.log("You are of age")
} else{
    console.log(`You aren't of age.  Please wait ${18 - age} years`)
}

let isOverAge = (age > 18);

console.log("\n", isOverAge)

let person = {
    name: "John",
    age: 30,
    isStudent: false
};

person.age
console.log(person["age"])

console.log(typeof("hello world"))

alert("This is  a important message")

// Strict equality, 1: are these the same type, 2: are these the same value
console.log(3 === '3'); // false
console.log(3 === 3)

// Loose equality
console.log(3 == '3'); // true