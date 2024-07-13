let marks  = [97,82, 343, 32,34];
console.log(marks);
console.log(marks.length); //length is property
// array is mutable but string is immutable

//---------looping over an array------------------

// for(let i =0;i<marks.length;i++){
//     console.log(marks[i]);
// }

for(let i of marks){
    console.log(i);
}

let items = [250, 645, 300, 900, 50];

for(let i=0;i<items.length;i++){
     items[i]=items[i]-(items[i]*10/100);
}
console.log(items);


//---------------push(), pop() and toString()--------------
// push will add or append at the last of the array and pop will remove an item from last and it will return also that item.

//toString()--> is used to convert an array into the string.

//note--> as string is immutable so string function does not change the original data instead it will make a changes in the new string. but in the array changes made in the original data. 

console.log(marks.toString());



//concat(), unshift(), shift(), slice(), splice()
let marvelHeroes=["thor", "spiderman", "ironman"];
let dcHeroes=["superman", "batman"];
let indianHeroes=["shaktiman", "krish"];

let heroes=marvelHeroes.concat(dcHeroes, indianHeroes);
console.log(heroes);   // here original data is not change if we using concat func.

let marvel=["a", "b", "c"];
marvel.unshift("thor1"); //here it will add at the starting

let val1=marvel.shift();
console.log(val1); //here it will delete from the first.


//here slice method works same as for string and slice() method is also use for copy the whole array into new variable if do not pass any parameter inside it.

let arr = [1,2,3,4,5,6,7];
arr.splice(2,2);  //here it will delete two element at index from 2
console.log(arr);
arr.splice(2,1,23,24,12);
console.log(arr);  //it will add also after deleting one element
arr.splice(2,0,101); //here it will add 101 at index 2
arr.splice(3);  // here it will delete all elements after 3 index with including 3 also.
console.log(arr);