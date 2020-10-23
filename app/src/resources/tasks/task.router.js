const router = require('express').Router({ mergeParams: true });
const { Task } = require('./task.model');
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll();
  return res.json(tasks);
});

router.route('/:id').get(async (req, res) => {
  const boardId = req.params.boardId;
  const taskId = req.params.id;
  try {
    const task = await tasksService.get(boardId, taskId);
    return res.json(task);
  } catch (err) {
    res.status(404).send(err.message);
  }
});

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
  return res.json(task);
});

router.route('/:id').put(async (req, res) => {
  const boardId = req.params.boardId;
  const taskId = req.params.id;
  const body = req.body;
  try {
    const updatedTask = await tasksService.update(boardId, taskId, body);
    return res.json(updatedTask);
  } catch (err) {
    res.status(404).send(err.message);
  }
});

router.route('/:id').delete(async (req, res) => {
  try {
    const task = await tasksService.remove(req.params.id);
    return res.json(task);
  } catch (err) {
    res.status(404).send(err.message);
  }
});

module.exports = router;
