const express = require('express');
const router = express.Router();
const marcaController = require('../controllers/marca.Controllers');


router.post('/',  marcaController.crearMarca);
router.get('/', marcaController.obtenerMarcas);
router.put('/:id', marcaController.actualizarMarca);
router.get('/:id', marcaController.obtenerMarca);
router.delete('/:id', marcaController.eliminarMarca);

module.exports = router;
