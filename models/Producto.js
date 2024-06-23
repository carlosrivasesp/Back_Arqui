//const { default: mongoose } = require('mongoose');
const mongoose = require('mongoose');
const ProductoSchema= mongoose.Schema({
    nombre:{
        type:String,
        require:true
    },
    categoria:{
        type:String,
        require:true
    },
    imagen:{
        type:String,
        require:true
    },
    precio:{
        type:Number,
        require:true
    },
    codigo:{
        type: String,
        require:true
    },
    stock:{
        type:Number,
        require:true
    },
    marca:{
        type:String,
        require:true
    }
});

module.exports= mongoose.model('Producto', ProductoSchema)

