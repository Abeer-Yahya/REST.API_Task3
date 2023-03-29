const getPatients = "SELECT * FROM patients";
const getPatientById = "SELECT * FROM patients WHERE id = $1";
const checkNameExists = "SELECT s FROM patients s WHERE s.name = $1";
const addPatient = "INSERT INTO patients (name,contact) VALUES ($1,$2)";
const removePatient = "DELETE FROM patients WHERE id = $1";
const updatePatient = "UPDATE patients SET contact = $1 WHERE id = $2";
module.exports = {
  getPatients,
  getPatientById,
  checkNameExists,
  addPatient,
  removePatient,
  updatePatient,
};
