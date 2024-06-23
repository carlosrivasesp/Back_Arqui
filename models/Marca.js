const mongoose = require('mongoose');
const MarcaSchema = mongoose.Schema({
    nombre:{
        type:String,
        require:true
    },
    descripcion:{
        type:String,
        require:true
    },

});

module.exports= mongoose.model('Marca', MarcaSchema)
