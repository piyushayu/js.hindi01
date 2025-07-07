const marvel_heros = ["thor", "ironman", "hulk", "spiderman", "captain america"];
const dc_heros = ["superman", "batman", "flash", "green lantern"]



//marvel_heros.push(dc_heros)// adds the entire dc_heros array as a single element to marvel_heros

//console.log(marvel_heros); // ["thor", "ironman", "hulk", "spiderman", "captain america", ["superman", "batman", "flash", "green lantern"]]

//array koi bhi array ko push kar sakta hai, lekin wo as a single element hi add hota hai

//console.log(marvel_heros[5][2]); // "flash", accessing the third element of the nested array

 const allHeros = marvel_heros.concat(dc_heros); // concatenates dc_heros to marvel_heros
//console.log(allHeros); // ["thor", "ironman", "hulk", "spiderman", "captain america", ["superman", "batman", "flash", "green lantern"]]


//push and concat are different
// push adds the entire array as a single element, while concat merges the arrays into one

// concat does not modify the original array, it returns a new array    


const all_new_heros = [...marvel_heros, ...dc_heros]; // using spread operator to merge arrays

console.log(all_new_heros); // ["thor", "ironman", "hulk", "spiderman", "captain america", "superman", "batman", "flash", "green lantern"]

const another_array = [1, 2, 3, [4, 5, 6], 7, [ 6, 7, [4,5]]]

const real_another_array = another_array.flat(Infinity); // flattens the array to a depth of infinity

console.log(real_another_array); 

//number ka use bhi kar sakte hain, jaise flat(2) se 2 level tak flatten karega


console.log(Array.isArray("piyush")); 
console.log(Array.from("piyush")); // converts a string to an array of characters


console.log(Array.from({name: "piyush"})); // converts an object to an array, but since the object does not have iterable properties,
//ya direct convert nahi hota hai, isliye empty array return karega
//usa batana pada ga ki keys ka array banau ya value ka array banau


let score1 = 100
let score2 = 200
let score3 = 300    

console.log(Array.of (score1, score2, score3)); // creates an array with the given elements
// Array.of() is used to create an array from a set of elements, it is similar

//returns [100, 200, 300]; // creates an array with the given elements


//syntax jab hama bich ma kuch gusana ho kuch


//styles[Math.floor((styles.length - 1) / 2)] = "Classics";


/*- styles.length
- Gets the total number of elements in the styles array.

- styles.length - 1

- Subtracts 1 to adjust for zero-based indexing (arrays in JavaScript start at index 0).

- (styles.length - 1) / 2

- Divides by 2 to find the middle index. This works for both even and odd lengths.

- Math.floor(...)

- Rounds down to the nearest whole number. This ensures you get a valid index (especially important when the array has an even number of elements).
- styles[...] = "Classics"

- Assigns the value "Classics" to the calculated index in the array.*/


//let styles = ["Jazz", "Rock", "Pop", "Hip-Hop", "Electronic"];
// styles.length = 5
// (5 - 1) / 2 = 2
// Math.floor(2) = 2

//styles[Math.floor((styles.length - 1) / 2)] = "Classics";
// styles becomes ["Jazz", "Rock", "Classics", "Hip-Hop", "Electronic"]


//for even values in array

//let styles = ["Jazz", "Rock", "Pop", "Hip-Hop"];
// styles.length = 4
// (4 - 1) / 2 = 1.5
// Math.floor(1.5) = 1

//styles[Math.floor((styles.length - 1) / 2)] = "Classics";
// styles becomes ["Jazz", "Classics", "Pop", "Hip-Hop"]









