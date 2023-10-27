1.// console.log("Deploy File");
require('dotenv').config()
const express = require("express")
const app = express()
const port = process.env.PORT;
app.get("/",(req,res)=>{
    res.send(`<h1>Hello World</h1>`)
})
app.get("/about",(req,res)=>{
    res.send(`<h1>About Page</h1>`)
})
app.get("/contact",(req,res)=>{
    res.send(`<h1>Contact Page</h1>`)
})
app.listen(process.env.PORT,()=>{
    console.log(`http://localhost:${port}`);
})