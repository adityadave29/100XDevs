const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());


// Insert todos into db
app.post("/todos",async (req,res)=>{
    try{
        const {description} = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES ($1) ", [description]);
        res.json({
            newTodo:newTodo,
        });
    }
    catch(e){
        console.error(e.message);
    }
});

// Get all todos from db

app.get("/todos",async (req,res)=>{
    try{
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    }
    catch(e){
        console.error(e.message);
    }
});


// Todo with certain id only

app.get("/todos/:id",async (req,res)=>{
    try{
        const {id} = req.params;
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
        res.json(todo.rows[0]);
    }
    catch(e){
        console.error(e.message);
    }
});

// Update
app.put("/todos/:id",async (req,res)=>{
    try{
        const {id} = req.params;
        const {description} = req.body;
        const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id]);
        res.json("Todo was updated!");
    }
    catch(e){
        console.error(e.message);
    }
});

// Delete

app.delete("/todos/:id",async (req,res)=>{
    try{
        const {id} = req.params;
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
        res.json("Todo was deleted!");
    }
    catch(e){
        console.error(e.message);
    }
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})