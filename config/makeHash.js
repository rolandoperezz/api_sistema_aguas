'use strict'
const bcrypt = require('bcryptjs');

/**
 * Create hash password
 * @param { string } passwd 
 * @returns { string }
 */
 async function createHash(passwd, passwdDB){
    return await bcrypt.compareSync(passwd, passwdDB);
}

module.exports = createHash