const Joi = require("joi");
const express = require("express");
const app = express();

// Middleware
app.use(express.json());
const { logger } = require("./middlewares");

const tasks = [
  { id: 1, name: "task1" },
  { id: 2, name: "task2" },
  { id: 3, name: "task3" },
];

// Show All data
app.get("/api/tasks", logger, (req, res) => {
  res.json({
    data: tasks,
    ...req.userInfo,
  });
});

// Show single item based on id
app.get("/api/tasks/:id", logger, (req, res) => {
  const task = tasks.find((c) => c.id === parseInt(req.params.id));
  if (!task)
    return res.status(404).send("The task with the given ID was not found ...");

  res.json({
    data: task,
    ...req.userInfo,
  });
});

// Create a new item
app.post("/api/tasks", logger, (req, res) => {
  const { error } = validateTask(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const tasks = {
    id: tasks.length + 1,
    name: req.body.name,
  };
  tasks.push(task);
  res.json({
    data: task,
    ...req.userInfo,
  });
});

// Update an existing item
app.put("/api/tasks/:id", logger, (req, res) => {
  const task = tasks.find((c) => c.id === parseInt(req.params.id));
  if (!task)
    return res.status(404).send("The task with the given ID was not found ...");

  const { error } = validateTask(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  task.name = req.body.name;
  res.json({
    data: task,
    ...req.userInfo,
  });
});

// Delete an exisiting item
app.delete("/api/tasks/:id", logger, (req, res) => {
  const task = tasks.find((c) => c.id === parseInt(req.params.id));
  if (!task)
    return res.status(404).send("The task with the given ID was not found ...");

  const index = tasks.indexOf(task);
  tasks.splice(index, 1);
  res.json({
    data: task,
    ...req.userInfo,
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

function validateTask(task) {
  const schema = {
    name: Joi.string().min(3).required(),
  };
  return Joi.validate(task, schema);
}
