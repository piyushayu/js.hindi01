console.log(2 >= 1); //true
console.log(2 == 1);    //false
console.log(2 != 1);    //true
//what is meaning of != //not equal to

console.log(null > 0); //false
console.log(null >= 0); //true
console.log(null == 0); //false


//reason is that an equality check == and comparison check >, >=, <, <=
//works differently.
//comparison convert null to number, so null > 0 is false
//that's why (3)null >= 0 is true and (1)nulll>0 is false
//but null == 0 is false because null is not equal to 0
//null is not equal to 0, but null is equal to undefined
//so null == undefined is true

//console.log(null == undefined); //true
//console.log(null === undefined); //false
//=== is strict equality, it checks both value and type
//== is loose equality, it checks only value    


//we should avoid using comparison and equality checks with null and undefined








