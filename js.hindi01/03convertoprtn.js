let score = true;

console.log(typeof score); //string
//score is a string because it is written in quotes
//if we write it as 33 then it will be number

let valueInNumber = Number(score); //convert string to number
console.log(typeof valueInNumber); //number
//now valueInNumber is a number

//console.log(valueInNumber); 

NaN //Not a Number
//if we try to convert a string that cannot be converted to a number, it will return NaN
//for example, if we try to convert "abc" to a number, it will return NaN
//NaN is a special value in JavaScript that represents a value that is not a number
//it is a type of number, but it is not a valid number

//null ko number me convert karne par 0 milega

//undefined ko number me convert karne par NaN milega

//true ko number me convert karne par 1 milega
//false ko number me convert karne par 0 milega

let isLoggedIn = "";

let booleanIsLoggedIn = Boolean(isLoggedIn); 
//console.log(booleanIsLoggedIn); 

//empty string is falsy value
//"hit" is truthy value

  let someNumber = 33;
  let stringNumber = String(someNumber); //convert number to string
 // console.log(stringNumber); 

  //console.log(typeof stringNumber); //string    
//now stringNumber is a string

//***********************operations *******************//

let value =3
let negativeValue = -value; //negation
//console.log(negativeValue); //-3

//console.log(2 + 2); //addition
//console.log(2 - 2); //subtraction
//console.log(2 * 2); //multiplication
//console.log(2 / 2); //division
//console.log(2 % 2); //modulus (remainder)
//console.log(2 ** 2); //exponentiation (power) 


//addition of strings//
let firstName = "John";
let lastName = "Doe";
let fullName = firstName  + lastName; 

//console.log(fullName); //JohnDoe

//console.log("1" + 2); //12
//string concatenation, not addition
//console.log(1 + "2"); //12
//console.log("1" + "2"); //12
//console.log(1 + 2 + "3"); //33
//addition happens first, then string concatenation
//console.log("1" + 2 + 3); //123
//string concatenation happens first, then addition

//console.log("1" +2 +2); //122

console.log(3 + 4 * 5 % 3);
//how it works?
//1. multiplication happens first, 4 * 5 = 20
//2. then modulus, 20 % 3 = 2
//3. then addition, 3 + 2 = 5

console.log(+true); //1
console.log(+""); //0

let num1, num2, num3;
num1 = num2 = num3 = 2+2; //all three variables will have the value 4
//console.log(num1, num2, num3); //4 4 4


let gamecounter = 100;
++gamecounter; //increment by 1
//console.log(gamecounter++)
//console.log(gamecounter); //101
gamecounter--; //decrement by 1
//console.log(gamecounter); //100
//why again 100 after decrement?
//because we are using post-decrement, it will decrement after the value is used
//if we use pre-decrement, it will decrement before the value is used
//console.log(--gamecounter); //99
//console.log(gamecounter); //99

//why in case of preincrement value is changed before the value is used?//
//because pre-increment will increment the value before it is used
//console.log(++gamecounter); //100

