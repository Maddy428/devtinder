const express = require('express');

const app = express();

app.get("/users",(req,res)=>{
    console.log(req.query);
    res.send({firstName:"Madan",lastName: "Reddy"})
})

app.get("/users/:userid/:name/:password",(req,res)=>{
    console.log(req.params);
    res.send({firstName:"Madan",lastName: "Reddy"})
})

app.get("/users/:id",(req,res)=>{
    console.log(req.params);
    res.send({firstName:"Madan",lastName: "Reddy"})
})

app.post("/users",(req,res)=>{
    // Save data into DB 
    res.send("Data saved successfully!!!")
})

app.patch("/users",(req,res)=>{
    // Save data into DB 
    res.send("Data updated successfully!!!")
})

app.delete("/users",(req,res)=>{
    // Save data into DB 
    res.send("Data delted successfully!!!")
})

app.get("/ab*cd",(req,res)=>{
    res.send({firstName:"Madan",lastName: "Reddy"})
})

app.use('/hello',(req,res)=>{
    res.send("testing test request handlers !!!! comingS")
})



app.listen(7777, ()=>{
    console.log("port is listening 7777.....")
})