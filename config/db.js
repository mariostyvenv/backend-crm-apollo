const mongoose = require('mongoose')
require('dotenv').config({path:'variables.env'})

const conectarDB = async => {
    try 
    {
        mongoose.connect(process.env.DB_MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
    } 
    catch (error) 
    {
        console.log('Ocurrio un error')
        console.log(error)
        process.exit(1)
    }
}

module.exports = conectarDB