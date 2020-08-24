var express = require('express');
var router = express.Router();
const model = require('./pedidos.model')

const init = async () => {
    await model.initModel();
}
init();

router.get('/ordenes', async(req,res)=>{
    try {
        var usuario = req.user._id;
        let ordenes = await model.getAllOrdenes(usuario);

        res.status(200).json(ordenes);
    } catch (err) {
        console.log(err);
        res.status(500).json({"Error":"Algo salio mal al mostrar sus pedidos"});
    }
})//Mostrar las ordenes


router.get('/info/:codpedido', async (req, res)=>{
    try{
        let {codpedido} = req.params;
        let result = await model.getOneOrden(codpedido);
        res.status(200).json(result);
    }catch(err){
      console.log(err);
      res.status(500).json({ "Error": "Algo salio mal al buscar su orden" });
    }
});//Buscar una orden


router.get('/info/noEntregado/:estado', async (req, res)=>{
    try{
        let {estado} = req.params
        let resultado = await model.getAllNoEntregados(estado);
        res.status(200).json(resultado);
    }catch(err){
      console.log(err);
      res.status(500).json({ "Error": "Algo salio mal al buscar su orden" });
    }
});//Mostras ordenes no entregadas


router.post('/addorden',async(req,res)=>{
    try{
        var {gasolinera, tipocombustible, fecha , cantLitros , tipopago} = req.body;
        var usuario = req.user._id
        var estado = "no entregado"
        /*latitud = parseFloat(latitud)
        longitud = parseFloat(longitud)
        radioKM = parseFloat(radioKM)*/
        var resultado = await model.addOrden(gasolinera, tipocombustible, fecha , cantLitros , tipopago ,estado,usuario);
        res.status(200).json(resultado)
    } catch (error){
        console.log(error)
        res.status(500).json({"Error":"Algo salio mal al agregar su orden"})
    }
}); //Agregar una orden nueva



router.delete('/cancelacion/:codpedido',async(req,res)=>{
    try{
        const {codpedido} = req.params;
        const result = await model.deleteOrden(codpedido);
        res.status(200).json(result);
    }catch(error){
        console.log(error)
        res.status(500).json({"ERROR":"Algo salio mal al cancelar su orden"})
    }
}); //Cancelar una orden



module.exports = router;