//const { default: mongoose } = require('mongoose');
const mongoose = require('mongoose');
const CategoriaSchema= mongoose.Schema({
    nombre:{
        type:String,
        require:true
    },
    descripcion:{
        type:String,
        require:true
    },

});

module.exports= mongoose.model('Categoria', CategoriaSchema)
