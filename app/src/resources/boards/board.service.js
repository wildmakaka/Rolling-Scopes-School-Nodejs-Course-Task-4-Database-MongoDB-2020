const boardsRepo = require('./board.DB.repository');

const getAll = () => boardsRepo.getAll();

const get = (id) => boardsRepo.get(id);

const create = (board) => boardsRepo.create(board);

const update = (id, board) => boardsRepo.update(id, board);

const remove = (boardId) => boardsRepo.remove(boardId);

module.exports = {
  getAll,
  get,
  create,
  remove,
  update,
};
