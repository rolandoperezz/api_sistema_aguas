const model_update = require('../model/update');


async function uNotRoles(req, res) {
    try {
        await model_update.M_U_not_roles(req.body).then(resp => {
            res.status(200).json(resp)
        })
    } catch (error) {
        console.error('Controller.C_Insert.iNotRoles : ', error)
        res.status(400).json({ 'estado': false, 'codigo': 206, 'descrip': 'Error en Consulta a Oracle' })
    }
}


async function uNotUsuarios(req, res) {
    try {
        await model_update.M_U_not_usuarios(req.body).then(resp => {
            res.status(200).json(resp)
        })
    } catch (error) {
        console.error('Controller.C_Insert.iNotUsuarios : ', error)
        res.status(400).json({ 'estado': false, 'codigo': 206, 'descrip': 'Error en Consulta a Oracle' })
    }
}


async function uNotPaginas(req, res) {
    try {
        await model_update.M_U_not_paginas(req.body).then(resp => {
            res.status(200).json(resp)
        })
    } catch (error) {
        console.error('Controller.C_Insert.iNotPaginas : ', error)
        res.status(400).json({ 'estado': false, 'codigo': 206, 'descrip': 'Error en Consulta a Oracle' })
    }
}


async function uNotPaginasRol(req, res) {
    try {
        await model_update.M_U_not_rol_paginas(req.body).then(resp => {
            res.status(200).json(resp)
        })
    } catch (error) {
        console.error('Controller.C_Insert.iNotPaginasRol : ', error)
        res.status(400).json({ 'estado': false, 'codigo': 206, 'descrip': 'Error en Consulta a Oracle' })
    }
}


async function uNotRolUsusarios(req, res) {
    try {
        await model_update.M_U_not_rol_usuarios(req.body).then(resp => {
            res.status(200).json(resp)
        })
    } catch (error) {
        console.error('Controller.C_Insert.iNotRolUsusarios : ', error)
        res.status(400).json({ 'estado': false, 'codigo': 206, 'descrip': 'Error en Consulta a Oracle' })
    }
}

async function uNotPassword(req, res) {
    try {
        await model_update.M_U_password(req.body).then(resp => {
            res.status(200).json(resp)
        })
    } catch (error) {
        console.error('Controller.C_Insert.uNotPassword : ', error)
        res.status(400).json({ 'estado': false, 'codigo': 206, 'descrip': 'Error en Consulta a Oracle' })
    }
}




module.exports = { uNotRoles, uNotUsuarios, uNotPaginas, uNotPaginasRol, uNotRolUsusarios, uNotPassword }