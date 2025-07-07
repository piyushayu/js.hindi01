//const tinderUser = new Object();
//its a singleton Object

const tinderUser = {}
//its a none singleton object

tinderUser.id = "123abc"
tinderUser.name = "piyush"
tinderUser.isLoggedIn = false


//console.log(tinderUser);

const regularUser = {
email : "hgkd.com",
fullname: {

    userfullname:{
firstname: "piyush",
lastname: "singh"

    }

}

}

//console.log(regularUser.fullname);
//. lagata jao or sub part karta jao

console.log(regularUser. fullname?.  userfullname . firstname);

//we use question mark to check ki value hamna di bhi ha ki nahi object ma 

const obj1 = { 1:"a", 2: "b" }
const obj2 = { 3: "a", 4: "b"}

//const obj3 = { obj1, obj2}
//same array vali problem isma bhi aya gi

//const obj3 = Object.assign( obj1, obj2)
//isma {} add karna optional ha , but kar lena chaiye
//issa na lagna ka matlab sab  obj1 ka under ja raha ha


//console.log(obj3 === obj1);
/*agar {} ya hata diya to true hoga 
nahi hataya to false hoga*/

const obj3 = {...obj1, ...obj2};
//mostly yahi follow hoga

//console.log(obj3);


const users = [
{
 id: 1,
 email:   "hidf.com"


},

{
 id: 1,
 email:   "hidf.com"


},


{
 id: 1,
 email:   "hidf.com"


},





]

users[1].email

//console.log(tinderUser);

//console.log(Object.keys(tinderUser));

//give array as datatype 

//console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty('isLogged'));
//ya bata ha ki vo value ha bhi ki nahi

//lect 18//

const course = {

coursename: "js in hindi",
price:"999",
courseInstructor: "piyush",


}

//console.log(course.courseInstructor);

//both are same but [] thoda sahi rahta ha
//console.log(course["courseInstructor"]);


const {courseInstructor: instructor} = course


//we can give alternative name to value , like above

//console.log(courseInstructor);
console.log(instructor);

/*const navbar = ({company}) => {
   // in react prop is already defined so we need not to put props before every value
   
};*/

//navbar({company: "piyush"});

//json ma isi taarh {} ma hi info milti ha

/*{

name: "piyush"
coursename: "js in hindi"
price:"free"

}*/

//we can use json formatter to see the info in simple way

//kabhi kabhi array ka form ma bhi milta ha info to usko change kar ka sikh lo

like [

{},
{},
{}


]













