const model_insert = require('../model/insert');


async function iMagColonias(req, res) {
    try {
        await model_insert.M_I_mag_colonias(req.body).then(resp => {
            res.status(200).json(resp)
        })
    } catch (error) {
        console.error('Controller.C_Insert.iMagColonias : ', error)
        res.status(400).json({ 'estado': false, 'codigo': 206, 'descrip': 'Error en Consulta a Oracle' })
    }
}




module.exports = { iMagColonias }