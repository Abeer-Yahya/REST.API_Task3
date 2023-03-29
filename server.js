const express = require("express");
const patientRoutes = require("./src/patient/routes");
const app = express();
require("dotenv").config();
const logger = require("./src/middleware/logger");
app.use(logger);
app.use(ErrorHandler);

const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/patients", patientRoutes);

app.listen(port, () => console.log(`App listening on port ${port}`));
