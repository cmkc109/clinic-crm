import express from 'express';
const router = express.Router();
import { getPatients, getPatientById, registerPatient, signinPatient, deletePatient } from '../controller/patient.controller.js';


router.get('/users', getPatients)
router.get('/users/:id', getPatientById) 
router.post('/register', registerPatient)
router.post('/signin', signinPatient)
router.delete('/delete/:id', deletePatient)
 
export default router  