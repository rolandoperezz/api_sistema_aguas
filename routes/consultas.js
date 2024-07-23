var express = require('express');
const cons = require('../controller/consultas')
const { verifyToken } = require('../middleware/verifyToken')
var { tokenGenerate } = require('../middleware/token')

let api = express.Router();

api.get('/genToken', tokenGenerate)
api.post('/cMagColonias', cons.cMagColonias)


module.exports = api;