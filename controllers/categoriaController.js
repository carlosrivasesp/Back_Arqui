const Categoria = require('../models/Categoria');

exports.crearCategoria = async (req, res) => {
    try {
        let categoria = new Categoria(req.body);
        await categoria.save();
        res.send(categoria);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};

exports.obtenerCategorias = async (req, res) => { // Cambié el nombre a obtenerCategorias para evitar conflicto
    try {
        const categorias = await Categoria.find();
        res.json(categorias);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};

exports.actualizarCategoria = async (req, res) => {
    try {
        const { nombre, descripcion } = req.body;
        let categoria = await Categoria.findById(req.params.id);
        if (!categoria) {
            return res.status(404).json({ msg: 'No existe la Categoria' });
        }

        categoria.nombre = nombre;
        categoria.descripcion = descripcion;
        categoria = await Categoria.findOneAndUpdate({ _id: req.params.id }, categoria, { new: true });
        res.json(categoria);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};

exports.obtenerCategoria = async (req, res) => {
    try {
        let categoria = await Categoria.findById(req.params.id);
        if (!categoria) {
            return res.status(404).json({ msg: 'No existe la Categoria' });
        }
        res.json(categoria);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};

exports.eliminarCategoria = async (req, res) => {
    try {
        let categoria = await Categoria.findById(req.params.id);
        if (!categoria) {
            return res.status(404).json({ msg: 'No existe la Categoria' });
        }
        await Categoria.findOneAndDelete({ _id: req.params.id });
        res.json({ msg: 'Categoria Eliminada' });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};
