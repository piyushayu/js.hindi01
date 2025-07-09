const user = {

username:"piyush",
price: 999,

welcomeMessage: function()
{
//'this' represent current context
console.log(`${this.username}, welcome to website`);

//console.log(this);
//this above log will tell about every context going on in code .
}


}

user.welcomeMessage()

//uper this ki vajah sa context clear ha , par sirf uper ha uska baad naya 
//context suru ho gaya isliye name change ho gaya

user.username = "kia"
user.welcomeMessage()

//console.log(this);


//global object is window object


/*function A()
{

//console.log(this);

this ko to likh sakta ha yaha par
this ka saath koi variable mat likho undefined daga

console.log(this.username);

}

A() */


/* const A = () => {

let username = "piyush"
console.log(this.username);

//yaha par bhi same uper jasa this behave kara ga

}

A() */

/*const addtwo = (a , b) => {

return a + b


};*/

//console.log(addtwo(3,4));


//implesit method
//isma {} isa hata ka ik line ma likh sakta ha


//const addtwo = (a , b) =>  (a + b)



//{ } use kiya to return keyword likhna hi pada Ga 
//() isma nahi karna padaga

const addtwo = (a , b) => ({username: "piyush"})

//username accses karna ha to curly braket lagana padha ga

console.log(addtwo(3,5));



// Immediately Invoked Function Expression (IIFE)///////

(function chai(){
//it is named IIFE

    console.log(`DB Connect`);

})();

//global scope ka problem sa bachna ka liya iska use kiya


//()()
//here first bracket ma hum definition likhta ha 
// second ma hum log exicution hota ha  same as cahi()

//interested point is that if we put that function system in bracket() then also we can 
//print it 

//chai()

/* ( () => {
//simple IIFE
console.log(`DB CONNECT TWO`);


})() */

//ab yaha error isliye nahi aa raha ki kuch galat ha
//galat uper ha , hamna semicolon nahi lagaya ha , uper vala functn ma 
//do IIFE likhta time semicolon ka dhyan rakha


((name) => {

    //yaha hamna parameter diya ha
console.log(`DB CONNECTED TWO ${name}`);


}) ('piyush')









