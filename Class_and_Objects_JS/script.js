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

const employee = {
  calcTax1(){
    console.log("tax rate is 10%");
  },

  calcTax2: function(){
    console.log("tax rate is 20%");
  }  //we can also write this way to same func.
}


const karanArjun1 = {
    salary:50000,
}

const karanArjun2 = {
    salary:50000,
    calcTax1(){
        console.log("tax rate is 40%");
      },
}

const karanArjun3 = {
    salary:50000,
}

const karanArjun4 = {
    salary:50000,
}

//now we are going to use function of employee object in the prototypes of the KaranArjuns.

karanArjun1.__proto__ = employee;

karanArjun2.__proto__ = employee;    //note: if object and prototypes have same method , object's method will be used.

karanArjun3.__proto__ = employee;

