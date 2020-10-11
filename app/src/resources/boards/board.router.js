const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');

// Get All
router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  return res.json(boards.map(Board.toResponse));
});

// Get By Id
router.route('/:id').get(async (req, res) => {
  try {
    const board = await boardsService.get(req.params.id);
    return res.json(Board.toResponse(board));
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
  return res.json(Board.toResponse(board));
});

router.route('/:id').put(async (req, res) => {
  try {
    const board = await boardsService.update(req.params.id, req.body);
    return res.json(Board.toResponse(board));
  } catch (err) {
    res.status(404).send(err.message);
  }
});

router.route('/:id').delete(async (req, res) => {
  console.log(
    "[BoardRouter] DELETE › should delete board's tasks upon deletion"
  );
  const boardId = req.params.id;

  try {
    const board = await boardsService.remove(boardId);
    return res.json(Board.toResponse(board));
  } catch (err) {
    res.status(404).send(err.message);
  }
});

module.exports = router;
