const router = require('express').Router();
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll();
  return res.json(tasks.map(Task.toResponse));
});

// router.route('/:id').get(async (req, res) => {
//   try {
//     const user = await usersService.get(req.params.id);
//     return res.json(User.toResponse(user));
//   } catch (err) {
//     res.status(404).send(err.message);
//   }
// });

// router.route('/').post(async (req, res) => {
//   const user = await usersService.create(
//     new User({
//       login: req.body.login,
//       password: req.body.password,
//       name: req.body.name,
//     })
//   );
//   return res.json(User.toResponse(user));
// });

// router.route('/:id').put(async (req, res) => {
//   try {
//     const user = await usersService.update(req.params.id, req.body);
//     return res.json(User.toResponse(user));
//   } catch (err) {
//     res.status(404).send(err.message);
//   }
// });

// router.route('/:id').delete(async (req, res) => {
//   try {
//     const user = await usersService.remove(req.params.id);
//     return res.json(User.toResponse(user));
//   } catch (err) {
//     res.status(404).send(err.message);
//   }
// });

module.exports = router;
