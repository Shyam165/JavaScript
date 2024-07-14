//----------------get attributes methods---------------------------l

// let div=document.querySelector("div");
// let para=document.querySelector("p");
// console.log(para);
// let ps=para.getAttribute("id");  // in this way we can get the id value, class, name value etc.
// console.log(ps);


//-------------------set attributes-------------------------
// console.log(para.setAttribute("id", "paraid2"));


//---------------set styles------------

//note: if we write font-size in a css like this then in a js we will write it like fontSize (camelcase)

// let div = document.querySelector("div");
// div.style.backgroundColor="yellow";
// div.style.fontSize="23px";
// div.innerText="Hello!";

// div.style.visibility = "hidden";

//note: now have understand how we can access and make changes in the content. now will understand for adding, appending.....

// Node.append(el) -->adds at the end of node(inside)
// Node.prepend(el) -->adds at the start of node(inside)
// Node.before(el) --> adds before the node (outside)
// Node.after(el) -->adds after the node(outside)

// Node.remove()  --> removes the node

//first create the button
let newBtn = document.createElement("button");
newBtn.innerText="click me!";
// console.log(newBtn);

//now place the newly created element button in the required place
let div = document.querySelector("div");

//  div.append(newBtn);
//  div.prepend(newBtn);
// div.before(newBtn);
// div.after(newBtn);


//----------if we want to create the heading---------------------
let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi, i am new heading!</i>";

document.querySelector("body").prepend(newHeading);


//---------removing the elements--------------------------------
let para = document.querySelector("p");
para.remove();
