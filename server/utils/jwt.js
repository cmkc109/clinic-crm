
import jwt from 'jsonwebtoken';
import config from '../config/default.js'


const privateKey = config.privateKey;
privateKey.replace(/\\n/g, '\n')

const publicKey = config.publicKey;

export function signJwt(object, options) {
    return jwt.sign(object, privateKey, {
       ...options,
       algorithm: 'RS256'
    });
 }

 export async function verifyJwt(req, res, next) {
   try {
      const token = req.headers.authorization.split(" ")[1];
  
      if (token) {      
         let decodedData = jwt.verify(token, publicKey);
         console.log(decodedData)
         // req.userId = decodedData?.id;
      }   
      next();

    } catch (error) {
      res.sendStatus(404);
    }

 }