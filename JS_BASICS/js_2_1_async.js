// function sum(a,b){
//     return a+b;
// }

// let c = sum(2,1);

// console.log(c);


// Synchronous code is executed line by line, in the order it's written. Each operation waits for the previous one to complete before moving on to the next one.

const fs = require("fs");


function read(err,data){
    console.log(data);
}

const content1 = fs.readFile("JS_BASICS/a.txt","utf-8",read);
// console.log(content1);

const content2 = fs.readFile("JS_BASICS/b.txt","utf-8",read);
// console.log(content2);

console.log("Hello");

// anything which has something to do web APIs then that is async function.