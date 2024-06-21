const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

// Crear servidor
const app = express();

// Conectar a la base de datos
conectarDB();

app.use(cors())

// Habilitar express.json
app.use(express.json());

// Definir rutas
app.use('/api/producto', require('./router/producto'));
app.use('/api/categoria', require('./router/categoria'));

// Ruta principal
app.listen(4000, () => {
    console.log('El servidor está corriendo en el puerto 4000');
});
