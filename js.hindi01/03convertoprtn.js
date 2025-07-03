let score = true;

console.log(typeof score); //string
//score is a string because it is written in quotes
//if we write it as 33 then it will be number

let valueInNumber = Number(score); //convert string to number
console.log(typeof valueInNumber); //number
//now valueInNumber is a number

console.log(valueInNumber); 

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
console.log(booleanIsLoggedIn); 

//empty string is falsy value
//"hit" is truthy value

  let someNumber = 33;
  let stringNumber = String(someNumber); //convert number to string
  console.log(stringNumber); 

  console.log(typeof stringNumber); //string    
//now stringNumber is a string