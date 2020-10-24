const router = require('express').Router();
const { OK, NOT_FOUND, getStatusText } = require('http-status-codes');
const { Board, toResponse } = require('./board.model');
const boardsService = require('./board.service');

// Get All
router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  return res.json(boards.map(toResponse));
});

// Get By Id
router.route('/:id').get(async (req, res) => {
  const boardId = req.params.id;
  try {
    const board = await boardsService.getById(boardId);
    return res.json(toResponse(board));
  } catch (err) {
    return res.status(NOT_FOUND).send(err.message);
  }
});

// Create
router.route('/').post(async (req, res) => {
  const board = await boardsService.create(
    new Board({
      title: req.body.title,
      columns: req.body.columns,
    })
  );
  return res.json(toResponse(board));
});

// Update
router.route('/:id').put(async (req, res) => {
  try {
    const id = req.params.id;
    const board = req.body;
    const updatedBoard = await boardsService.update(id, board);
    return res.json(toResponse(updatedBoard));
  } catch (err) {
    return res.status(NOT_FOUND).send(err.message);
  }
});

// Delete
router.route('/:id').delete(async (req, res) => {
  const boardId = req.params.id;
  try {
    await boardsService.remove(boardId);
    return res.status(OK).send(getStatusText(OK));
  } catch (err) {
    return res.status(NOT_FOUND).send(err.message);
  }
});

module.exports = router;
