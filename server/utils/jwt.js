
import jwt from 'jsonwebtoken';
import config from '../config/default.js'

const privateKey = config.privateKey;
privateKey.replace(/\\n/g, '\n')

export function signJwt(object, options) {
    return jwt.sign(object, privateKey, {
       ...options,
       algorithm: 'RS256'
    });
 }