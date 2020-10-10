const _ = require('lodash');
const Board = require('../resources/boards/board.model');

const DBBoards = [];

DBBoards.push(new Board(), new Board(), new Board());

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

const removeBoard = async (id) => {
  console.log('InMemeryDbBoards.js');

  const deletedBoard = await getBoard(id);
  await _.remove(DBBoards, (board) => {
    return board.id === id;
  });
  return deletedBoard;
};

module.exports = {
  getAllBoards,
  getBoard,
  createBoard,
  updateBoard,
  removeBoard,
};
