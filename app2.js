//  Decision making in Javascript

/*  
    Comparison operators
    >,<,>=,<=,!=,==,===,!==

    Comparison operators return a Boolean
    10>1
    0.2>0.3
    -10<0
    50.5<5

    'a' < 'b' , 'A' < 'B'
    Comparison happens on the basis of ascii code.


*/

//  == checks only for equality of value but not for equality of type.


// console.log('a' < 'b');
// console.log(1==1);
// console.log(1==2);
// console.log(1=='1');

// console.log(1==='1');
// console.log(null==undefined);
// console.log(null===undefined);

//  === checks for both type and value
//  strict equality


//---------------------------------------------------------
// prompt alert console.log()
// alert("Hello Welcome")

// let x = prompt("please enter a number");
// console.log(x);

//---------------------------------------------------------

//  if statement

// let age = prompt("Enter your age");

// let age = Math.random();
// if(age>0.5)
// {
//     console.log("You allowed to enter pub!!!");
// }
// else
// {
//     console.log("You are not allowed inside pub!!!");
// }

// let num = Math.random();

// if(num>=0.5)
// {
//     console.log("The number is greater than 0.5");
// }
// if(num<0.5)
// {
//     console.log("The number is less than 0.5");   
// }


// let dayOfWeek = prompt("Enter the day");

// if(dayOfWeek=="Monday")
// {
//     console.log("I hate mondays");
// }
// else if(dayOfWeek=="Satuday" || dayOfWeek=="Sunday")
// {
//     console.log("I love Saturdays and Sundays");
// }

// const age = 15;
// let charge;
// if(age>=5 && age<=10)
// {
//     charge = 0;
// }
// else if(age>10&&age<=65)
// {
//     charge = 20;
// }
// else if(age>65)
// {
//     charge = 10;
// }

// console.log(`Your have to pay ${charge} dollars`);

//---------------------------------------------------------

//  Nesting

// let pass = "baruahAshish";

// if(pass.length >=6)
// {
//     if(pass.indexOf(' ') !== -1)
//     {
//         console.log("This password is not valid!!");
//     }
//     else
//     {
//         console.log("Valid password");
//     }
// }
// else
// {
//     console.log("Password should contain atleast 6 characters!!");
// }


let age=9;

if(age)
{
    console.log("Age is not mentioned");
}
else
{
    console.log("Age is mentioned");
}
//---------------------------------------------------------