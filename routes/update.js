var express = require('express');
const cons = require('../controller/update')
const { verifyToken } = require('../middleware/verifyToken')

let api = express.Router();

api.post('/uRoles', cons.uNotRoles)
api.post('/uUsuarios', cons.uNotUsuarios)
api.post('/uPaginas', cons.uNotPaginas)
api.post('/uPaginasRol', cons.uNotPaginasRol)
api.post('/uUsuariosRol', cons.uNotRolUsusarios)
api.post('/uClave', cons.uNotPassword)


module.exports = api;