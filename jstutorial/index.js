// 1.ways to print in javascript
// alert("Welcome to Google");
// document.write("This will be shown on Browser");

// 2.javascript console API
// console.log("Hello world!", 4 + 6, "Another log");

// console.warn("this is warning");
// console.eror("this is an error");

//   3. JAVASCRIPT VARIABLES
//  what are variables?? - Containers to store data 
var number1 = 4;
var number2 = 56;
//console.log(number1 + number2);
//4. Data types in javascipt
//Nmber
var num1 = 455;
var num2 = 56.55;
//string
var str1 = "This is a string";
var str2 = "This is also a string";
//objects
var marks = {
    ravi: 100,
    shubham: 78,
    harry: 99.97
}
//console.log(marks);
// Booleans
var a = true;
var b = false;
//console.log(a,b);
// undefined
var und;
//console.log(undefined);
//console.log(und);

var n = null;
//console.log(n);

/* at a very high level-there are 2 types of datatypes in javascript
 1. Pimitive Datatypes : undefines,null,number,string,boolean,symbol;
 2. Reference Datatypes : Arrays and objects,
*/
var arr = [1, 2, "krishna", 4, 5]
//console.log(arr);
//console.log(arr[0]);
//Operators in Javascript
//Arithmetic Operators
var a = 34;
var b = 54;

// console.log("The value of a + b is ",a+b);
// console.log("The value of a - b is ",a-b);
// console.log("The value of a * b is ",a*b);
// console.log("The value of a / b is ",a/b);
// Assignment Operators
var c = b;
// c+= 2;
//c -= 2;
//c *= 2;
//c /= 2;
// console.log(c);
var x = 34;
//var y = 34;
var y = 56;
// console.log(x == y);
// console.log(x <= y);
// console.log(x >= y);
// console.log(x < y);
// console.log(x > y);

// Logical Operators

// Logical and

// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// Logical or

//  console.log(true || true);
//  console.log(true || false);
//  console.log(false || true);
//  console.log(false || false);

// Logical not
//  console.log(!false);
//  console.log(!true);

//Functions in Javascript

function avg(a, b) {
    c = (a + b) / 2
    return c;
}
// DRY = Do not repeat yourself
c1 = avg(4, 6);
c2 = avg(14, 16);
//console.log(c1,c2);

//conditionals in JAVASCRIPT
var age = 34;
//single if statement
// if(age > 8)
// {
//     console.log('You are not Kid');
// }
// else 
// {
//     console.log('You are a kid');

// }

var age = 15;
if (age > 18) {
    console.log('You can drink rasna water');
}
// if-else Ladder
/*
if(age > 32)
{
    console.log("You are not kid");
}
else if(age > 26)
{
    console.log("You are not child");
}
else if(age > 22)
{
    console.log("You are not Teenager");
}
else if(age > 18)
{
    console.log("You can be part of Election");
}
else
{
    console.log("You are kid");
}
console.log("end of ladder");
*/

// For Loop
var arr = [1, 2, 3, 4,5, 6,7];

//console.log(arr);
// for(var i = 0;i<arr.length;i++)
// {
//     if(i==2)
//     {
//         //break;
         //continue;
//     }
//     console.log(arr[i]);
// }
/*
arr.forEach(function(element)
{
    console.log(element);
})
*/
//let j = 0;
//while (j < arr.length)
// {
//     console.log(arr[j]);
//     j++;
// }
// do {
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);
let myArr = ["fan","class",55];
// Array methods
console.log(myArr.length);
//
myArr.pop();
//myArr.push("hetu")
//myArr.shift();
// const newLen = myArr.unshift("hetu");
// console.log(newLen);
// console.log(myArr);
// Sting methods in javascript
 //let myLovelyString = "Hetal is a good girl very";
// console.log(myLovelyString.length);
// console.log(myLovelyString.indexOf("girl"));
// console.log(myLovelyString.lastIndexOf("very"));
// console.log(myLovelyString.slice(0,5));
// console.log(myLovelyString.slice(2,5));
//d = myLovelyString.replace("Hetal","heena");
// d = d.replace("good","bad");
//console.log(d,myLovelyString);
myDate = new Date();
// console.log(myDate);
//  console.log(myDate.getTime());
//  console.log(myDate.getFullYear());
//  console.log(myDate.getMonth());
//  console.log(myDate.getHours());
//  console.log(myDate.getMinutes());
//  console.log(myDate.getSeconds());
//  console.log(myDate.getMilliseconds());
//  console.log(myDate.getDate());
//  console.log(myDate.getTime());
//  console.log(myDate.getDay());
//  console.log(myDate.Date.now());
 
// Dom Manipulation
let elem = document.getElementById('click');
// console.log(elem);

let elemclass = document.getElementsByClassName("container");
// console.log(elemclass);

//elemclass[0].style.background = "yellow";
elemclass[0].classList.add("bg-primary");
elemclass[0].classList.add("text-success");
elemclass[0].classList.remove("text-success");
// console.log(elem.innerHTML);
// console.log(elem.innerText);
tn = document.getElementsByTagName('button');
//console.log(tn);
tn = document.getElementsByTagName('div');
//console.log(tn);
createdElement = document.createElement('p');
createdElement.innerText = "This is a created Para";
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a created Bold";
tn[0].replaceChild(createdElement2,createdElement);
// Selecting using Query
sel = 






























