//  This file contains till strings
//  This is Uploaded into Web-Dev-1 
//--------------------------------------------
/*
let x1 = 10;
let x2 = 25;

total  = x1+x2;
console.log(total);
*/
//--------------------------------------------
/*
let score = 0;
score = 5;
score +=5;
score +=5;
score +=5;
score +=5;
score +=5;
score +=5;
score +=5;

//  above works same as score = score +5;
console.log(score);

score -=20;
console.log(score);
score*=2;
console.log(score);
score/=2;
console.log(score);

score--
console.log(score);

*/

//--------------------------------------------

/*
const num1 = 34;
// num1 = 35;
//  the above code throws an error

const pi = 3.14;
console.log(num1,pi);

var name1 = "Ashish";
console.log(name1);

name1 +=" Baruah"
console.log(name1);

// at this point we understand that letand var lets us create a variable that we can modify afterwards
// And const doesnt let us modify the value stored in variable

*/

//--------------------------------------------
/*
isTrue = false;
isFalse = true;

console.log(isTrue,isFalse);

let isLoggedIn = true;
let out;
if(isLoggedIn){
    console.log("Yes he is logged in");
}
else
{
    console.log("No he is not logged in");
}

let numOfpeople = 25;
console.log(numOfpeople);
numOfpeople = false;
console.log(numOfpeople);
numOfpeople = 100;
console.log(numOfpeople);

*/

//--------------------------------------------
//  variable naming and conventions

/*
    In JS , identifiers are case sensitive and can contiain unicode letters,&,_ and digits(0-9) but may not start with digits.
*/

/*
let _age = 9;
//  camel casing , snake casing

let currentDate = 130922;
// camel casing
let 
*/

/*
let name2 = "AshishBaruah"
let name3 = "Randomname"

console.log(name2,name3);

let aniName = 'dog';
console.log(aniName);

// if double quotes are used then bobth quotes should be double otherwise single quote

let longString = "lkajbsdjbf;sbjdfuujqbsdf";
console.log(longString);

//  we can use single quotes inside double quotes when we want them in strings

let name4 = "I told her to 'go away' ";
console.log(name4);
let name5=  'She told me to "go away" ';
console.log(name5);

*/

// Strings are indexed .They are indexed from 0 to n

/*
let name6 = "My name is Ashish Baruah";
console.log(name6[5],name6[9],name6[5],name6[6],name6[3],name6[8]);
// console.log(name6[99]);

let phone1 = "9265833139"
// console.log(phone1);

console.log(phone1.length);
console.log(name6.length);

let name1 = "Ashish";
let name2 = "Baruah";

let name3= name1+" "+name2;
console.log(name3);

console.log(1+"Ashish");

*/

//--------------------------------------------
/*
let string1 = "    My name is ashish";
// console.log(string1);
// console.log(string1.length);
// console.log(string1.trim());
string2 = string1.trim().toUpperCase();
// console.log(string2);
string3 = string1.trim().toLowerCase();
// console.log(string3);

string4 = "________AshishBaruah___";
// console.log(string4.trim());

let name1 = "Ashish Baruah";
// console.log(name1.indexOf('h'));
// console.log(name1.indexOf('Baruah'));

// console.log(name1.indexOf('hel'));
//  indexOf returns the first occurrence of the string to be searched

// console.log("Ashish".indexOf());
// console.log("hello world hello".indexOf("world", 5));

// let x1 = "Ashish Baruah".indexOf('Ashise') !== -1
// console.log(x1);


let str1 = "My name is Ashish.Hello!";
// console.log(str1.slice(3,8));
//  the last index(end index) is not included

// console.log(str1.length);
// console.log(str1.slice(25));
// starting index greater than length empty string is returned

// let str2 = str1.slice(11,17);
// console.log(str2);
// let str3 = str1.slice();
// console.log(str3);


// const word = "skateboard";

// let x1 = word.slice(5,10);
// console.log(x1);

*/

//  string literals

/*
let product = "Washing Dish";
let price = 499;

let qty = 5;

// console.log("You brought " + qty+" of"+product+" with price "+price+" Your total amount is "+price*qty);

// console.log(`You have brought ${qty} of ${product} each having an price of ${price} and you total amt is ${qty*price} `);

let loggedInUser = null;
console.log(loggedInUser);

loggedInUser = "AShish ";

*/

console.log(Math.PI);

// object is collection of mthods and properties

// round,abs,pow,floor,random
//  parseInt parseFloat
//  parseInt - used to parse strings into numbers (NaN)

/*
let x1 = Math.round(3.4345);
x2 = Math.abs(3-4);
x3 = Math.floor(3.4);
x4 = Math.random();

console.log(x1,x2,x3,x4);

x5 = parseInt("67a");
x6 = parseInt("876897asdsf");
console.log(x5);
console.log(x6);

*/
