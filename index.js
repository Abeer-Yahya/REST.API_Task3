const Joi = require("joi");
const express = require("express");
const app = express();
require("dotenv").config();
const routes = require("./routes/routes");

const port = process.env.PORT || 3000;

app.use(express.json());

// use the routes.js file to handle endpoints that start with /api
app.use("/api", routes);

// DB connetion
const { Client } = require("pg");
const client = new Client({
  host: process.env.HOST,
  port: process.env.DBPORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

execute();
async function execute() {
  try {
    await client.connect();
    console.log("Connected Successfully.");
    const results = await client.query("select * from tasks");
    console.table(results.rows);
  } catch (error) {
    console.log(`Something wrong happened ${error}`);
  } finally {
    await client.end();
    console.log("Client disconnected!");
  }
}
app.listen(port, () => console.log(`Listening on port ${port}...`));
