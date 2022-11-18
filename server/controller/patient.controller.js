import Patient from "../model/Patient.js";
import bcrypt from "bcryptjs";
import { findPatientHandler, deletePatientHandler, findAllPatientsHandler} from '../services/patient.service.js'

import { signJwt } from "../utils/jwt.js";

export const getPatients = async (req, res) => {
  try {
    const allPatients = await findAllPatientsHandler();
    console.log(allPatients)
    allPatients.forEach(patient => patient.password = undefined) 
    res.status(200).json(allPatients);
  } catch (error) {
    res.sendStatus(404);
  }
};

export const getPatientById = async (req, res) => {
  const id = req.params.id;
 
  try {
    const patient =  await findPatientHandler({_id: id}, {lean: true})
    patient.password = undefined
    if (!patient) return res.status(404);
    return res.status(200).send(patient);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const registerPatient = async (req, res) => {
  const {
    firstName,
    lastName,
    age,
    sex,
    email,
    password,
    weight,
    medicalConditions,
  } = req.body;

  try {
    const existUser = await findPatientHandler({email}, {});
    if (existUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const savedPatient = await Patient.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      fullName: `${firstName} ${lastName}`,
      age,
      sex,
      weight,
      medicalConditions,
    });

    const token = signJwt(
      { email: savedPatient.email, id: savedPatient._id },
      { expiresIn: "1h" }
    );

    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};

export const signinPatient = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await findPatientHandler({ email }, {});
    if (!oldUser) res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = signJwt(
      { email: oldUser.email, id: oldUser._id },
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: oldUser.email, token });
  } catch (error) {
    res.status(500).json({ message: "Error in signing in" });
  }
};


export const deletePatient = async (req, res) => {
  const id = req.params.id;
 
  try {
    const patientToDelete =  await findPatientHandler({id})
    if (!patientToDelete) return res.status(404).message("Message not found");
    await deletePatientHandler({ id })
    return res.status(200).send(`patient ${patientToDelete._id} deleted` );
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
 