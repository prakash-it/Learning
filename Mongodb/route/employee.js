const express = require('express')
const bodyparser = require('body-parser')
const Employeemodul = require('../models/employee-model')
const router=express.Router()

router.use(bodyparser.json())

router.get('/',(req,res)=>{
    res.send('Employee page')
})


router.post('/post',(req,res)=>{
  console.log(req.body);
  const newEmployees = new Employeemodul(req.body)
  newEmployees.save()
  .then(response=>console.log(response))
  .catch(err=>console.log(err))
    res.send('Employee post page')
})

router.get('/get',(req,res)=>{
    Employeemodul.find()
    .then(response=>res.send(response))
    .catch(err=>console.log(err))
    res.send('employe page')
})

router.get('/get/:id',(req,res)=>{
    Employeemodul.findById(req.params.id)
    .then(response=>res.send(response))
    .catch(err=>console.log(err))
   
})

router.put('/update/:id',(req,res)=>{
  Employeemodul.findByIdAndUpdate(req.params.id,req.body)
  .then(response=>res.send(response))
    .catch(err=>console.log(err))
    res.send("page was update")
})

router.delete('/delete/:id',(req,res)=>{
    Employeemodul.findByIdAndDelete(req.params.id)
    .then(response=>console.log(response))
    .catch(err=>console.log(err))
    res.send("page was delete")
})
module.exports=router