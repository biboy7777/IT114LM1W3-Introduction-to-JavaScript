/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
// Your code here
const squared = numbers.map(num => num ** 2);
console.log(squared)

// TODO 5.2 Use the filter method to create a new array that contains only the even numbers in the array
// Your code here
const evenNumbers = numbers.filter(item => item % 2 === 0);
console.log(evenNumbers);

// TODO 5.3 Use the reduce method to find the sum of all numbers in the array
// Your code here
const arraySum = numbers.reduce((sum, num) => sum + num, 0)
console.log(arraySum)

// TODO 5.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world', "test", "a","testing"];
// Your code here
const convertUppercase = words.map(word => word.toUpperCase());
console.log(convertUppercase)

// TODO 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
// Your code here
const fourWordsArray = words.filter(word => word.length > 4);
console.log(fourWordsArray);

// TODO 5.6 Use the reduce method to concatenate all words in the array into a single string
// Your code here
const concatenatedString = words.reduce((acc, word) => acc + word, '');
console.log(concatenatedString)

// Checkpoint 5.1 Summarize what map, filter, and reduce do
// Answer: Based on my understanding, the map method creates a new array that has the same length as the original array but its elements are modified based
//on what the function that the programmer coded.
//Filter method on the other hand, creates a new array that only meets the criteria that the programmer specified.
//Finally, the reduce method accumulates the elements in the array into a single value.