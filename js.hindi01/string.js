const name = "piyush";
const repocount = 20;

// console.log(name + repocount + "value");
//its outdated now , so don't use it

//modern way ( string interpolation)

console.log('hello my name is ${name} and my repo count is ${repocount}');


//another method to create a string is using the String constructor
// This is not commonly used, but it is valid JavaScript
// It creates a string object, which is different from a primitive string

const gameName = new String('call-of-duty');

//const gameName = new String("cod");


console.log(gameName[0]); 
console.log(gameName.__proto__); // This will show the prototype of the String object

console.log(gameName.length); // This will show the length of the string object
//console.log(gameName.toUpperCase()); // This will convert the string object to uppercase

//console.log(gameName.charAt(1)); // This will return the character at index 3 of the string object
//counting start from 0

//console.log(gameName.indexOf("d")); // This will return the index of the first occurrence of "d" in the string object

 const newString = gameName.substring(0 , 2); // This will return a substring from index 0 to index 2 of the string object
console.log(newString); // This will print the substring

//isma last ki value nahi aayegi, yani ki last wala character nahi aayega

const anotherString = gameName.slice(-6 , 1); // This will return a substring from index 0 to index 2 of the string object
//we can give negative values to slice, which will count from the end of the string

console.log(anotherString); // This will print the substring

const newStringOne = " piyush singh ";
console.log(newStringOne);

console.log(newStringOne.trim()); // This will remove the whitespace from both ends of the string

const url = "https://www.youtube.com/@piyush%20singh_01";

//when user give space in url, it is replaced with '%20'
// This is a common encoding for spaces in URLs
// We can replace '%20' with '-' to make it more readable
console.log(url.replace( '%20', '-')); // This will replace all occurrences of '%20' with '-'

console.log(url.includes("ayush")); // This will check if the string contains "ayush"



console.log(gameName.split('-')); // This will split the string into an array of substrings using '-' as the separator

//practice of string is very important in javascript, because strings are used everywhere