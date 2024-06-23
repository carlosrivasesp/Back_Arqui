const Producto = require("../models/Producto");


exports.crearProducto=async(req,res) =>{ 
    try {
        let producto;
        //Creamos nuestro producto
        producto= new Producto(req.body);
        await producto.save();
        res.send(producto);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProductos=async(req,res)=>{
        try {
            const productos= await Producto.find();
            res.json(productos)
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error'); 
        }
    }

exports.actualizarProducto=async(req,res)=>{
        try {
            const{nombre,categoria,imagen,precio,codigo,stock,marca}= req.body;
            let producto = await Producto.findById(req.params.id);
            if(!producto)
                {
                    res.status(404).json({msg:'No existe el Producto'})
                }

                producto.nombre=nombre;
                producto.categoria=categoria;
                producto.imagen=imagen;
                producto.precio=precio;
                producto.codigo=codigo;
                producto.stock=stock;
                producto.marca=marca;
                producto=await Producto.findOneAndUpdate({_id:req.params.id},producto,{new:true})
                res.json(producto);
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error'); 
        }
    }

exports.obtenerProducto=async(req,res)=>{
        try {
            let producto = await Producto.findById(req.params.id);
            if(!producto)
                {
                    res.status(404).json({msg:'No existe el Producto'})
                } 
                
            res.json(producto)
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error'); 
        }
    }

exports.eliminarProducto=async(req,res)=>{
    try {
        let producto = await Producto.findById(req.params.id);
        if(!producto)
            {
                res.status(404).json({msg:'No existe el Producto'})
            } 
        await Producto.findOneAndDelete({_id:req.params.id})  
        res.json({msg:'Producto Eliminado'});

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error'); 
    }
}