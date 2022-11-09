const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
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
    }
})

module.exports = mongoose.model();