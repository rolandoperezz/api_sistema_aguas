const model_consulta = require('../model/consultas');



async function cMagColonias(req, res) {
    try {
        await model_consulta.M_C_mag_colonias(req.body).then(resp => {
            res.status(200).json(resp)
        })
    } catch (error) {
        console.error('Controller.C_Consultas.cMagColonias : ', error)
        res.status(400).json({ 'estado': false, 'codigo': 206, 'descrip': 'Error en Consulta a Oracle' })
    }
}





module.exports = {cMagColonias }