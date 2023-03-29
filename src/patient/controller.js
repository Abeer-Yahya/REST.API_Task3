const pool = require("../../db.js");
const queries = require("./queries");
const getPatients = (req, res) => {
  pool.query(queries.getPatients, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getPatientById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getPatientById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addPatient = (req, res) => {
  const { name, contact } = req.body;

  // Check if name exists
  pool.query(queries.checkNameExists, [name], (error, results) => {
    if (results.rows.length) {
      res.send("Patient already exists.");
    }

    // add patient to db
    pool.query(queries.addPatient, [name, contact], (error, results) => {
      if (error) throw error;
      res.status(201).send("Patient Added Successfully!");
      console.log("Patient Added Successfully!");
    });
  });
};

const removePatient = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getPatientById, [id], (error, results) => {
    const noPatientFound = !results.rows.length;
    if (noPatientFound) {
      res.send("Patient does not exist in the db!");
    }
    pool.query(queries.removePatient, [id], (error, results) => {
      if (error) throw error;
      res.status(200).send("Patient removed successfully!");
    });
  });
};

const updatePatient = (req, res) => {
  const id = parseInt(req.params.id);
  const { contact } = req.body;
  pool.query(queries.getPatientById, [id], (error, results) => {
    const noPatientFound = !results.rows.length;
    if (noPatientFound) {
      res.send("Patient does not exist in the db.");
    }
    pool.query(queries.updatePatient, [contact, id], (error, results) => {
      if (error) throw error;
      res.status(200).send("Patient Updated Successfully!");
    });
  });
};

module.exports = {
  getPatients,
  getPatientById,
  addPatient,
  removePatient,
  updatePatient,
};
