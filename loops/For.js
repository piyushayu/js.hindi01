//for 

for (let i = 0;  i < 10; i++) {
    const element = i;
    if (element == 5){
       console.log("5 is best number");
       

    }


//console.log(element);

}

// 1 let sa condition start hoti ha 
//2 then comparisn hota hai
//3. then execute hoga
//4. i++ , i ki value ko bhada daga , and then process continue
// double click on value and then ctrl D will replace that value with key that you want

for (let i = 0; i <= 10; i++) {
    //const element = array[i];
    //console.log(`outer loop value: ${i}`);
    

for (let j = 0; j <= 10; j++) {
    //const element = array[j];
    //console.log(`Inner loop value ${j}`);
    
//console.log(i + '*' + j + '=' + i*j );


}


}

//inner loop uper 10 bar chala ga and outer loop sird ik bar ho ka baand ho jaaya ga

let myArr = [ "flash" , "batman", "superman"]

console.log(myArr.length);


for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    //console.log(element);
    
}

// <= use nahi kiya uper kyuki value ko count 0 sa kara ga , varna vo undefined show kara ga

// break and continue

/* for (let index = 1; index <= 20; index++) {
    
     if(index == 5){

console.log(`Detected 5`);
break

     }

    console.log(`value of i is ${index}`);
    
    
} */

for (let index = 1; index <= 20; index++) {
    
     if(index == 5){

//console.log(`Detected 5`);
   continue

     }

    //console.log(`value of i is ${index}`);
    
    
}

//kisi bhi contflow ko break karna ho to hum break use karta hai,
//uska baad ka koi bhi console print nahi hoga
//loops sa sidha bahar aa jaata hai


//continue sa aga bhi print hota raha ga 
// bas vo print hui value ko chod ka , baki sara print honalaga ga

////////////////////////////////////////////////////////////////////////////

let index = 0 

while (index <=10){

//console.log(`value of index is ${index}`);

    index = index + 2
}


//same as if functn but isma index dena padhta ha loop hana isliye

let myArray = [ 'flash', 'batsman', 'spider']

let arr = 0
 while (arr < myArray.length){

console.log(`value is ${myArray[arr]}`);
     arr = arr + 1

 }

// we added one taki sirf zero vali value print na ho jaya


// do while loop 

let score = 1


do{
console.log(`score is ${score}` );
score++

} while (score <= 10);
    
//score ++ , varna same first value hi print hoti raha gi

// do loop ma kam pahela hota hai condition baad ma check hoti ha 

// if we put score = 11 , then it will give score is 11. condition baad ma dakha ga











