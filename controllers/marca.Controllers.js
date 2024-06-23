const Marca = require('../models/Marca');

exports.crearMarca = async (req, res) => {
    try {
        let marca = new Marca(req.body);
        await marca.save();
        res.send(marca);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};

exports.obtenerMarcas = async (req, res) => {
    try {
        const marcas = await Marca.find();
        res.json(marcas);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};

exports.actualizarMarca = async (req, res) => {
    try {
        const { nombre, descripcion } = req.body;
        let marca = await Marca.findById(req.params.id);
        if (!marca) {
            return res.status(404).json({ msg: 'No existe la marca' });
        }

        marca.nombre = nombre;
        marca.descripcion = descripcion;
        marca = await Marca.findOneAndUpdate({ _id: req.params.id }, marca, { new: true });
        res.json(marca);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};

exports.obtenerMarca = async (req, res) => {
    try {
        let marca = await Marca.findById(req.params.id);
        if (!marca) {
            return res.status(404).json({ msg: 'No existe la marca' });
        }
        res.json(marca);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};

exports.eliminarMarca = async (req, res) => {
    try {
        let marca = await Marca.findById(req.params.id);
        if (!marca) {
            return res.status(404).json({ msg: 'No existe la marca' });
        }
        await Marca.findOneAndDelete({ _id: req.params.id });
        res.json({ msg: 'Marca Eliminada' });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};
