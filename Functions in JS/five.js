// to minimize the redundancy

function myFunction(){
    console.log("javaScript");
}

myFunction();


function myFunction1(msg){
    console.log(msg);
}

myFunction1("JavaScript");


// calculate sum of two numbers

// function sum(a,b){
//     console.log(a+b);
// }
// sum(23,44);


// //return the value
// function sum(a,b){
//     s=a+b;
//     return s;
// }
// let res =sum(23,44);
// console.log(res);

//---------------Arrow function----------------------
// const arrowFunction = ()=>{
//     console.log(3);
// }   // without arguments

const arrowFunction = (a, b)=>{
    console.log(a+b);
}
console.log(arrowFunction); //here it will print the defination code  part
arrowFunction(3,4); //print answer

//to count the total number of the vowels

function countVowels(str){
    let count =0;
    for(const char of str){
        if(char==='a' || char==='e' || char==='i' || char ==='o' || char === 'u'){
            count++;
        }
    }
    console.log(count);
}
countVowels("javascript learning");


//------------------ for each function--------------

//callback() is function which takes functions as a arguments and it will takes 3 args (values, index, array)

let ar=[1,2,3,4,5];
ar.forEach(function myFunction(val1){
    console.log(val1);
})


//------------------Higher Order Funtion------------
//higher order function are those functions which takes functions as a args and also can return functions. like for each function is the example.

let nums=[23,45,34,32];
let calsquare = (num)=>{
    console.log(num*num);
}
nums.forEach(calsquare);


//----------------map functions----------------
//similar as for each function but use when some operations are need to be performed and also return a new array for that.

let newArr = nums.map((val)=>{
    return val*val;
})
console.log(newArr);

//-----------filter function------------
//based on conditions it filter out some element and stored them in a new array
let newArr1 = nums.filter((val)=>{
    if(val>30){
    return val*2;
    }
})
console.log(newArr1);


//----------reduce function------------
//it perform some operation on all elements and finally provides one single element

// let a=[5,6,3,2];
// const output=a.reduce((prev, curr)=>{
//     return prev+curr;
// });
// console.log(output);

let a=[5,6,3,2];
const output=a.reduce((prev, curr)=>{
    return prev>curr? prev:curr;
});
console.log(output);