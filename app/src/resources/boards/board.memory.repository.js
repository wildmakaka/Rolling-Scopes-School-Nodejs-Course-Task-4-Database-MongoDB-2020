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

// const create = async (user) => {
//   return DB.createUser(user);
// };

// const update = async (id, body) => {
//   return DB.updateUser(id, body);
// };

// const remove = async (id) => {
//   return DB.removeUser(id);
// };

// module.exports = { getAll, get, create, update, remove };

module.exports = { getAll, get };
