/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
// Your code here
const firstItem = numbers[0]
const fifthItem = numbers[4]
const lastItem = numbers[numbers.length - 1]
console.log("The first item is:",firstItem)
console.log("The fifth item is:", fifthItem)
console.log("The last item is:",lastItem)

// Todo 3.2 calculate the min, max, and the average of the numbers array
// Your code here
const minNumber = Math.min(...numbers);
const maxNumber = Math.max(...numbers);
const sum = numbers.reduce((acc, num) => acc + num, 0);
const average = sum / numbers.length

console.log("The min is:", minNumber)
console.log("The max is:", maxNumber)
console.log("The average is:", average)
// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer: I think so far, I believe that they are actually pretty similar and I guess you could say that

// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
// Your code here
const objectInfo = {
    courseCode: "IT114L",
    name: "Web Systems and Technologies (Laboratory)",
    units: 3,
    numberOfStudents: 40
}

// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
// Your code here
objectInfo.professorName = "Professor Job J. Lipat"
console.log("The professor is:", objectInfo.professorName)

// Todo 3.5 Declare and array of objects with information about the courses you are taking this term
// Your code here
const coursesArray =[
    {
        courseCode: "SS036",
        name: "Science, Technology, and Society",
        units: 3
    },
    {
        courseCode: "IT133",
        name: "Technopreneurship",
        units: 3
    },
    {
        courseCode: "IT114L",
        name: "Web Systems and Technologies (Laboratory)",
        units: 1
    },
    {
        courseCode: "IT114",
        name: "Web Systems and Technologies",
        units: 2
    },
    {
        courseCode: "CS120",
        name: "Structure of Programming Languages",
        units: 3
    },
    {
        courseCode: "CS107L",
        name: "Information Management (Laboratory)",
        units: 1
    },
    {
        courseCode: "CS107",
        name: "Information Management",
        units: 2
    }
]

// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
// Your code here
let totalUnits = 0
for (const course of coursesArray) 
{
    totalUnits += course.units;
}
console.log("The total number of units is:", totalUnits)
// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: I think dictionaries in Python is the perfect equivalent of objects in JavaScript as both of them make use of the key and value pairing which can also be modifed.


// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here
let newArrayNumbers = [...numbers, 777]
console.log("Here is the new array:", newArrayNumbers)

// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
// Your code here
const {courseCode, units, ...rest} = objectInfo
console.log("Course Code:", courseCode);
console.log("Units:", units);
