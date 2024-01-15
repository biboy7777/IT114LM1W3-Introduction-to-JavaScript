/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here
var x = "hi" //displays value of x
console.log(x)
// var x = 777 //undefined


// TODO 1.2 Use the let keyword to define a variable.
// Your code here
let y = 555
console.log(y)
y = 556
console.log(y)

// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here
const z = 1
console.log(z)
// z = 2
// console.log(z) error

// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: var can be used globally, let can only be used inside of a function or block, and const cannot have its value reassigned or changed.

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here
const first_num = 6
const second_num = 2 

const sum = first_num + second_num 
const difference = first_num - second_num 
const product = first_num * second_num 
const quotient = first_num / second_num 
const modulo = first_num % second_num 

console.log("Sum:", sum +"\nDifference:", difference +"\nProduct:", product +"\nQuotient:", quotient+"\nRemainder:", modulo)

// Checkpoint 1.2 What operators did you use?
// Answer: I used the +, -, *, /, and the % operators 


// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here
let my_name = "Biboy";
my_name += " Ilano";
console.log("My name is "+ my_name)

// Checkpoint 1.3 What operators did you use?
// Answer: I used the += and + operators

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here
const a = 1;
const b = 2;
const a1 = (a<b) && (a>b)
const a2 = (a>b) || (a!==b)
const a3 = (a<b) && (a!==b)
const a4 = !(a>b)
console.log(a4)

// Checkpoint 1.4 What operators did you use?
// Answer: I used the &&, !, and || operators


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators
console.log("-----------------------------")
const array = ["a", "b", "c", "d", "e"]
console.log(1 in array)
console.log("-----------------------------")
console.log(5 in array)

// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: According to what I have found, []==false evaluates to true because when using "==", javascript makes use of the valueOf() method
//(since its an empty array it moves to using toString() method) which then results to an empty string, which in this case results to false,
//making the statement []==false (false == false) result into true
// Your code here
console.log("-----------------------------")
console.log([]==false)
