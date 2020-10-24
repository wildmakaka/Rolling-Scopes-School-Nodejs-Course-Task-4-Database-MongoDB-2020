const { Board } = require('./board.model');
// const { Task } = require('../tasks/task.model');

const getAll = async () => Board.find({});

const getById = async (id) => {
  const board = await Board.findById(id);
  if (!board) {
    throw new Error(`Board with id ${id} was not found!`);
  }
  return board;
};

const create = async (board) => Board.create(board);

const update = async (id, board) => {
  await Board.updateOne({ _id: id }, board);
  return getById(id);
};

const remove = async (boardId) => {
  await Board.deleteOne({ _id: boardId });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
