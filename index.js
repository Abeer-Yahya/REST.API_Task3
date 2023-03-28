const Joi = require("joi");
const express = require("express");
const app = express();
require("dotenv").config();
const routes = require("./routes/routes");

// use the routes.js file to handle endpoints that start with /api
app.use("/api", routes);
// Middleware
app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
