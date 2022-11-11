import express from 'express';
const router = express.Router();
import { getPatients, getPatientById, registerPatient, signinPatient, deletePatient } from '../controller/patient.controller.js';
import { verifyJwt } from '../utils/jwt.js';

router.get('/users', verifyJwt, getPatients)
router.get('/users/:id', verifyJwt, getPatientById) 
router.post('/register', registerPatient)
router.post('/signin', signinPatient)
router.delete('/delete/:id', verifyJwt, deletePatient)
 
export default router  