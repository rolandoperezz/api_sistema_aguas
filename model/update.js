const oracledb = require('oracledb');
const bcrypt = require('bcrypt');


async function M_U_mag_colonias(array) {
    return new Promise(async (resolve, reject) => {
        let conn;
     
        let queriFinal = `UPDATE MAG_COLONIAS
        SET 
            NOMBRE = '${array.NOMBRE}', 
            ZONA = '${array.ZONA}',
            CANON1 = ${array.CANON1},
            CANON2 = ${array.CANON2} ,
            CANON3 = ${array.CANON3},
            MT_CUBICO1 = ${array.MT_CUBICO1},
            MT_CUBICO2 = ${array.MT_CUBICO2},
            MT_CUBICO3 = ${array.MT_CUBICO3},
            DRENAJE = ${array.DRENAJE},
            LECTURA = '${array.LECTURA}',
            SERVICIOS = ${array.SERVICIOS},
            NUEVO = '${array.NUEVO}',
            CARGAMES= '${array.CARGAMES}' ,
            N_DOCU = '${array.N_DOCU}',
            CLAVE = '${array.CLAVE}',
            FECHA = '${array.FECHA}',
            VALOR_PAJA = ${array.VALOR_PAJA},
            CORRELATIVO_AGUA = ${array.CORRELATIVO_AGUA},
            CODIGO_AGENCIA = ${array.CODIGO_AGENCIA},
            XCONSUMO = '${array.XCONSUMO}',
            OBSERVACION = '${array.OBSERVACION}', 
            USUARIO_MODIFICA_WEB = '${array.USUARIO_MODIFICA_WEB}'
        WHERE ESTADO = 'A'
        AND CODIGO = ${array.CODIGO}`

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
            console.error('Model.UPDATE.M_u_mag_colonias.Catch : ', error)
            resolve({ 'estado': false, 'codigo': 230})
        } finally {
            conn.close()
            try {
            } catch (error) {
                console.error('Model.M_u_mag_colonias.finally.Catch : ', error)
                reject(error)
            }
        }
    });
}






module.exports = { M_U_mag_colonias}