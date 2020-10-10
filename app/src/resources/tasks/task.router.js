const router = require('express').Router();
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll();
  return res.json(tasks.map(Task.toResponse));
});

router.route('/:id').get(async (req, res) => {
  try {
    const task = await tasksService.get(req.params.id);

    console.log('task router');
    console.log('task', task);

    return res.json(Task.toResponse(task));
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
      boardId: req.body.boardId,
      columnId: req.body.columnId,
    })
  );

  return res.json(Task.toResponse(task));
});

// router.route('/:id').put(async (req, res) => {
//   try {
//     const user = await usersService.update(req.params.id, req.body);
//     return res.json(User.toResponse(user));
//   } catch (err) {
//     res.status(404).send(err.message);
//   }
// });

router.route('/:id').delete(async (req, res) => {
  try {
    const task = await tasksService.remove(req.params.id);
    return res.json(Task.toResponse(task));
  } catch (err) {
    res.status(404).send(err.message);
  }
});

module.exports = router;
