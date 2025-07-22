const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "random";
const app = express();
const port= 3000;
app.use(express.json());

const users = [];
app.post("/signup",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    res.send("User signed up successfully");
});
app.post("/signin",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;
    for(let i=0;i<users.length;i++){
        if(users[i].username==username && users[i].password==password){
            foundUser=users[i];
            break;
        }
    }
    if(foundUser){
        const token = jwt.sign({username: username},JWT_SECRET);
        foundUser.token=token;
        res.json({
            token:token
        });
    }

    console.log(users);

});

app.listen(`listing to port number : ${port}`);