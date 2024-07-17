// Events :---- the change in the state of an object is known as Event

let btn1=document.querySelector("#btn1");


//arrow functions-->
//with event objects.

// btn1.onclick = (evt) =>{
//     // console.log("btn1 was clicked");
//     // let a = 25;
//     // a++;
//     // console.log(a); //26

//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// };


// let div=document.querySelector("div");
// div.onmouseover = () =>{
//     console.log("you are inside div");
// }


// note:--> priority of script.js file is more than the inline handler script inside the element.
// note2:--> In case there is two functions of the same name then latest one will be executed and older one  will be overwritten.


//EventListeners--> we can perform the multiple functions through the same EventListeners.

btn1.addEventListener("click", (evt) =>{
    console.log("button was clicked! - handler1");
    // console.log(evt);
    // console.log(evt.type);
})

btn1.addEventListener("click", () =>{
    console.log("button was clicked! - handler2");
})

const handler3 = () =>{
    console.log("button was clicked! - handler3");
}

btn1.addEventListener("click", handler3);

btn1.addEventListener("click", () =>{
    console.log("button was clicked! - handler4");
})

//-----------removeEventListener-----------------
btn1.removeEventListener("click", handler3);


//------------------------------------------------------------------------------------------------

let modeBtn = document.querySelector("#mode");
let body= document.querySelector("body");

let currMode = "light"; //dark

modeBtn.addEventListener("click", ()=>{
    if(currMode === "light"){
        currMode = "dark";
        // document.querySelector("body").style.backgroundColor = "black";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        currMode = "light";
        // document.querySelector("body").style.backgroundColor = "white";
        body.classList.add("light");
        body.classList.add("dark");
    }
})