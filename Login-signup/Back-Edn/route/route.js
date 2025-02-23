const express = require('express')
const bcrypt = require('bcryptjs')
const User = require('../models/user_model')
const route = express.Router()

route.post('/signup', async (req,res)=>{
      const {username, email, password} = req.body


      try{
        const hashedpassword = await bcrypt.hash(password, 10)

        const newuser = new User({usename, email, password: hashedpassword})

        await newuser.save()

        const exitinguser = await User.findOne({email})
        if(exitinguser)
        {
          return res.status
        }

      }catch(erroe){

      }
})


module.exports = route
