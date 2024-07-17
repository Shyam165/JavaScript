// Events :---- the change in the state of an object is known as Event

let btn1=document.querySelector("#btn1");


//arrow functions-->
//with event objects.
btn1.onclick = (evt) =>{
    // console.log("btn1 was clicked");
    // let a = 25;
    // a++;
    // console.log(a); //26

    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
};


let div=document.querySelector("div");
div.onmouseover = () =>{
    console.log("you are inside div");
}


// note:--> priority of script.js file is more than the inline handler script inside the element.
// note2:--> In case there is two functions of the same name then latest one will be executed and older one  will be overwritten.

