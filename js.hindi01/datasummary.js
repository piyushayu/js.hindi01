// #primitive data types 

// 7 types
// 1. string
// 2. number
// 3. boolean
// 4. null
// 5. undefined
// 6. symbol
// 7. bigint
// what is bigint?
// bigint is a data type that can represent integers with arbitrary precision
// it is used when we need to work with very large integers that cannot be represented by the
// number data type


const outsideTemp = null;

const id = Symbol("123");  //symbol is a unique and immutable data type
const anotherId = Symbol("123"); //anotherId is a different symbol, even though it has the same description
     console.log(id === anotherId); //false, because symbols are unique

const bigNumber = 3574592945475487n; //bigint, note the 'n' at the end
//console.log(bigNumber); //3574592945475487n






//Reference (non primitive data types)
// 1. objects
// 2. array
// 3. functions


//js is statically or primitive typed language?
// js is dynamically typed language, meaning we can change the type of a variable at runtime
// for example, we can assign a string to a variable and then assign a number to the

// same variable later
// let x = "hello"; //x is a string
// x = 10; //x is now a number  


const heros = ["thor", "spiderman", "ironman"]; //array is a collection of items

let myObj = {
name: "kingg",
age : 20,

}

const myFunction = function() {
    console.log("hello world");

}


console.log(typeof outsideTemp); //object

console.log(typeof myFunction); //function

// https://262.ecma-international.org/5.1/#sec-11.4.3

//******************************************* */


// Stack vs Heap
// Stack is used for primitive data types, while Heap is used for reference data types
// Stack is a fixed size, while Heap is a dynamic size
// Stack is faster than Heap, because it is a fixed size and the memory is allocated in
// a contiguous block, while Heap is slower because it is a dynamic size and the memory
// is allocated in non-contiguous blocks


   // stack ma jab bhi kuch loga uska copy hi banta hai,
  //  heap ma jab bhi kuch loga uska reference hi banta hai, yani ki us
   // ke original value ko hi use kiya jata hai, yani ki agar aapne kisi object ko
  //  change kiya to wo sabhi jagah change ho jayega, lekin agar 
//apne kisi primitive data type ko change kiya to wo sirf usi jagah change hoga





let myyoutubeChannel = "piyush singh"

let anothername = myyoutubeChannel;

anothername = "piyush singh 2";

console.log( anothername);
console.log( myyoutubeChannel);


let user = {

    email: "user.com",
upi: "user@upi",
    
}


let userTwo = user;

userTwo.email = "user2.com";

console.log(userTwo.email);
console.log(user.email);



