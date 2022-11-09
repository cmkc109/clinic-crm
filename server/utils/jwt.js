
import jwt from 'jsonwebtoken';
import config from '../config/default.js'

const privateKey = config.privateKey;

export function signJwt(object, options) {
    console.log(privateKey)
    return jwt.sign(object, privateKey, {
       ...options,
       algorithm: 'RS256'
    });
 }