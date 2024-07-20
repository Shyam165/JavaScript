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

// console.log("one");
// console.log("two");
// console.log("third");

// setTimeout(() => {
//     console.log("hello");
// }, 4000);   //ye function parallely execute hoga iske baad vale instructions ke saath so that other instructions ko wait na krna pade.

// console.log("four");
// console.log("five");


//------------------------------

// function sum(a, b){
//     console.log(a+b);
// }

// function calculator(a, b, sumCallback){
//     sumCallback(a,b);
// }

// calculator(1,2, sum);
// calculator(1,2, (a, b) =>{
//     console.log(a+b);
// })


//--------------------------------------

// function getData (dataId, getNextData){
//     setTimeout(() =>{
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 3000);
// }

//note:---callback hell---

// getData(1, ()=>{
//     console.log("getting data2 .....");
//     getData(2, ()=>{
//         console.log("getting data2 .....");
//         getData(3, ()=>{
//             console.log("getting data2 .....");
//             getData(4, ()=>{
//                 console.log("getting data2 .....");
//                 getData(4);
//             })
//         })
//     })
// })


//-------------------------------------------

//------Promises:--> pending , resolve , reject---------------------

// let promise = new Promise((resolve, reject)=>{
//     console.log("i am a promise");
//     reject("some error occured");
// });

// function getData (dataId, getNextData){
//     return new Promise((resolve, reject)=>{
//     setTimeout(() =>{
//         console.log("data", dataId);
//         resolve("success");
//         if(getNextData){
//             getNextData();
//         }
//     }, 3000);
// });
// }

// function getData (dataId, getNextData){
//     return new Promise((resolve, reject)=>{
//     setTimeout(() =>{
//         // console.log("data", dataId);
//         // resolve("success");
//         reject("error occured");
//         if(getNextData){
//             getNextData();
//         }
//     }, 3000);
// });
// }

//-------------------------------------

// const getPromise = ()=>{
//     return new Promise((resolve, reject) =>{
//         console.log("i am a promise");
//         resolve("success");
//         //reject("error");
//     });
// };

// let promise = getPromise();
// promise.then((res)=>{
//    console.log("promise fulfilled", res);
// });

// promise.catch((err)=>{
//     console.log("rejected",err);
//  });


//---------------------------------------

// function asyncFunc1(){
//     return new Promise ((resolve, reject) =>{
//         setTimeout(() =>{
//             console.log("some data1");
//             resolve("success");
//         }, 4000);
//     });
// }

// function asyncFunc2(){
//     return new Promise ((resolve, reject) =>{
//         setTimeout(() =>{
//             console.log("some data2");
//             resolve("success");
//         }, 4000);
//     });
// }

// console.log("fetching data1 ....");
// asyncFunc1().then((res)=>{
//     // console.log(res);
//     console.log("fetching data2 ....");
//     asyncFunc().then((res)=>{});

// });


//----------------------------------------------

// function getData (dataId){
//     return new Promise((resolve, reject)=>{
//     setTimeout(() =>{
//         console.log("data", dataId);
//         resolve("success");
//     }, 3000);
// });
// }


// getData(1).then((res) =>{
//     console.log(res);
//     getData(2).then((res)=>{
//         console.log(res);
//     });
// });


//note:------------promise channing-------

// getData(1).then((res) =>{
//     return getData(2);
// }).then((res) =>{
//     return getData(3);
// }).then((res)=>{
//   console.log(res);
// });


//-----------------------------------------------

//-----------Async Await----------

async function hello(){
    console.log("hello");
}  //here it will return promise fulfilled compulsory.



function api(){
    return new Promise((resolve, reject) =>{
    setTimeout(() => {
        console.log("weather data");
        resolve(200);
    }, 2000);
    });
}

async function getWeatherData(){
    await api();  //here await func can use only inside the async func.
    await api()  //2nd
}

function getData (dataId){
    return new Promise((resolve, reject)=>{
    setTimeout(() =>{
        console.log("data", dataId);
        resolve("success");
    }, 3000);
});
}


async function getAllData(){   console.log("getting data1..........");
    await getData(1);
    console.log("getting data2..........");
    await getData(2);
    console.log("getting data3..........");
    await getData(3);
    console.log("getting data4..........");
    await getData(4);
    console.log("getting data5..........");
    await getData(5);
    console.log("getting data6..........");
    await getData(6);
}


//---------------------------------------------

//IIFE --> Immediately Invoked function Expression

// IIFE is a function that is called immediately as soon as it is defined.

(async function (){   console.log("getting data1..........");
    await getData(1);
    console.log("getting data2..........");
    await getData(2);
    console.log("getting data3..........");
    await getData(3);
    console.log("getting data4..........");
    await getData(4);
    console.log("getting data5..........");
    await getData(5);
    console.log("getting data6..........");
    await getData(6);
})();  //here it can be called at once.