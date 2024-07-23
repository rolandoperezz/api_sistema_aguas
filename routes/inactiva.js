var express = require('express');
const cons = require('../controller/inactiva')
const { verifyToken } = require('../middleware/verifyToken')

let api = express.Router();

api.post('/estadoMagColonias', cons.estadoMagColonias)


module.exports = api;