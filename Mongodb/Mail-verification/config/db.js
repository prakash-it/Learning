const mongoose = require('mongoose')

const connectDb=()=>{
    mongoose.connect(process.env.DB_URL)
    mongoose.connection.on('connected',()=>{
        console.log('Mongodb is Success');
    })
}

module.exports=connectDb