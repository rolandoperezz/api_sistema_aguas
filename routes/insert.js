var express = require('express');
const cons = require('../controller/insert')
const { verifyToken } = require('../middleware/verifyToken')

let api = express.Router();

api.post('/iMagColonias', cons.iMagColonias)


module.exports = api;