const mongoose = require('mongoose')

const database = ()=>{
    mongoose.connect(process.env.DB_URL)

    mongoose.connection.on('connected',()=>{
        console.log("Is Connected");
    })
}

module.exports = database