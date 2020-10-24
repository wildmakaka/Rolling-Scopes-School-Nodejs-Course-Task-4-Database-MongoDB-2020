const router = require('express').Router({ mergeParams: true });
const { NOT_FOUND } = require('http-status-codes');

const tasksService = require('./task.service');
const { toResponse } = require('./task.model');

// Get All
router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll();
  return res.json(tasks.map(toResponse));
});

// Get By Id
router.route('/:id').get(async (req, res) => {
  const boardId = req.params.boardId;
  const taskId = req.params.id;
  try {
    const task = await tasksService.getById(boardId, taskId);
    return res.json(toResponse(task));
  } catch (err) {
    return res.status(NOT_FOUND).send(err.message);
  }
});

// Create
router.route('/').post(async (req, res) => {
  const boardId = req.params.boardId;
  const newTask = req.body;
  const createdTask = await tasksService.create(boardId, newTask);
  return res.json(toResponse(createdTask));
});

// Update
router.route('/:id').put(async (req, res) => {
  const boardId = req.params.boardId;
  const taskId = req.params.id;
  const task = req.body;
  try {
    const updatedTask = await tasksService.update(boardId, taskId, task);
    // return res.status(OK).send(updatedTask);
    return res.json(toResponse(updatedTask));
  } catch (err) {
    return res.status(NOT_FOUND).send(err.message);
  }
});

// Delete
router.route('/:id').delete(async (req, res) => {
  try {
    const id = req.params.id;
    const task = await tasksService.remove(id);
    return res.json(toResponse(task));
  } catch (err) {
    return res.status(NOT_FOUND).send(err.message);
  }
});

module.exports = router;
