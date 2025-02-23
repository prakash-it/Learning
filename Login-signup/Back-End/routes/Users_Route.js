const express = require('express')
const bcrypt = require('bcryptjs')
const User = require('../models/userModel')
const user = require('../models/userModel')
const route= express.Router()


route.post('/signup', async (req,res)=>{
      const {username, email, password} = req.body
    
      try{  

        const exituser = await User.findOne({email})
        if(exituser){
            return res.status(400).json({message:"Email is already exiting"})
        }
        const hashedpassword = await  bcrypt.hash(password,10)
        const newuser = new User({username, email, password:hashedpassword})
        await newuser.save()

        res.status(200).json({message:"Create user succesfully "})

      }catch(error){
        res.status(500).json({message:"Server is error"})
      }
})

route.post('/login',async (req,res)=>{
    const {email,password} = req.body 

    try{

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Compare provided password with hashed password stored in the database
        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        
      res.status(200).json({message:"Login succusfuly"})
    }catch(error){
        res.status(500).json({message:"server error"})
    }
})



module.exports = route