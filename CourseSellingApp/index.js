const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const {userRouter} = require("./routes/user.js");
const {courseRoute} = require("./routes/courses.js");
const app = express();
const port=3000;
app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRoute);

// await mongoose.connect("mongodb+srv://daveaditya2004:TKi9QVpgSMk7klRV@cluster0.7k3v38c.mongodb.net/");

app.listen(port);   