const express = require("express");
const app = express();
const port = 3000;

app.get("/",(req,res) => {
    res.send("Try sum or multiply feature");
});

app.get("/sum", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).send("Invalid query parameters");
    }
    const sum = a + b;
    res.send(`Sum is: ${sum}`);
});

app.get("/multiply", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).send("Invalid query parameters");
    }
    const product = a * b;
    res.send(`Product is: ${product}`);
});

app.listen(port);