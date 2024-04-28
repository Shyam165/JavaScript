// Arithmetic operators
let a =5;
let b=2;

// console.log("a = ", a, " & b= ", b);
// console.log("a + b = ", a+b);
// console.log("a - b = ", a-b);
// console.log("a * b = ", a*b);
// console.log("a / b = ", a/b);
// console.log("a % b = ", a%b);
// console.log("a ** b = ", a**b); //5^2


//Comparison Operators
// let c="5"; //string --> number
// console.log("a == b: ", a==b); //false
// console.log("a == c: ", a==c);  //true  here it will try to convert string into number first then check
// console.log("a===c", a===c); //false here it will check number as well as data type ---> strict comparison

//conditional statements
let mode ="dark";
let color;
if(mode === "dark"){
    color="black"
}
else{
    color="white"
}
console.log(color);


let num=10;
if(num%2 === 0){
    console.log(num, " is even");
}
else{
    console.log(num, " is odd");
}


//taking input from the user
let n=prompt("enter the number");
if(n%5===0){
    console.log(n, "is multiple of 5");
}
else{
    console.log(n, "is NOT a multiple of 5");
}