const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.post("/sum", (req, res) => {
    let a = parseInt(req.body.a);
    let b = parseInt(req.body.b);
    const sum = a + b;
    res.json({
        result: sum
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
