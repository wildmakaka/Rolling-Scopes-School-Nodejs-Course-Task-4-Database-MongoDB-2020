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
  // await Task.updateMany({ boardId }, { $set: { boardId: '' } });
};

// const get = async (id) => {
//   const board = await DBBoards.getBoard(id);
//   if (!board) {
//     throw new Error(`[App Error] The board with id: ${id} was not found!`);
//   } else if (board.lenght > 1) {
//     throw new Error('[App Error] DB is corrupted!');
//   }
//   return board;
// };

// const create = async (board) => {
//   return DBBoards.createBoard(board);
// };

// const update = async (id, board) => {
//   return DBBoards.updateBoard(id, board);
// };

// const remove = async (boardId) => {
//   return DBBoards.removeBoard(boardId);
// };

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
