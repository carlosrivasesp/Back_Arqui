const express = require('express');
const conectarDB = require('./config/db');
//crea servidor
const app = express()
//conectamos a la base de datos :)
conectarDB();
app.use(express.json());
app.use('/api/producto',require('./router/producto'));
//ruta principal
//app.use(express.json())

app.listen(4000, ()=>{
    console.log('El servidor está corriendo')
})