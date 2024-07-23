const oracledb = require('oracledb');


async function M_C_mag_colonias(array) {
    return new Promise(async (resolve, reject) => {
        let queriFinal
      switch(array.CONS){

        case 1 :
            queriFinal = `SELECT 
            CODIGO,
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
            ESTADO
            FROM MAG_COLONIAS
            WHERE ESTADO IS NOT NULL
            ORDER BY CODIGO ASC`;
            break;

            case 2 :
             queriFinal = `SELECT 
            CODIGO,
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
            ESTADO
            FROM MAG_COLONIAS
            WHERE ESTADO IS NOT NULL
              AND CODIGO = ${array.CODIGO}
            ORDER BY CODIGO ASC`;
             break;

        case 3 :
           queriFinal = `SELECT 
            CODIGO,
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
            ESTADO
            FROM MAG_COLONIAS
            WHERE ESTADO = 'A'
            ORDER BY CODIGO ASC`;
           break;
      }
        try {
            oracledb.outFormat = oracledb.OBJECT;
            oracledb.fetchAsString = [oracledb.CLOB];
            conn = await oracledb.getConnection('mixco');
                console.log(queriFinal)
            const result = await conn.execute(queriFinal)
            if (result.rows[0] != undefined) {
                resolve(result.rows)
            } else {
                resolve({'estado': false, 'codigo': 209})
            }
        } catch (error) {
            console.error('Model.Consultas.M_C_mag_colonias.Catch : ', error)
            reject(error)

        } finally {
            conn.close()
            try {
            } catch (error) {
                console.error('Model.Consultas.M_C_mag_colonias.finally.Catch : ', error)
                reject(error)
            }   }
    });
}








module.exports = { M_C_mag_colonias }