const express = require("express");

const server = express();

var PORT  = process.env.PORT || 5000;

server.use(express.json());

server.get("/",(req,res)=>{
    res.send("You are the homepage");
})

server.post("/post",(req,res)=>{
    res.send("Welcome "+  req.body.user);
})

server.delete("/delete",(req,res)=>{
    res.send("task " + req.body.taskId + " {delete:true}");
})

server.put("/put/:id",(req,res)=>{
    res.send("Task "+ req.params.id +" has been updated");
})

server.listen(PORT,(err)=>{
    console.log("Server running...");
})