//-----------Synchronous way of  programming---------------

// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");

//--------------------------------

// function hello(){
//     console.log("hello"); 
// }

// setTimeout(hello, 3000);   //3 sec

// setTimeout(() => {
//     console.log("hello");
// }, 3000);   //3 sec

//------------------Asynchronous Programming in JS----------------

console.log("one");
console.log("two");
console.log("third");

setTimeout(() => {
    console.log("hello");
}, 4000);   //ye function parallely execute hoga iske baad vale instructions ke saath so that other instructions ko wait na krna pade.

console.log("four");
console.log("five");
