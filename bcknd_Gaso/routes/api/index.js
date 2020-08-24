//FUNCION DE CONMUTADOR DE ENTIDADES
var express = require('express');
var router = express.Router();


var secRoutes = require('./sec');
var pedidosRoute = require('./pedido');
var perfilRoute = require('./perfil');

router.use("/sec",secRoutes);
router.use("/pedido",secRoutes);
router.use("/perfil",secRoutes);


module.exports = router;