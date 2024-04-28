//for Loop, while, do while loops
let sum=0;
for(let i=1;i<=5;i++){
    sum+=i;  
}
console.log("total sum is ", sum);

//for-of loops ---> used for strings and arrays
str="JavaScript";
let size=0;
for(let i of str ){
    console.log(i);
    size++;
}
console.log("the length of string is",size);

//for-in loops ---> used for objects
let students={
    name: "rahul",
    age :21,
    cgpa:8.8,
    isPass:true
};
for(let key in students){
    console.log("key=",key, "values =",students[key]);
}

// let gameNum=25;
// let userNum=prompt("Guess the game number");
// while(userNum!=gameNum){
//     userNum=prompt("You entered wrong number , guess again!:");
// }
// console.log("congratulations, you entered the right number");


// console.log(23=="23");  //true
// console.log(23!="23");  //false
// console.log(23!=="23");  //true

//---------------------------------------Strings----------------------------------------------
let str1="JavaScript";
console.log(str1[0]);

//templates literals
let SpecialString = `This is a template literal`;
console.log(SpecialString);


//example of above
let obj={
    item:"pen",
    price:10
};
console.log("the cose of", obj.item, "is", obj.price, "rupees");
//--------------or------------
let output=`the cost of ${obj.item} is ${obj.price} rupees`; // this is also called string interpolation
console.log(output);

//--------------escape characters----------------
let str2="Shyam\tSingh";  //11
console.log("The length of shyam\tsingh is",str2.length, "here it include \t as one char");


//-----------------strings methods in js---------------