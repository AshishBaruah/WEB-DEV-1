//  This file contains JS arrays
// console.log("This is for git repo");


/*
    Array basic
    push&pop
    shift & unshift
    concat Indexof
    slice and splice

*/

/*  Arrays - Ordered Collection of Values
    -   List of comments on IG post
    - collection of levels in a game


    Arrays in Js are special type of objects
*/

//  Creating Arrays

let students=[];
let colors=['red','orange','blue','green']

// console.log(colors);
// console.log(colors[2]);

let lottoNums = [1,2,3,4,55,323,1,3];

// console.log(lottoNums[0],lottoNums[1],lottoNums[2],lottoNums[3],lottoNums[4],lottoNums[5]);

//  Arrays in js can have mixed elements

let age1 = ["Ashish",324,'c',null];
// console.log(age1[1],age1[0],age1[2],age1[3]);

/*
    Arrays are indexed
    They are indexed from 0 to size-1.
    Each element has a corresponding index.

*/

console.log(age1.length);
//  array_name.length ->    returns the length of the array

/*  
    Array methods-
    1.Push - add to end
    2.Pop  - remove from end
    3.Shift - remove from start
    4.Unshift - add to start

*/ 


let x1 = [1,2,3,4,5,6,7,8,9,10];

// console.log(x[0],x[1],x[2],x[3],x[4],x[5],x[6],x[7],x[8],x[9]);

x1.push(11);
//  added an element to the end
// console.log(x[0],x[1],x[2],x[3],x[4],x[5],x[6],x[7],x[8],x[9],x[10]);

x1.pop();
//  removed an element from the end
// console.log(x[0],x[1],x[2],x[3],x[4],x[5],x[6],x[7],x[8],x[9]);

x1.unshift(12);
//  added an element to the start
// console.log(x[0],x[1],x[2],x[3],x[4],x[5],x[6],x[7],x[8],x[9],x[10]);

x1.shift();
// console.log(x[0],x[1],x[2],x[3],x[4],x[5],x[6],x[7],x[8],x[9]);

/*
    More Methods
    1.concat    -   merge arrays
    2.includes  -   look for a value
    3.IndexOf   -   returns the index of the passed element
    4.join      -   creates a string from an array
    5.reverse   -   reverses an array
    6.slice     -   copies a portion on an array
    7.splice    -   removes/replaces elements
    8.sort      -   sorts an array
*/

let x2 = [10,20,30,40,50,60,70,80,90,100];
let x3 = [110,120,130,140,150];
let x7 = [1243,124];

let x4 = x2.concat(x3);
let x5 = x3.concat(x2);
let x8 = x2.concat(x3,x7);

console.log(x2);
console.log(x3);
console.log(x4);
console.log(x5);
console.log(x8);
//----------------------------------------------
console.log(x2.includes(40));
console.log(x2.includes(230));
//  if the element is found then true otherwise false
//-----------------------------------------------

let str1 = x2.join();
console.log(str1);
//--------------------------------------------------

let x6 = x2.reverse();
console.log(x6);

//---------------------------------------------------

//  slice - slices out a piece of an array into new array

let x9 = x3.slice(2);
console.log(x9);
//  slices the array from the mentioned index(includes the index)

//-----------------------------------------------------

//  splice(2,0,'x')
//  1st parameter defines position where new elements should be added
//  2nd parameter defines how many elements should be removed
//  rest define new elements to be added
//  let x2 = [10,20,30,40,50,60,70,80,90,100];

//  splice - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

/*
Syntax
-splice(start)
-splice(start,deletecount)
-splice(start,delelteCount,item1)
-splice(start,deleteCount,item1,item2,item3,....,itemN)

splice does not make a copy
*/

let x10 = ["jan","march","april","may"];
x10.splice(1,0,"FEB");
console.log(x10);
//  after above array looks like
//jan feb march april may

x10.splice(2,1,"DEC");
console.log(x10);
//  april is deleted

let x11 = x10.sort();
console.log(x11);










