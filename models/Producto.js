const { default: mongoose } = require('mongoose');
const moongose = require('mongoose');
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
        type:Number,
        require:true
    }
});

module.exports= mongoose.model('Producto', ProductoSchema)

