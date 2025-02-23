const express = require('express')
const conn = require('./config/DB')
const bodyparser = require('body-parser')
const route = require('./routes/Users_Route')

const app = express()
require('dotenv').config()
conn()
app.use(bodyparser.json())


app.use('/auth',route)
app.use('/api/auth',route)

app.use('/',(req,res)=>{
    res.send("Hey users")
})

app.listen(process.env.PORT,()=>{
    console.log("Is running");
})