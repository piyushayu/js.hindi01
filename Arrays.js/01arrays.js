//array

const myArr = [0 ,1, 2, 3, 4, 5];
const myheros = ['Shiva', 'Rama', 'Krishna', 'Hanuman', 'Ganesha'];

const myArr2 = new Array(1, 2, 3, 4, 5, 6);
//isma square brackets ka use nahi hota hai in new Array() me


console.log(myArr[0]); // 0

//Array methods


//myArr.push(6); // adds 6 at the end of the array
//console.log(myArr); // [0, 1, 2, 3, 4, 5, 6]

//myArr.pop(); // removes the last element of the array

//myArr.unshift(6); // adds 6 at the beginning of the array

myArr.shift(); // removes the first element of the array


//.log(myArr.includes(7)); // false, checks if 7 is present in the array
//console.log(myArr.indexOf(8)); // -1, checks the index of 8 in the array (not present)

//-1 daga index ka matlab hota hai ki element nahi mila

const newArr = myArr.join(); // joins the array elements into a string
//console.log(myArr);
//console.log(typeof newArr); // string




//console.log(myArr);


//slice and splice

console.log("A", myArr);
const myn1 = myArr.slice(1, 3); // returns a new array with elements from index 1 to 2

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3); // removes elements from index 1 to 3 and returns them


console.log ("C", myArr);

console.log(myn2);

//diff btw slice and splice
//slice returns a new array without modifying the original array
//splice modifies the original array and returns the removed elements   


//it is a way to remove and add other element 


/*let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", "dance");

alert( arr ) // now ["Let's", "dance", "right", "now"]*/


//its a method to add element without removal

/*let arr = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then insert "complex" and "language"
arr.splice(2, 0, "complex", "language");

alert( arr ); // "I", "study", "complex", "language", "JavaScript"*/











