

function sayMyName(){

console.log("i");

console.log("y");


console.log("u");


console.log("s");

}

//firt right reference then ( ) this is excution

//sayMyName() 

function addTwoNumbers(number1, Number2){

    console.log(number1 + Number2);//
    
    let result = number1 + Number2
return result
//console.log("piyush");


}

//ik bar function ma result likhna ka baad kuch bhi print nahi hoga .
//ussa pahela likh sakta 

const result = addTwoNumbers(3,5)

//(number1, Number2) these are parameters

//"4" these are arguments


console.log("Result: ", result);

//console print matlab ya nahi ki vo value ko return bhi kara

addTwoNumbers(3,4)

//addTwoNumbers(3,"4")

//addTwoNumbers(3,"4")


function loginUserMessage(username = "piyu"){

//in case  app chahta hi nahi ki khali raha to username ko naam dado, to jab user kuch nahi likha ga tab ya likha aya ga

    //if(username === undefined){

       // ! is use to trun true to false and f to t
//js ma " " and undefined ko false kah data ha isliye ya vala method sahi ha 

//anothr method of above syntax 
if(!username){

console.log("Please enter a username ");
return 
    }
return `${username} just logged in `

}
//}

 console.log(loginUserMessage("hitesh"))

//console.log(loginUserMessage("piyush"));


function calculateCartPrice(val1, val2 , ...num1){

return num1

//val means value add karna ki vajah sa vo array sa alg ho jya ga


}

console.log(calculateCartPrice(20,49,67,))

 const user = {

username: "piyush",
price: 199

//if we write prices here then it will show undefined 
//that's you have to chech vo value ha ki nahi and datatype kya ha etc.
//thatwhy typescript is better in this case

 }

function handleObject(anyobject){


console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}

//handleObject(user)
//another way to define above thing

handleObject({

username: "piyu",
price:699


})

//ya tha object ko pass kaarana ka tarika

//now array

const myArr = [200, 400, 100, 600]

function returnSecondValue(getArray){

return getArray[3]

}

console.log(returnSecondValue(myArr));




//para meters note

function showMessage(from, text) {

  from = '*' + from + '*'; // make "from" look nicer

  console.log( from + ': ' + text );
}

let from = "Ann";

showMessage(from, "Hello"); // *Ann*: Hello

// the value of "from" is the same, the function modified a local copy
console.log( from ); // Ann


//we can give some text in parameter to avoid seeing undefined as argument

//We can specify the so-called “default” (to use if omitted) value for a parameter in the function declaration, using =:

function showMessage(from, text = "no text given") {
  alert( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given


function showMessage(from, text = anotherFunction()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text
}



//Nowadays, we can come across them in old scripts.

//For example, an explicit check for undefined:

function showMessage(from, text) {
  if (text === undefined) {
    text = 'no text given';
  }

  alert( from + ": " + text );
}




//Or we could use the || operator:

/*function showMessage(text) {
  // if text is undefined or otherwise falsy, set it to 'empty'
  text = text || 'empty';
  ...
}*/


//how to use return  

function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Do you have permission from your parents?');
  }
}

let userAge = prompt('How old are you?', 18);

if ( checkAge(userAge) ) {
  alert( 'Access granted' );
} else {
  alert( 'Access denied' );
}

//naming function
 
showMessage()     // shows a message
getAge()          // returns the age (gets it somehow)
calcSum()         // calculates a sum and returns the result
createForm()      // creates a form (and usually returns it)
checkPermission() // checks a permission, returns true/false

//For example, the jQuery framework defines a function with $. The Lodash library has its core function named _.

//these are exceptions. Generally function names should be concise and descriptive.


//Using a question mark operator '?':

function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
}
//Using OR || (the shortest variant):

function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you?');
}
//Note that the parentheses around age > 18 are not required here. They exist for better readability.

//call back functions,

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);


//another method of above thing by fraction expression 

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);



//easist way to do this, a condition where functn expression is more useeful than functn dicleration
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  function() { alert("Hello!"); } :
  function() { alert("Greetings!"); };

welcome(); // ok now


//arrow function
//They took arguments from the left of =>, evaluated and returned the right-side expression with them.

/*let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello!') :
  () => alert("Greetings!");

welcome();*/

//Sometimes we need a more complex function, with multiple expressions and statements. In that case, we can enclose them in curly braces. The major difference is that curly braces require a return within them to return a value (just like a regular function does).


let sum = (a, b) => {  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};

alert( sum(1, 2) ); // 3











