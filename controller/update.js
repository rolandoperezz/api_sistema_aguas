const model_update = require('../model/update');


async function uMagcolonia(req, res) {
    try {
        await model_update.M_U_mag_colonias(req.body).then(resp => {
            res.status(200).json(resp)
        })
    } catch (error) {
        console.error('Controller.C_update.umagcolonia : ', error)
        res.status(400).json({ 'estado': false, 'codigo': 206, 'descrip': 'Error en Consulta a Oracle' })
    }
}






module.exports = { uMagcolonia}