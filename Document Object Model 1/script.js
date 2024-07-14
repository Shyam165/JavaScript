// window.console.log("hello");
// console.log(window.document);

// let res=document.getElementById("heading");
// console.log(res);  //if there is not any id present then it return null

// let res1=document.getElementsByClassName("para");
// console.log(res1);  //return html collection

//if there is not any classname are present then it return 0 arraycollections


// let param = document.getElementsByTagName("p");
// console.log(param);

//-----------note: we can access the element using queryselector by giving the id, classname, tagname etc.

// let r = document.querySelector("p");
// console.log(r);

// let r = document.querySelectorAll("p");
// console.log(r);  //here it will return nodelist

// let r = document.querySelector("#heading");
// console.log(r);

// let r = document.querySelector(".para");
// console.log(r);


//-----------------------textnode,commentnode, elementnode,  childnode, firstnode, lastnode---------------------------

// let s=document.querySelector("div").childNodes;
// console.log(s);


//-------------------adding or appending some content in the heading 2-------------------------------
let result=document.querySelector("#heading");
result=result.innerText + "from tutorials";
console.log(result);

let box = document.querySelectorAll(".box");
// box[0].innerText="new unique value 1";
// box[1].innerText="new unique value 2";
// box[2].innerText="new unique value 3";
// console.log(box[0]);
// console.log(box[1]);
// console.log(box[2]);

//-----------------or-------------

let idx=1;
for(b of box){
    b.innerText = `new unique value ${idx}`;
    idx++;
}
