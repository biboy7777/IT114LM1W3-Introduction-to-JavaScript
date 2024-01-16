/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
*/

const randomNumber = Math.floor((Math.random() * 100) + 1); // feel free to mock this value for testing

// TODO 2.1 Display "more than fifty" if randomNumber is more than fifty
// Your code here
if (randomNumber > 50)
{
    console.log("The number is " + randomNumber + " which is more than fifty")
}
else
{
    console.log("The number is " + randomNumber +" which is less than fifty")
}

// TODO 2.2 Display whether the random number is odd or even
// Your code here
if (randomNumber % 2 == 0)
{
    console.log("The number is " + randomNumber +" which is even")
}
else
{
    console.log("The number is " + randomNumber +" which is odd")
}


// TODO 2.3 If the number if a multiple of 3, write "fizz".
// if the number is a multiple of 5 display "buzz".
// if the number is divisible by both 3 and 5, display "fizzbuzz". otherwise, display the number
// Your code here
if (randomNumber % 3 == 0 && randomNumber % 5 == 0)
{
    console.log("fizzbuzz")
}
else if(randomNumber % 3 == 0)
{
    console.log("fizz")
}
else if(randomNumber % 5 == 0)
{
    console.log("buzz")
}
else
{
    console.log(randomNumber)
}


// TODO 2.4 Use the ternary conditional operator to set toDisplay to "Even" if randomNumber is even and "Odd" if randomNumber is odd
// Your code here
let toDisplay = randomNumber % 2 === 0 ? "Even" : "Odd";
console.log("toDisplay:", toDisplay);

// Checkpoint 2.1 How do you use switch statements and when would you use them? Try researching the answer
// Answer: Switch statements are used over else-if to make the code easier to read/understand and not overcomplicate the conditions.

// TODO 2.5 Use a for loop to print the numbers 1 to N
const n = 10
// Your code here
for (let i = 1; i <= n; i++) 
{
    console.log(i)
}

const list = ["apple", "banana", "cherry", "date", "elderberry"];
// TODO 2.6 Use a while loop to display all the values in the list
// Your code here
let i = 0;
while (i < list.length) 
{
    console.log(list[i]);
    i++;
}
// Checkpoint 2.3 What is the difference between do while and while loop?
// Answer: Using while loop evaluates the conditions inside of it before executing it, while the do-while loop executes the code
// atleast once before evaluating the conditions of the loop.

// TODO 2.7 Use a for of loop to display all the values in the list
// Your code here
console.log("--------of--------")
for(const item of list)
{
    console.log(item);
}

// TODO 2.8 Use a for in loop to display all the values in the list
// Your code here
console.log("--------in---------")
for(const i in list)
{
    console.log(list[i]);
}

// TODO 2.9 Use the for each method of the list to display all its values 
// Your code here
console.log("-------each--------")
list.forEach((element) => 
{
    console.log(element)
})


// Checkpoint 2.2 When should you use for of, for in, or .forEach loops? Try researching the answer
// Answer: .forEach is used specifically for arrays as it has a cleaner and easy understand syntax
// for in is used when you want to iterate over the properties of an object, it is also said that this is not recommended for arrays.
// for of is used when you want to iterate over the values of an iterable object. It is also said that this loop is more verstaile.

// TODO 2.10 Use the try and catch block to catch division by zero errors in the code below.
// In the finally block, simulate cleaning up resources by displaying "cleaning up resources"
const numerator = Math.floor((Math.random() * 100) + 1);
const denominator = Math.floor((Math.random() * 5)); // feel free to mock this value for testing

try{
    const quotient = numerator / denominator
    if(denominator === 0){
        throw new Error("Division by zero error") 
    } else{
        console.log("Quotient: "+ quotient) 
    }
}
catch (error) {
    console.log("ERROR:", error.message);
} finally {
    console.log("Cleaning up resources");
}



