const oracledb = require('oracledb');
const bcrypt = require('bcrypt');




async function M_I_mag_colonias(array) {
    return new Promise(async (resolve, reject) => {
        let conn;
     
        let queriFinal = `INSERT INTO MAG_COLONIAS 
        (
            NOMBRE, 
            ZONA,
            CANON1,
            CANON2,
            CANON3,
            MT_CUBICO1,
            MT_CUBICO2,
            MT_CUBICO3,
            DRENAJE,
            LECTURA,
            SERVICIOS,
            NUEVO,
            CARGAMES,
            N_DOCU,
            CLAVE,
            FECHA,
            VALOR_PAJA,
            CORRELATIVO_AGUA,
            CODIGO_AGENCIA,
            XCONSUMO,
            OBSERVACION, 
            ESTADO,
            USUARIO_CREACION_WEB
        )
        VALUES
        (
        '${array.NOMBRE}',
        '${array.ZONA}',
         ${array.CANON1},
         ${array.CANON2},
         ${array.CANON3},
         ${array.MT_CUBICO1},
         ${array.MT_CUBICO2},
         ${array.MT_CUBICO3},
         ${array.DRENAJE},
         '${array.LECTURA}',
         ${array.SERVICIOS},
         '${array.NUEVO}',
         '${array.CARGAMES}',
         '${array.N_DOCU}',
         '${array.CLAVE}',
         '${array.FECHA}',
         ${array.VALOR_PAJA},
         ${array.CORRELATIVO_AGUA},
         ${array.CODIGO_AGENCIA},
         '${array.XCONSUMO}',
         '${array.OBSERVACION}',
         'A',
        '${array.USUARIO_CREACION_WEB}'
        )`

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
            console.error('Model.Insert.M_I_mag_colonias.Catch : ', error)
            resolve({ 'estado': false, 'codigo': 230})
        } finally {
            conn.close()
            try {
            } catch (error) {
                console.error('Model.M_I_mag_colonias.finally.Catch : ', error)
                reject(error)
            }
        }
    });
}











module.exports = { M_I_mag_colonias}