//if 
const isuserloggedIn = true
//if ma value tabhi execute hoga jab diya hua command () ma true ho  

const temperature = 40
//else is a conditional prop,kisi ik ko print karna ma decide kara ga

if (temperature === 40 ){

//console.log("piyush");
//console.log("less than 50");

} else {

console.log("temp is greater than 50");


}



//!= use for negative checking

//!== use for strictly negative check , value alag and datatype bhi alag hona chaiye

/* if (score > 100) {

const power = "fly"
console.log(`User  power: ${power}`);


} */

//ya bhar ha scope ka to execute nahi hoga 
//but agar we use var at place of const then ya print ho jaya ga because vo global ha


//console.log(`User  power: ${power}`);

const balance = 100

if (balance > 50) console.log("test");
//this is called implesit scope 
//isma { } nahi laagana hota , but sirf ik line ma hi likhna sahi hota ha 
// , laga laga ka log likh sakta ha par vo gandi practice hoati ha
//end  ma semicolon is imp

if (balance < 50) {
//console.log("less than");


}else 

if (balance < 750) {

console.log("less than 750");


}

// asa hi kar ka hum log bhot sara else  laga ka multiple checks kar sakta ha 


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


// & ka matlab ha ki jitni bhi condition ha vo sari true ani chaiye

if (userLoggedIn && debitCard && 2==2 ){

console.log("Allow to buy coursre");

}

// || ka matlab ha sirf ik condn bhi true hui to ma jau ga

if (loggedInFromGoogle || loggedInFromEmail || guestUser){

console.log("User logged in ");

}



// Nullish Coalescing operator (??): null undefined

let val1;
//val1 = 5 ?? 10

//val1 = null ?? 10

//null ayi ha to uska safety check karta ha , kuch nahi aya to null aa jaya ga

//val1 = undefined ?? 15


val1 = null ?? 10 ?? 20
// isko jo value sabse pahela mil jaya gi vo assign kar daga

console.log(val1);


// Terniary Operator

//condition ? true : false

const iceteaprice = 300
iceteaprice  <= 80 ? console.log("less than 80") : console.log("more than 80");












