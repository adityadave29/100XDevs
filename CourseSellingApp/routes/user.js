const express = require('express');
const userRouter = express.Router(); 

// const {Router} = require("express");
// const userRouter = Router();
userRouter.post("/signup",(req,res)=>{
    res.json({
        message: "signup Endpoint",
    })
});

userRouter.post("/signin",(req,res)=>{
    res.json({
        message: "signin Endpoint",
    })
});
userRouter.get("/   ",(req,res)=>{
    res.json({
        message: "purchases Endpoint",
    })
});

module.exports={
    userRouter
}