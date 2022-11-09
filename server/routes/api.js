import express from 'express';
const router = express.Router();

const Patient = require('../model/Patient')

router.get('/', async (req,res) => {
    try { 
      //add user model ?
      res.sendStatus(200);
      console.log('at api main page')
    } catch(error) {
      res.sendStatus(404) 
    }
  } )
 

router.get('/users', async (req,res) => {
    try { 
      const allPatients = await Patient.find();
      res.json(200).json(allPatients);
       
    } catch(error) {
      res.sendStatus(404) 
    }
  } )

router.get('/users/:id', async (req,res) => {
    const id = req.params.id;

    try { 
      //Q: add user model first, then use findById ? mongoose has default _id
      res.send(id)
      console.log('at api/users page')
    } catch(error) {
      res.sendStatus(404) 
    }
  } )
   
router.post('/register', async (req, res) => {
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

})
 
export default router  