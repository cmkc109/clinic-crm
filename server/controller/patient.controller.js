import mongoose from 'mongoose';
import Patient from '../model/Patient.js'

export const getPatients =  async (req,res) => {
    try { 
      const allPatients = await Patient.find();
      res.json(200).json(allPatients);
       
    } catch(error) {
      res.sendStatus(404) 
    }
}

export const getPatientById = async (req,res) => {
    const id = req.params.id;

    try {
      const patient = Patient.findById(id)
      if (!patient) return res.status(404)
      return res.status(200).send(patient)
  } catch (error){
      return res.status(500).send(error.message)
  }
  } 

export const registerPatient = async (req, res) => {
    const patient = new Patient({
      name: req.body.name,
      age: req.body.age,
      sex: req.body.sex,
      email: req.body.email,
      weight: req.body.weight,
      medicalConditions: req.body.medicalConditions
    })
  
   try {
     const savedPatient = await patient.save();
     return savedPatient;
   } catch(error) {
     res.sendStatus(400)
   }
  
  }