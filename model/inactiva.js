const oracledb = require('oracledb');


async function M_estado_mag_colonias(array) {
    return new Promise(async (resolve, reject) => {
        let conn;
     
        let queriFinal = `UPDATE MAG_COLONIAS
        SET 
        ESTADO = '${array.ESTADO}',
        USUARIO_WEB_MOD_ESTADO = '${array.USUARIO_WEB_MOD_ESTADO}'
        WHERE CORRELATIVO = ${array.CORRELATIVO}`

        try {
            oracledb.outFormat = oracledb.OBJECT;
            oracledb.fetchAsString = [oracledb.CLOB];
            oracledb.autoCommit = true;
            conn = await oracledb.getConnection('mixco');

            const result = await conn.execute(queriFinal)  

            if (result.rowsAffected === 1) {
                resolve({ 'estado': true, 'codigo': 111})
            } else {
                resolve({ 'estado': false, 'codigo': 230})
            }
        } catch (error) {
            console.error('Model.Insert.M_ESTADO_mag_colonias.Catch : ', error)
            resolve({ 'estado': false, 'codigo': 230})
        } finally {
            conn.close()
            try {
            } catch (error) {
                console.error('Model.M_u_estado_mag_colonias.finally.Catch : ', error)
                reject(error)
            }
        }
    });
}









module.exports = { M_estado_mag_colonias}