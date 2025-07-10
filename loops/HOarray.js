// for of 

//[ '','','']

const arr = [1, 2 ,3, 4 , 5 ]

for ( const val of arr){

console.log(val);

}

//here val represent variable and arr is that object( not that datatype object ) on which command occur

const greeting = "hello world! "
for (const greet of greeting){

//console.log(`Each char is ${greet}`);


}

// Maps 

const map = new Map()
map.set('IN', "india")
map.set('USA', "united state of america")
map.set('Fr', "France")
map.set('IN', "india")

console.log(map);


// Map sirf unique value ka liya jani jati ha , same value dubara nahi dagi
// order wise print karti ha


for (const [key, value] of map) {
    
console.log(key, ':-', value);


}

// agar sirf key likho ga to vo sara ik sath array ma dena laga ga
// but if we put it in [] with (, value in) in it  , value alag alag aa jaya ga


const myObject = {

    'game1': 'NFS',
     'game2': 'spider'

}

// for (const [key, value] of myObject) {
    
console.log(key, ':-', value);


// } 

//object is not iterable by this  method















