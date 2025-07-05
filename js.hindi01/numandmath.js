const  score = 100;

const balance = new Number(100)
//console.log(balance); // This will print the Number object

//console.log(balance.toString().length); // This will convert the Number object to a string and print its length
//console.log(balance.toFixed(2)); // This will convert the Number object to a string with 2 decimal places

//const otherNumbar = 100.123456789;
//console.log(otherNumbar.toPrecision(5)); // This will convert the Number object to a
// string with 5 significant digits


const otherNumbar = 1004.123456789;
//console.log(otherNumbar.toPrecision(3));

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN')); // This will convert the Number object to a string with locale-specific formatting

//*************************Maths****************************** */

console.log(Math);
//console.log(Math.abs(-4)); // This will return the absolute value of -4);

//console.log(Math.round(4.6)); // This will round 4.6 to the nearest integer, which is 5

//if you want to round down, you can use Math.floor
//console.log(Math.floor(4.6)); // This will round 4.6 down to the nearest integer, which is 4
//if you want to round up, you can use Math.ceil
//console.log(Math.ceil(4.6)); // This will round 4.6 up to the nearest integer, which is 5


//use math library from console chrome 

console.log(Math.min(1, 2, 3, 4, 5)); // This will return the minimum value from the list of numbers
console.log(Math.max(1, 2, 3, 4, 5)); // This will return the maximum value from the list of numbers



//console.log(Math.random()); // This will return a random number between 0 and 1

//console.log(Math.random() * 10 + 1); // This will return a random number between 1 and 10

console.log((Math.random()*10) + 1 ); // This will return a random number between 1 and 10, but it can be a decimal number 

console.log(Math.floor(Math.random()*10) + 1 ); // This will return a random integer between 1 and 10

const min = 10;
const max = 20;

Math.random() * (max - min + 1) + min; // This will return a random number between min and max, inclusive

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

//+1 add to avoid getting 0 as a result, since Math.random() can return 0
//and +min is added to shift the range to start from min












