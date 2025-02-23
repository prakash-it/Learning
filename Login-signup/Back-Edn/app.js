const express = require('express')
const conndb = require('./config/DB')
const  bodyparser = require('body-parser') 
const route = require('./route/route')

const app = express()
require('dotenv').config()
conndb()

app.use(bodyparser.json())


app.use('/api/auth', route)
app.use('/auth',route)

app.use('/',(req,res)=>{
    res.send("Hey users")
})



app.listen(process.env.PORT,()=>{
    console.log("Is running");
})

