
let a = 300




if (true) {
let a = 10
const b = 20
//local scope

console.log("Inner :" , a);

}

//global or block scope
//console.log(a);


//browser ma global scope alag hota ha as compared to code editor ma 


function one(){

const Username = "piyush"

function two(){

const website = "github"
console.log(Username);

//because functn2 is part of functn1 it can use const usename like small brother asking big bro but big can not ask to small

}
//because everything of funct two is inside log will not work out , if we put this inside then it will work

//console.log(website);

//and if log did not work out then two() will also error

  two()



}
//vo username sirf function ma hi tha uska bahar uska koi kam nahi 
//console.log(Username);


one()


//////////////////////////interesting//////////////////////////


    function addone(num){
return num + 1

    
    }

console.log( addone(5) );

//so here add2 will show error because hamna usa ik variable ma hold kar diya ,
//jab ki uper hamna ik fuction diya tha bas

addTwo(5)
const addTwo = function(num){
return num + 2


}
//bina consol ka nahi show kara ga
 
//console.log(addTwo(5));

