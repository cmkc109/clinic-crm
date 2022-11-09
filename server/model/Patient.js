import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    weight: Number,
    MedicalConditions: [String],
    date: {
        type: Date,
        default: Date.now
    },
})

const Patient = mongoose.model("Patient", patientSchema);

export default Patient;