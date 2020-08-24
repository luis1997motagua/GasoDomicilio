var express = require('express');
var router = express.Router();
var privateRouter = express.Router();

router.get('/' , function(req, res){
  res.status(200).json(
    [
      {
        route:"/",
        description: "Muestra Documentación del API de Conductores", 
        body:"",
        params:"",
        resp:"json"
      }
    ]
  )
}); 




privateRouter.get('/private', (req, res)=>{
  if (req.user.roles.includes('public') && true) {
    const datos = [req.user]
    res.status(200).json(datos);
  } else {
    res.status(401).json({ "msg": "No esta autorizado a usar esta ruta" });
  }
  
})

module.exports = { pub: router, priv: privateRouter }