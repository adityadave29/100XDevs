const express = require('express');
const courseRoute = express.Router();

courseRoute.get("/courses",(req,res)=>{
    res.json({
        message: "All courses",
    })
});

module.exports={
    courseRoute
}