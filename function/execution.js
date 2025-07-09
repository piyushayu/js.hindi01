//js execution context//

//js is single threaded

/* 1. Global execution context {} we put this in bracket

2. function execution context

3. eval execution context

//js code runs in two phases///

1. memory creation phase
2.execution phase */

//////////////


let val1 = 10
let val2 = 5
function addNum(num1, num2){
let total = num1 + num2
return total 

}

let result1 = addNum(val1, val2)

let result2 = addNum(10,2)

//here


//1. global execution = this 

/*n2. memory phase 
       1.val1 undefined
       2.val2 undefined
       3.addNum definition
       4.result1 undefined
       5.result2 undefined

/*3. execution phase

      val1 = 10
      val2= 5
       addNum =  new variable enviourment + executionn thread
       //sidha ik naya box creaate ho jaya ga

//is naya enviourment ma dubara memory and execution phase repeat hoga

//now we got result 1 = 15
//result2 = iska liya dubara box bana ga and same process dubara repeat hoka r1 jasa hi hoga


//memory phase
/* 1.val1 undefined
       2.val2 undefined
3. total = undefined

//execution phasae
1.num1 = 10
2.num2 = 5
3. total = 15

//this total value will return in global phase now

//after this process this new box will delete it self */














