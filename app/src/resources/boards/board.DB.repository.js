const { Board } = require('./board.model');

const getAll = async () => Board.find({});

const get = async (id) => {
  const board = await Board.findById(id);
  if (!board) {
    throw new Error(`Board with id ${id} was not found!`);
  }

  return board;
};

const create = async (board) => Board.create(board);

const update = async (id, board) => {
  await Board.updateOne({ _id: id }, board);
  return get(id);
};

const remove = async (id) => Board.deleteOne({ _id: id });

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
  get,
  create,
  update,
  remove,
};
