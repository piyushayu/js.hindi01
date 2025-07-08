

function sayMyName(){

console.log("i");

console.log("y");


console.log("u");


console.log("s");

}

//firt right reference then ( ) this is excution

//sayMyName() 

function addTwoNumbers(number1, Number2){

    //console.log(number1 + Number2);//
    
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

// console.log(loginUserMessage("hitesh"))

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





