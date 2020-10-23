const router = require('express').Router();
const { Board } = require('./board.model');
const boardsService = require('./board.service');

// Get All
router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  return res.json(boards);
});

// Get By Id
router.route('/:id').get(async (req, res) => {
  const boardId = req.params.id;

  try {
    const board = await boardsService.get(boardId);
    return res.json(board);
  } catch (err) {
    res.status(404).send(err.message);
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
  return res.json(board);
});

router.route('/:id').put(async (req, res) => {
  try {
    const id = req.params.id;
    const board = req.body;
    const updatedBoard = await boardsService.update(id, board);
    return res.json(updatedBoard);
  } catch (err) {
    res.status(404).send(err.message);
  }
});

router.route('/:id').delete(async (req, res) => {
  const boardId = req.params.id;
  try {
    const board = await boardsService.remove(boardId);
    return res.json(board);
  } catch (err) {
    res.status(404).send(err.message);
  }
});

module.exports = router;
