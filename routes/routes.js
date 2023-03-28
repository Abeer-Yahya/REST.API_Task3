"use strict";
const express = require("express");
let router = express.Router();
const { logger } = require("../middlewares");

const tasks = [
  { id: 1, title: "task1" },
  { id: 2, title: "task2" },
  { id: 3, title: "task3" },
];
function validateTask(task) {
  const schema = {
    title: Joi.string().min(3).required(),
  };
  return Joi.validate(task, schema);
}
// Show All data
// Create a new item
router
  .route("/tasks")
  .get(logger, (req, res) => {
    res.json({
      data: tasks,
      ...req.userInfo,
    });
  })
  .post(logger, (req, res) => {
    const { error } = validateTask(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const task = {
      id: tasks.length + 1,
      title: req.body.title,
    };
    tasks.push(task);
    res.json({
      data: task,
      ...req.userInfo,
    });
  });

// Show single item based on id
// Update an existing item
// Delete an exisiting item
router
  .route("/tasks/:id")
  .get(logger, (req, res) => {
    const task = tasks.find((c) => c.id === parseInt(req.params.id));
    if (!task)
      return res
        .status(404)
        .send("The task with the given ID was not found ...");

    res.json({
      data: task,
      ...req.userInfo,
    });
  })
  .put(logger, (req, res) => {
    const task = tasks.find((c) => c.id === parseInt(req.params.id));
    if (!task)
      return res
        .status(404)
        .send("The task with the given ID was not found ...");

    const { error } = validateTask(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    task.title = req.body.title;
    res.json({
      data: task,
      ...req.userInfo,
    });
  })
  .delete(logger, (req, res) => {
    const task = tasks.find((c) => c.id === parseInt(req.params.id));
    if (!task)
      return res
        .status(404)
        .send("The task with the given ID was not found ...");

    const index = tasks.indexOf(task);
    tasks.splice(index, 1);
    res.json({
      data: task,
      ...req.userInfo,
    });
  });

module.exports = router;
