const mongoose = require('mongoose')

const Producto = mongoose.Schema({
    nombre: {
        type: String,
        require: true,
        trim: true
    },
    existencia:{
        type: Number,
        require: true,
        trim: true
    },
    precio: {
        type: Number,
        require: true,
        trim: true
    },
    creado:{
        type: Date,
        default: Date.now()
    }
})

Producto.index({nombre: 'text'})

module.exports = mongoose.model('Producto',Producto)