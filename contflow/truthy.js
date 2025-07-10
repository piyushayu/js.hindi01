//const userEmail = "piu.com"
const userEmail = []
//empty string ko false  man liya and empty array ko true man liya
//string ma kuch nahi doga to don't vala show kara ga 

if (userEmail){
console.log("got user email");


} else {

console.log("don't have user email");

}

//falsy values

//false , 0 , -0, bigint(0n), "", null, undefined, NaN


//truthy value

// "0" ,"false" , "", [], {} , function(){}

//method to check array given empty ha ya nahi ha

if (userEmail.length === 0){

console.log("Array is empty");


}
//method to check if object given is empty or not

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {

console.log("Object is empty");

}










