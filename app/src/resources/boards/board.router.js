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
  try {
    const board = await boardsService.remove(req.params.id);
    return res.json(Board.toResponse(board));
  } catch (err) {
    res.status(404).send(err.message);
  }
});

//
//
//

// Get All Tasks belongs to specific board
router.route('/:boardId/tasks').get(async (req, res) => {
  // console.log('[BoardRouter] /:boardId/tasks');
  try {
    const tasks = await boardsService.getBoardTasks(req.params.boardId);
    return res.json(tasks);
  } catch (err) {
    res.status(404).send(err.message);
  }
});

// Create Task belongs to specific board
// ERROR !!!
router.route('/:boardId/tasks/:taskId').get(async (req, res) => {
  // console.log('[BoardRouter] /:boardId/tasks/:taskId');
  const boardId = req.params.boardId;
  const taskId = req.params.taskId;

  try {
    if (boardId && taskId) {
      // console.log('EVERYTHING IS OK');
      // console.log('boardId', boardId);
      // console.log('taskId', taskId);

      const task = await boardsService.getBoardTask(boardId, taskId);
      return res.json(task);
    }
    throw new Error('[App Error] Parameter boardId or TaskId is missing!');
  } catch (err) {
    res.status(404).send(err.message);
  }
});

// Create Task belongs to specific board
// ERROR !!!
router.route('/:boardId/tasks').post(async (req, res) => {
  try {
    const task = await boardsService.createBoardTask(
      req.params.boardId,
      req.body
    );
    return res.json(task);
  } catch (err) {
    res.status(404).send(err.message);
  }
});

// should delete task successfully
router.route('/:boardId/tasks/:taskId').delete(async (req, res) => {
  console.log('delete task /:boardId/tasks/:taskId');

  const boardId = req.params.boardId;
  const taskId = req.params.taskId;

  console.log('boardId', boardId);
  console.log('taskId', taskId);

  try {
    if (boardId && taskId) {
      const task = await boardsService.deleteBoardTask(boardId, taskId);
      return res.json(task);
    }
    throw new Error('[App Error] Parameter boardId or TaskId is missing!');
  } catch (err) {
    res.status(404).send(err.message);
  }
});

module.exports = router;
