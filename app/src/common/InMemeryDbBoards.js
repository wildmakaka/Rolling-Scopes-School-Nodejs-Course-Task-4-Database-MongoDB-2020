const _ = require('lodash');

const DBTasks = require('./InMemeryDbTasks');
const DBBoards = [];

const getAllBoards = async () => {
  return DBBoards.slice(0);
};

const getBoard = async (id) => {
  const allBoards = await getAllBoards();
  return allBoards.filter((el) => el.id === id)[0];
};

const createBoard = async (board) => {
  DBBoards.push(board);
  return getBoard(board.id);
};

const updateBoard = async (id, body) => {
  await _.map(DBBoards, (stateItem) => {
    if (stateItem.id === id) {
      _.map(stateItem, (value, key) => {
        // if (body.hasOwnProperty(key)) {
        //   stateItem[key] = body[key];
        // }

        if (Object.prototype.hasOwnProperty.call(body, key)) {
          stateItem[key] = body[key];
        }
      });
    }
  });
  return getBoard(id);
};

const removeBoard = async (boardId) => {
  const deletedBoard = await getBoard(boardId);
  await _.remove(DBBoards, (board) => {
    return board.id === boardId;
  });

  await DBTasks.removeTaskByBoardId(boardId);

  return deletedBoard;
};

module.exports = {
  getAllBoards,
  getBoard,
  createBoard,
  updateBoard,
  removeBoard,
};
