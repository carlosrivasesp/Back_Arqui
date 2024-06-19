const Producto = require('../models/Producto');

exports.crearProducto = async (req, res) => {
    try {
        let producto;
        producto = new Producto(req.body);

        await producto.save();
        res.send(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProductos = async (req, res) => {

    try {

        const productos = await Producto.find();
        res.json(productos)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProducto = async (req, res) => {

    try {
        let producto = await Producto.findById(req.params.id);

        if(!producto){
            res.status(404).json({msg: 'No existe el producto'})
        }

        
        res.json(catalogo)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarProducto = async(req, res) => {
    try{
        const { nombre, precio, marca, codigo, categoria, imagen } = req.body;
        let prod = await Producto.findById(req.params.id);
    } catch(error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarProducto = async(req, res) => {
    try{
        let prod = await Producto.findById(req.params.id);
        if (!prod) {
            res.status(404).json({ msg: 'No existe el producto' })
        }
        await prod.deleteOne({ _id: req.params.id })
        res.json({ msg: 'Producto eliminado exitosamente' });
    } catch(error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}