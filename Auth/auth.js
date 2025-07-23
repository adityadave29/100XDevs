const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const JWT_SECRET = "random";
const app = express();
const port= 3001;


app.use(express.json());
app.use(cors());

const users = [];
app.post("/signup",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    users.push({
        username: username,
        password: password
    })
    res.json({
        message: "User registered successfully",
    })
});
app.post("/signin",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;

    for(let i=0;i<users.length;i++){
        if(users[i].username==username && users[i].password == password){
            foundUser = users[i];
            break;
        }
    }
    if(!foundUser){
        return res.json({
            message: "Invalid username or password"
        });
    }
    else{
        const token = jwt.sign({
            username: users[i].username,
        },JWT_SECRET);
        res.json({
            token:token,
        })
    }
});

app.get("/me",(req,res)=>{
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);

    if(decodedData.username){
        let foundUser=null;
        for(let i=0;i<users.length;i++){
            if(users[i].username===decodedData.username){
                foundUser = users[i];
                break;
            }
        }
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    }

});

app.listen(port);