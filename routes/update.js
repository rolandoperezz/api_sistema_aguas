var express = require('express');
const cons = require('../controller/update')
const { verifyToken } = require('../middleware/verifyToken')

let api = express.Router();

api.post('/uMagColonias', cons.uMagcolonia)



module.exports = api;