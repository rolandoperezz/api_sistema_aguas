'use stric'
//const { date } = require('joi');
const jwt = require('jsonwebtoken');
const config = require('config');

async function tokenGenerate(req, res) {

    let encypt = {
        time: new Date()
    }


    const token = await jwt.sign({ encypt }, config.get('toKen.ke'), {
        //format expiresIn {seg*min*hours}
        expiresIn: 30 * 1
    });
    res.json({ auth: true, token: 'Bearer ' + token });
}

module.exports = { tokenGenerate }