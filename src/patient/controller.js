const prisma = require("./prisma");

const getPatients = (req, res) => {
  try {
    prisma.patients.findMany().then((results) => {
      res.status(200).send(results);
    });
  } catch (error) {
    res.status(500).send(`Something went wrong: ${error.message}`);
  }
};

const getPatientById = (req, res) => {
  try {
    prisma.patients
      .findUnique({
        where: { id: parseInt(req.params.id) },
      })
      .then((results) => {
        if (results) res.status(200).send(results);
        else res.status(404).send("Patient does not exist");
      });
  } catch (error) {
    res.status(500).send(`Something went wrong: ${error.message}`);
  }
};

const addPatient = (req, res) => {
  try {
    prisma.patients
      .create({
        data: { name: req.body.name, contact: req.body.contact },
      })
      .then((results) => res.status(201).send(results));
  } catch (error) {
    res.status(500).send(`Something went wrong: ${error.message}`);
  }
};

const removePatient = (req, res) => {
  try {
    if (!parseInt(req.params.id))
      return res.status(404).send("Patient with given ID not found");

    prisma.patients
      .delete({
        where: { id: parseInt(req.params.id) },
      })
      .then((results) =>
        res
          .status(200)
          .send(`Patient deleted with ID: ${parseInt(req.params.id)}`)
      );
  } catch (error) {
    res.status(500).send(`Something went wrong: ${error.message}`);
  }
};

const updatePatient = (req, res) => {
  try {
    prisma.patients
      .update({
        where: { id: parseInt(req.params.id) },
        data: { contact: req.body.contact },
      })
      .then((results) =>
        res.status(201).send(`Patient modified with ID: ${req.params.id}`)
      );
  } catch (error) {
    res.status(500).send(`Something went wrong: ${error.message}`);
  }
};

module.exports = {
  getPatients,
  getPatientById,
  addPatient,
  removePatient,
  updatePatient,
};
