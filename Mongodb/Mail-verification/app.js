const express = require('express')
require('dotenv').config()
const connectDb = require('./config/db')

const app = express()
connectDb()

app.get('/',(req,res)=>{
    res.send("Home-page")
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server is Connected on ${process.env.PORT}`);
})