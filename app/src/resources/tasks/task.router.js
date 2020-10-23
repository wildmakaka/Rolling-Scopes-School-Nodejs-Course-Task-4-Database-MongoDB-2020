const router = require('express').Router({ mergeParams: true });
const { Task, toResponse } = require('./task.model');
const tasksService = require('./task.service');

// Get All
router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll();
  return res.json(tasks.map(toResponse));
});

// Get By Id
router.route('/:id').get(async (req, res) => {
  const taskId = req.params.id;
  try {
    const task = await tasksService.get(taskId);
    return res.json(toResponse(task));
  } catch (err) {
    return res.status(404).send(err.message);
  }
});

// Create
router.route('/').post(async (req, res) => {
  const task = await tasksService.create(
    new Task({
      title: req.body.title,
      order: req.body.order,
      description: req.body.description,
      userId: req.body.userId,
      boardId: req.params.boardId,
      columnId: req.body.columnId,
    })
  );
  return res.json(toResponse(task));
});

// Update
router.route('/:id').put(async (req, res) => {
  console.log('Update');
  console.log(req.params.id);

  const boardId = req.params.boardId;
  const taskId = req.params.id;
  const task = req.body;
  try {
    const updatedTask = await tasksService.update(boardId, taskId, task);
    return res.json(toResponse(updatedTask));
  } catch (err) {
    return res.status(404).send(err.message);
  }
});

// Delete
router.route('/:id').delete(async (req, res) => {
  try {
    const id = req.params.id;
    const task = await tasksService.remove(id);
    return res.json(toResponse(task));
  } catch (err) {
    return res.status(404).send(err.message);
  }
});

module.exports = router;
