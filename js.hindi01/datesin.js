//Dates

let myDate = new Date()
console.log(myDate.toString());

//console.log(myDate.toDateString());
//console.log(myDate.toISOString());

//why time is showing in UTC?
//why my current time is not showing in IST?



//console.log(myDate.toLocaleTimeString());
//console.log(myDate.toUTCString());
//console.log(myDate.toTimeString());

//console.log(myDate.toJSON());
//console.log(myDate.toLocaleDateString());

console.log(myDate.toLocaleString());

console.log(typeof myDate);

//Creating a date object with specific date and time
//let myCreatedDate = new Date(2025, 0, 6, 5, 12);
//console.log(myCreatedDate.toLocaleString());

//console.log(myCreatedDate.toDateString());

//let myCreatedDate = new Date("2025-02-14");
/*jab hum ddmmyy ka format use karte hain to
to start one sa hota ha .*/



let myCreatedDate = new Date("01-14-2025");
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());

//compare always in milliseconds

console.log(Math.floor(Date.now()/1000));//seconds
console.log(Math.floor(Date.now()/1000/60));//minutes

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
//to make it easy for normal users, we can add 1 to the month
console.log(newDate.getMonth() + 1);

console.log(newDate.getDay());

// `${newDate.getDate()}`//to get the date in dd-mm-yyyy format

console.log(
  newDate.toLocaleString('default', {

    weekday: 'long',
timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',


}) );//



