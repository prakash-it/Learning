const express = require('express')
const employee = require('./route/employee')
const app = express()

const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/Employee')
mongoose.connection.on('connected',()=>{
    console.log("It's connected");
})

app.use('/employee', employee)
app.get('/',(req,res)=>{
    res.send('home page')
})
app.listen(3002,()=>{
    console.log("server is run");
})