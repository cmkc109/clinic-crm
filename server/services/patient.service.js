import Patient from '../model/Patient.js'

export const findPatientHandler = (query, options) => {
    return Patient.findOne(query, {}, options);
}

export const deletePatientHandler = (query) => {
    return Patient.findOneAndDelete(query)
}

export const findAllPatientsHandler = () => {
    return Patient.find()
}