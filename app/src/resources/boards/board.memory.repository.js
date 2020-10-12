const DBBoards = require('../../common/InMemeryDbBoards');

const getAll = async () => DBBoards.getAllBoards();

const get = async (id) => {
  const board = await DBBoards.getBoard(id);
  if (!board) {
    throw new Error(`[App Error] The board with id: ${id} was not found!`);
  } else if (board.lenght > 1) {
    throw new Error('[App Error] DB is corrupted!');
  }
  return board;
};

const create = async (board) => {
  return DBBoards.createBoard(board);
};

const update = async (id, body) => {
  return DBBoards.updateBoard(id, body);
};

const remove = async (boardId) => {
  return DBBoards.removeBoard(boardId);
};

module.exports = {
  getAll,
  get,
  create,
  update,
  remove,
};
