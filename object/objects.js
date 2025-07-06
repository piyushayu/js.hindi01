//singleton
//Object.create


//object literals

const mySym = Symbol("key1")

const JsUser = {
  name: "Piyush",

  [mySym]: "mykey1",
//to use it as a symbol write mySym in square brackets

  age: 25,
location: "delhi",
Email: "djof.com",
isLoggedIn: true,
lastLoginDays: ["monday", "tuesday", "wednesday"],

};


//diff btw object and array
//object is a collection of key-value pairs, while array is a collection of values
//object is unordered, while array is ordered
//object is accessed by keys, while array is accessed by index
//object is used to store data in a structured way, while array is used to store data in a sequential way   
//object can have any data type as value, while array can only have values of the same data type


//console.log(JsUser.name); // Piyush

//try to use square brackets for accessing the value

//console.log(JsUser["Email"]); 

//jada tar dot sa hi value ko access kiya jata but in some case [] iska use bhi karna padh sakta ha and kuch jaga ekdam [] isi ka karna pada ga or koi option nahi hoga.

//console.log(JsUser[mySym]);

JsUser.Email = "hdd.com"
//Object.freeze(JsUser)

//freeze karna sa nayi value jo doga vo nahi aya gi , error dikhaya ga nahi but laga bhi nahi

JsUser.Email = "hflds.com"
console.log(JsUser);


JsUser.greeting = function(){
console.log("hello js");


}


JsUser.greetingTwo = function(){
console.log(`hello js user, ${this.name}`);


}


console.log(JsUser.greeting());

console.log(JsUser.greetingTwo());










