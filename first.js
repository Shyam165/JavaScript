// console.log("I love Javascript");
// console.log("my name is shyam");
// console.log("print this content in the console of the browser by using html page")

// Dynamically Typed :-- we don't have to tell the type of data it is being to store at the time of the values assignments instead it will automatically decide at the run time

// fullName = "Tony stark";
// age = 24;
// price = 99.99;
// x=null;
// y=undefined;
// isfollow = true;
// console.log(isfollow);


// let, const, and var keywords

// var num = 45;
// var num = 43;
// var num= 34;
// console.log(num);

// let num = 45;
//  num = 43;
//  num= 34;
// console.log(num);

// const num=33;
// console.log(num)

// let a = 34;  // typeof a ---> gives number simi we can find for all.

// let z; //here it will gives undefined

// let c = null; //here it will gives as object

//BigInt, Symbol , Number, String, Boolean, Undefined, Null, these all are the data types in the javascipt

// let a = BigInt("123");
// let b = Symbol("Hello");



const student = {
    fullName:"Rahul Kumar",
    age: 23,
    cgpa: 8.2,
    isPass: true,
};

student["age"]=student["age"]+1;
student["name"]="Rahul sharma";  //here it will add new key values pair
console.log(student["age"])  //or by student.age both are same
console.log(typeof student[isPass]);

//here we will change the Const objects ---> of  keys but we cannot change the const variable


// "abc" + 23 ----> abc23
// "123"+ 123 ---> 123123