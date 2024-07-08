const mongoose =require('mongoose')

const employeeschema = new mongoose.Schema({
    name:String,
    age:Number,
    salary:Number,
    role:String,
    location:String
})

const Employeemodul=mongoose.model('/employee',employeeschema)

module.exports=Employeemodul