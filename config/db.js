const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env'});

const conectarDB = async () => {
    try {

        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true, //url necesaria con user y psw
            useUnifiedTopology: true //asegura compatibilidad y rendimiento de la BD
        })
        console.log('BD Conectada');
        
    } catch (error) {
        console.log(error);
        process.exit(1); //Detenemos la app
    }
}

module.exports = conectarDB