const mongoose = require('mongoose')

const authSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    activationcode:{
       type:Boolean,
       required:true,
       default:false
    }
})

const Authmodel = mongoose.model('Emailuser',authSchema)

module.exports= authmodel