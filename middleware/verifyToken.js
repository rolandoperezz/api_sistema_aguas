const jwt = require('jsonwebtoken');
require('dotenv').config();
const config = require('config');

async function verifyToken(req, res, next){

    console.log(config.get('Environment') !='default')

try{
    
    if(!req.headers.authorization) {
        return res.status(200).json({
        auth: false,
        message: 'Token No Autorizado'
        });
    }
    //validar Bearer
    const strBearer=req.headers.authorization.substr(0,6);
    if(strBearer!=='Bearer'){
        console.log('Palabra Bearer Incorrecta')
        return res.status(200).json({auth: false, message: 'Palabra Bearer Incorrecta'});
    }
    //se omite la palabra Bearer del token
    const token=req.headers.authorization.substr(7);
    //verifica si ha expirado el token
    const tokenExpired = isTokenExpired(token);
    if(tokenExpired){
        console.log('token expirado')
         return res.status(200).json({auth: false, message:'Token Expirado'});
    } 
    //se convierte en string la variable de entorno
    var secret_jwt = config.get('toKen.ke');
    if(token!==''){
        auth: true;
        const content = jwt.verify(token, secret_jwt);
        req.data = content;
    next();
    }else{
        res.status(200).json({
            auth: false,
            message: 'Token Vacio'
        });
    }
}catch(erro){
console.log(erro)
}

}

function isTokenExpired(token) {
    const expiry = (JSON.parse(Buffer.from(token.split('.')[1],'base64').toString('ascii'))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }
module.exports = {verifyToken};
