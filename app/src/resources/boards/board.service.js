const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();

const get = (id) => boardsRepo.get(id);

const create = (board) => boardsRepo.create(board);

const update = (id, body) => boardsRepo.update(id, body);

const remove = (boardId) => boardsRepo.remove(boardId);

const getBoardTask = (boardId, taskId) =>
  boardsRepo.getBoardTask(boardId, taskId);

const getBoardTasks = (boardId) => boardsRepo.getBoardTasks(boardId);

const createBoardTask = (boardId, body) =>
  boardsRepo.createBoardTask(boardId, body);

const deleteBoardTask = (boardId, taskId) =>
  boardsRepo.deleteBoardTask(boardId, taskId);

module.exports = {
  getAll,
  get,
  create,
  remove,
  update,
  getBoardTasks,
  getBoardTask,
  createBoardTask,
  deleteBoardTask,
};
