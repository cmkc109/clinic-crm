import express from 'express';
const router = express.Router();
import { getPatients, getPatientById, registerPatient } from '../controller/patient.controller.js';

 

// router.get('/', async (req,res) => {
//     try { 
//       //add user model ?
//       res.sendStatus(200);
//       console.log('at api main page')
//     } catch(error) {
//       res.sendStatus(404) 
//     }
//   } )
 

router.get('/users', getPatients)
router.get('/users/:id', getPatientById) 
router.post('/register', registerPatient)
 
export default router  