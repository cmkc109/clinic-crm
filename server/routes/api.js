import express from 'express';
const router = express.Router();
import { getPatients, getPatientById, registerPatient, signinPatient } from '../controller/patient.controller.js';


router.get('/users', getPatients)
router.get('/users/:id', getPatientById) 
router.post('/register', registerPatient)
router.post('/signin', signinPatient)
 
export default router  