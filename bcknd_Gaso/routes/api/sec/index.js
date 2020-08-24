var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

let secModel = require('./sec.model');

let  init = async ()=>{
    await secModel.initModel();
  }
init();

router.post('/ingresar',async(req,res)=>{
    try {
        var { correo, password } = req.body;
        
        var user = await secModel.getByEmail(correo);
        if (await secModel.comparePassword(password, user.password)) {
           const { nombre, apellido, email, telefono, password, _id, roles } = user;
           const jUser = { nombre, apellido, email, telefono, password, _id, roles };
           let token = jwt.sign(jUser, process.env.JWT_SECRET, {expiresIn: '120m'});
           res.status(200).json(
             {
               ...jUser, jwt: token
             }
           );
        } else {
          res.status(401).json({"Error":"Credenciales Incorrectas"});
        }
      } catch (err) {
        res.status(500).json({ "Error": "Algo Sucendió mal!!" });
    }
});// logearse

router.post('/crearcuenta',async(req,res)=>{
    try {
        var rslt = await secModel.crearCuenta(req.body);
        console.log(rslt);
        res.status(200).json({ "Mensaje": "Usuario Creado" });
    } catch (err) {
        res.status(500).json({ "Error": "Algo Sucendió mal!!" });
    }
});//crear nueva cuenta

router.put('/cambiarPassword/:idusuario',async(req,res)=>{
    try{
      var {idusuario} = req.params
      var {oldPassword, newPassword} = req.body
      var user = await secModel.getUserById(idusuario);
      if (await secModel.comparePassword(oldPassword, user.password)) {
        var result = await secModel.changePasswordById(idusuario,newPassword)
        res.status(200).json(result);
      } else {
        res.status(401).json({"Error":"Su password vieja es incorrecta"});
      }
      
    }catch(error){
      res.status(500).json({"Error":"Algo salio mal al actualizar su password"})
    }
});//Actualizar contrasena

router.put('/recuperacionPassword',async(req,res)=>{
  try{
    var {correo, newPassword} = req.body
    var user = await secModel.getByEmail(correo);
    if(user.email === correo) {
      var result = await secModel.changePasswordByCorreo(correo,newPassword)
      res.status(200).json(result);
    } else {
      res.status(401).json({"Error":"Su correo no existe"});
    }
    
  }catch(error){
    res.status(500).json({"Error":"Algo salio mal al recuperar su password"})
  }
});




module.exports = router;