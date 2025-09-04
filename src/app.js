const express = require('express');

const app = express();



app.use('/test',(req,res)=>{
    res.send("testing test request handlers !!!! comingS")
})

app.use('/hello',(req,res)=>{
    res.send("testing hello request handlers !!!! data")
})

app.use('/',(req,res)=>{
    res.send("hello world here! !!")
})

app.listen(7777, ()=>{
    console.log("port is listening 7777.....")
})