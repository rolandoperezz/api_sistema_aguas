const model_update = require('../model/inactiva');


async function estadoMagColonias(req, res) {
    try {
        await model_update.M_estado_mag_colonias(req.body).then(resp => {
            res.status(200).json(resp)
        })
    } catch (error) {
        console.error('Controller.C_estado.mag_colonias : ', error)
        res.status(400).json({ 'estado': false, 'codigo': 206, 'descrip': 'Error en Consulta a Oracle' })
    }
}







module.exports = { estadoMagColonias}