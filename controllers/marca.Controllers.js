const Marca = require('../models/Marca');

exports.crearMarca = async (req, res) => {
    try {
        let marca = new Marca(req.body); //crea instancia
        await marca.save(); //guarda la instancia en la bd
        res.send(marca); //si es exitoso se crea una respuesta en formato JSON
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};

exports.obtenerMarcas = async (req, res) => {
    try {
        const marcas = await Marca.find(); //busca todas las marcas
        res.json(marcas);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};

exports.actualizarMarca = async (req, res) => {
    try {
        const { nombre, descripcion } = req.body; //espera recibir datos de la marca
        let marca = await Marca.findById(req.params.id); //busca por id
        if (!marca) { //si no existe
            return res.status(404).json({ msg: 'No existe la marca' });
        }

        marca.nombre = nombre;
        marca.descripcion = descripcion;
        marca = await Marca.findOneAndUpdate({ _id: req.params.id }, marca, { new: true });//guarda cambios y asegura que se devuelvan los datos actualizados
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
