import express from 'express';
const router = express.Router();
import { getPatients, getPatientById, registerPatient, signinPatient, deletePatient } from '../controller/patient.controller.js';
import { verifyJwt } from '../utils/jwt.js';

//Auth
router.post('/register', registerPatient)
router.post('/signin', signinPatient)


//Users
router.get('/users', verifyJwt, getPatients)
router.get('/users/:id', verifyJwt, getPatientById) 
router.delete('/users/:id', verifyJwt, deletePatient)
 
 
export default router  