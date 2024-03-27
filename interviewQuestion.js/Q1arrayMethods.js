//slice Method
const arrayIntegers=[1,2,3,4,5]
const subSetnewarray=arrayIntegers.slice(0,2)//[1,2]
const newarray=arrayIntegers.slice(2,3)//[3]

//splice Method
// Example array
let fruits1 = ['apple', 'banana', 'cherry', 'date'];
fruits.splice(2,0,'orange', 'grape');
// This will add 'orange' and 'grape' starting from index 2 without removing any elements
console.log(fruits); // Output: ['apple', 'banana', 'orange', 'grape', 'cherry', 'date']
fruits.splice(3,2)
// This will remove 2 elements starting from index 3 ('grape' and 'cherry')
console.log(fruits); // Output: ['apple', 'banana', 'orange', 'date']

// Replacing elements using splice
fruits.splice(1, 1, 'pear');
// This will replace 1 element starting from index 1 with 'pear'

console.log(fruits); // Output: ['apple', 'pear', 'orange', 'date']


let numbers=[1,2,3,4,5]
numbers.splice(2,0,6,7)
// console.log(numbers)[1,2,6,7,3,4,5]

let colors = ['red', 'green', 'blue', 'yellow', 'orange'];
colors.splice(2,3);
// console.log(colors)['red','green']

