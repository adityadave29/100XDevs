// In express middleware refers to a functions that have access to the request object, response object and nexy function in the application's request-response cycle.

const express = require('express');
const app = express();
const port = 3000;
let noOfRequest = 0;

// Middleware function to log request details
function countRequest(){
    noOfRequest++;
    console.log(`No of requests: ${noOfRequest}`);
}

app.get('/sum',(req,res)=>{
    let a = req.query.a;
    let b = req.query.b;
    if(isNaN(a) || isNaN(b)){
        return res.status(400).send("Invalid query parameters");
    }
    a = parseInt(a);
    b = parseInt(b);
    countRequest();
    const sum = a + b;
    res.send(`Sum is: ${sum}`);
});

app.get('/sum2',countRequest, (req,res)=>{
    let a = req.query.a;
    let b = req.query.b;
    if(isNaN(a) || isNaN(b)){
        return res.status(400).send("Invalid query parameters");
    }
    a = parseInt(a);
    b = parseInt(b);
    const sum = a + b;
    res.send(`Sum is: ${sum}`);
});

app.listen(port);