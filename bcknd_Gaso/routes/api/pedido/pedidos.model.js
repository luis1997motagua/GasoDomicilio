const db = require('../../dao/db');
const ObjectId = require('mongodb').ObjectId;
const bcrypt = require('bcrypt');

let pedidosColl;


module.exports = class {
    // initModel 
    static async initModel(){
      if(!pedidosColl) {
        let _db = await db.getDB();
        //console.log(_db);
        pedidosColl = await _db.collection('pedido');
        console.log("Coleccion de Pedido asignada");
        if (process.env.ENSUREINDEX == "1") {
          console.log("Creando Indice para ubicacion con GEO capabilities");
          await pedidosColl.createIndex( {"ubicacion": "2dsphere" }, {"unique": true});
        }
        return;
      }else{
        return;
      }
    }

    static async getAllOrdenes(usuario){
      try{
        if(pedidosColl){
          let registro = await pedidosColl.find({
            "usuario":ObjectId(usuario)
          });
          return registro.toArray();
        }
        return [];
      } catch(err){
        console.log(err);
        return err;
      }
    }//Get todas sus ordenes

    static async getOneOrden(id) {
      try {
        let filter = { "_id": new ObjectId(id)};
        const result = await pedidosColl.findOne(filter);
        return result;
      } catch (error) {
        console.log(error);
        return err;
      }
    }//Buscar orden

    static async getAllNoEntregados(estado) {
      try {
        let filter = { "estado": estado};
        const result = await pedidosColl.find(filter);
        return result.toArray();
      } catch (error) {
        console.log(error);
        return error;
      }
    }//Mostrar ordenes no entregadas


    static async addOrden (gasolinera, tipocombustible, fecha , cantLitros, tipopago ,estado, usuario){
        try{
            let orden = {
              gasolinera,  
              tipocombustible,
              fecha, 
              cantLitros, 
              /*ubicacion: {
                type:"Point",
                coordinates: [longitud, latitud ]
              },
              radioKM,*/ 
              tipopago,
              estado: estado,
              usuario:ObjectId(usuario)
            };
            let result = await pedidosColl.insertOne(orden);            
            return result            
        }catch (error){
            console.log(error)
            return error
        }
    }//Agregar una orden


    static async deleteOrden(id){
      try{
        let filter = {"_id": new ObjectId(id)};
        const result = await pedidosColl.deleteOne(filter);
        return result;
      }catch(error){
        console.log(error);
        return error;
      }
    }// Cancelar una orden
}