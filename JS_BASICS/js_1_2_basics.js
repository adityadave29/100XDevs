// Reactjs and nextjs are frameworks
// c++ converts code into binary and then execute but in the case of js it runs directly on the machine. Js is interpreted language so execute code line by line. In time compiled langugae.
// c++  ---->    binary code   ----> runs on a machine
// js ------> runs on a machine
// typescript -----> binary code ----> runs on a machine


var a = "10"
a=10
a=1
console.log(a)

// one thread at a time (single threaded).
// in js memory management technique - garbage collector (JAVA)
// in c lang you have to do it manually

// var
let name1 = "Aditya"
const realname = "Dave"

let users = ["Aditya","parva","dev","malhar"]
console.log(name1);
console.log(realname);
console.log(users[2]);

// function

function add(a, b) {
    return a + b;
}

console.log(add(1,2));


function canvote(age){
    if(age>=18){
        console.log("You can vote");
    }
    else{
        console.log("You cannot vote");
    }
}

canvote(16);


// create a function that takes array of objects as a input and returns the users whose age>18 and male.

let arr = [{
    name: "Aditya",
    age: 20,
    gender: "male"
}, {
    name: "parva",
    age: 17,
    gender: "male"
},{
    name: "Aliya",
    age: 30,
    gender: "female"
}];

for(let i=0;i<arr.length;i++){
    if(arr[i].age>18 && arr[i].gender=="male"){
        console.log(arr[i].name + " is eligible to vote.");
    }
}