const student = {
    fullName: "shyam singh",
    marks: 94,
    printMarks: function(){
        console.log("marks = ", this.marks);
    },
}

//we can create our own prototypes in the js

//prototypes is a special inbuilt property that has property and methods

//--------below is object creations--------

// const employee = {
//   calcTax1(){
//     console.log("tax rate is 10%");
//   },

//   calcTax2: function(){
//     console.log("tax rate is 20%");
//   }  //we can also write this way to same func.
// }


// const karanArjun1 = {
//     salary:50000,
// }

// const karanArjun2 = {
//     salary:50000,
//     calcTax1(){
//         console.log("tax rate is 40%");
//       },
// }

// const karanArjun3 = {
//     salary:50000,
// }

// const karanArjun4 = {
//     salary:50000,
// }

//now we are going to use function of employee object in the prototypes of the KaranArjuns.

// karanArjun1.__proto__ = employee;

// karanArjun2.__proto__ = employee;    //note: if object and prototypes have same method , object's method will be used.

// karanArjun3.__proto__ = employee;



//-------------Classes-------------

// class ToyotaCar{
// constructor(brand, mileage){
//     console.log("creating a new object");
//     this.brand = brand;
//     this.mileage = mileage;
// }

//     start(){
//         console.log("start");
//     }

//     stop(){
//         console.log("stop");
//     }

//     // setBrand(brand){
//     //     this.brand = brand;
//     // }
// }

// let fortuner = new ToyotaCar("fortuner", 10);
// // forturner.setBrand("fortuner");
// console.log(fortuner);
// let lexus = new ToyotaCar("lexus", 12);
// // lexus.setBrand("lexus");
// console.log(lexus);

//------------------------------------

//--------------Inheritance in JS----------------------

// class Parent{
//     hello(){
//         console.log("hello");
//     }
// }

// class child extends Parent{

// }

// let obj = new child();



//-------------------------------------

// class Person{

//     constructor(){
//         this.species = "homo sapiens";
//     }   //if we create object of Person class or child class then this property comes in the both prototypes.

//     eat(){
//         console.log("eat");
//     }

//     sleep(){
//         console.log("sleep");
//     }

//     work(){
//         console.log("do nothing");
//     }  //will be overwritten by child class.
// }

// class Engineer extends Person{

//     work(){
//         console.log("solve problems , build something");
//     }
// }

// class Doctor extends Person{

//     work(){
//         console.log("treat patients");
//     }
// }

// let shyam = new Engineer();

//------------------------------------

//------------super keywords-----------------

// class Person{

//     constructor(name){
//         this.species =name;
//     }   //if we create object of Person class or child class then this property comes in the both prototypes.

//     eat(){
//         console.log("eat");
//     }

// }

// class Engineer extends Person{

//     constructor(name, branch){
//         console.log("enter child constructor");
//         super(name);
//         this.branch = branch;
//         console.log("exit child constructor");
//     }

//     work(){
//         super.eat();
//         console.log("solve problems , build something");
//     }
// }

// let shyam = new Engineer("rohit","chemical engg");

//-------------------------------

//----------------Practice Questions-------------------

let DATA = "secret information";

class User{

    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("data = ", DATA);
    }
}

class Admin extends User{
    constructor(name, email){
        super(name, email);
    }

    editData(){
        DATA = "some new value";
    }
}


let student1 = new User("shyam", "shyam@gmail.com");
let student2 = new User("rohit", "rohit@gmail.com");

let admin = new Admin("admin", "admin@gmail.com");


//-------------------------------------

//---------------Error Handling --> try-catch------------------

let a = 5;
let b = 10;

console.log("a = ", a);
console.log("b= ", b);

console.log("a+b = ", a+b);
try{
    console.log("a/b = ", a/0);
}catch(err){
    console.log(err);
}
console.log("a+b = ", a+b);
console.log("a+b = ", a+b);
console.log("a+b = ", a+b);

