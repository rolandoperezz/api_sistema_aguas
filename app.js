'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cons = require('./routes/consultas.js')
var ins = require('./routes/insert.js')
var update = require('./routes/update.js')
var login = require('./routes/login.js')
var estado = require('./routes/inactiva.js')



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Headers", 'Authorization, Origin, X-Requested-With, Content-Type, Accept,access-control-allow-origin');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET');
    next();
});


app.use(cons);
app.use(ins);
app.use(update);
app.use(login);
app.use(estado);


module.exports = app;