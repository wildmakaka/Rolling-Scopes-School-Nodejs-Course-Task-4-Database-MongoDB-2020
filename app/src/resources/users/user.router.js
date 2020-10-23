const router = require('express').Router();
const { OK, NOT_FOUND, getStatusText } = require('http-status-codes');
const { User, toResponse } = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  return res.json(users.map(toResponse));
});

router.route('/:id').get(async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await usersService.getById(userId);
    return res.json(toResponse(user));
  } catch (err) {
    res.status(NOT_FOUND).send(err.message);
  }
});

router.route('/').post(async (req, res) => {
  const user = await usersService.create(
    new User({
      login: req.body.login,
      password: req.body.password,
      name: req.body.name,
    })
  );
  return res.json(toResponse(user));
});

router.route('/:id').put(async (req, res) => {
  try {
    const id = req.params.id;
    const user = req.body;

    const updatedUser = await usersService.update(id, user);
    return res.json(toResponse(updatedUser));
  } catch (err) {
    return res.status(NOT_FOUND).send(err.message);
  }
});

router.route('/:id').delete(async (req, res) => {
  try {
    const userId = req.params.id;
    await usersService.remove(userId);
    return res.status(OK).send(getStatusText(OK));
  } catch (err) {
    return res.status(NOT_FOUND).send(err.message);
  }
});

module.exports = router;
