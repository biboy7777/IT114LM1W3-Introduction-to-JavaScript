/*
    Resources:
    - MDN on Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    - JavaScript Tutorial on Functions: https://javascript.info/function-basics
    - freeCodeCamp on Functions: https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/
*/

// Todo 4.1 Declare a function named 'greet' that takes one parameter 'name' and displays a greeting
// Then, Call the 'greet' function with your name as the argument
// Your code here
function greet(name)
{
    console.log("Hello,", name );
}
greet("Juan Carlos R. Ilano");

// Checkpoint 4.1 What is the difference between a function declaration and a function expression?
// Answer: I know that when you call a function before the function declaration, the code will work however, when calling a function before
// the function expression, it would result in an error.

// Todo 4.2 Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
// Then, Call the 'calculateArea' function with any length and width as arguments
// Your code here
function calculateArea(length, width)
{
    const area = length * width
    return area
}
console.log(calculateArea(10,5))

// Checkpoint 4.2 What is a callback function? Provide an example.
// Answer: Based from my understanding, a callback function is a function that can be passed as an argument to another function.
function askName(callback)
{
    console.log("What is your name again? I am sorry for forgetting. ")
    callback();
}
function sayName()
{
    console.log("No worries, my name is Juan Carlos R. Ilano")
}
askName(sayName)

// Todo 4.3 Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters. The function should modify each element in the array using the provided function and return the modified array.
// Then, Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
// Useful Tutorial: https://youtu.be/H4awPsyugS0?si=7wC1B7whXVkG8X5l
// Your code here
function modifyArray(array, modifierFunction)
{
    return array.map(modifierFunction)
}

function incrementOne(num) {
    return num + 1;
}

const values = [7, 6, 5, 999]
const newArray = modifyArray(values, incrementOne)
console.log("New and modified values array:", newArray)
// Todo 4.4 See mathUtils.js for the instructions to create the add method and PI constant.
// Then, import and call the add method here and display the value of the PI constant
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here
import { addition, PI } from './mathUtils.js';
const sum = addition(11,9)
console.log(sum)
console.log("The value of PI is:", PI)



// Todo 4.5 See isPalindrome.js for the instructions to create the isPalindrome method.
// Then, import and call the isPalindrome method here
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here
import isPalindrome from './isPalindrome.js';
console.log(isPalindrome("madam"));


// Checkpoint 4.3 What does the require function and module.exports variable do?
// Should we use it over the import and export keywords? Why? Research your answer.
// Answer: Based on my understanding, require function and module.exports variable are part of the CommonJS module system in Node.js. The require function
//is used to import the modules while the module.exports is used to define what to export from the module. On the other hand,
//the import and export keywords are part of the ECMAScript module system, which is said to be supported in modern JavaScript environments.
//It is said that these keywords offer a more modern and standardized way of handling modules in JavaScript.
//Because of this, we may use these keywords when we are working with new projects and modern JavaScript environments as these keywords are preferred due to its
//standardized way and efficiency while we can use the require and module.exports for certain server-side scenarios.
