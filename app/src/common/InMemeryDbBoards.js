const _ = require('lodash');
// const Board = require('../resources/boards/board.model');

const DBTasks = require('./InMemeryDbTasks');
const Task = require('../resources/tasks/task.model');

const DBBoards = [];

// DBBoards.push(new Board());

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
  const deletedBoard = await getBoard(id);
  await _.remove(DBBoards, (board) => {
    return board.id === id;
  });
  return deletedBoard;
};

//

const getBoardTasks = async (boardId) => {
  const allBoards = await getAllBoards();
  const res = [];
  await _.map(allBoards, (stateItem) => {
    if (stateItem.id === boardId) {
      res.push(stateItem);
    }
  });
  return res;
};

const getBoardTask = async (boardId, taskId) => {
  if (boardId && taskId) {
    // const boardTasks = await getBoardTasks(boardId);
    // console.log('taskId', taskId);
  } else {
    throw new Error('[App Error] Parameter boardId or TaskId is missing!');
  }

  const res = [];
  // await _.map(allBoards, (stateItem) => {
  //   if (stateItem.id === boardId) {
  //     res.push(stateItem);
  //   }
  // });
  return res;
};

const createBoardTask = async (boardId, body) => {
  // console.log('InMemoryDbBoards');
  // console.log('boardId', boardId);

  // const board = await getBoardTasks(boardId);

  // console.log('board', board);

  const newTask = new Task(body);
  await DBTasks.createTask(newTask);

  // Здесь нужно добавить таску в боард

  return getBoardTasks(boardId);
};

// const deleteBoardTask = async (boardId, taskId) => {
const deleteBoardTask = async () => {
  // console.log('deleteBoardTask');

  // console.log('boardId', boardId);
  // console.log('taskId', taskId);

  const res = [];
  // await _.map(allBoards, (stateItem) => {
  //   if (stateItem.id === boardId) {
  //     res.push(stateItem);
  //   }
  // });
  return res;
};

module.exports = {
  getAllBoards,
  getBoard,
  createBoard,
  updateBoard,
  removeBoard,
  getBoardTasks,
  getBoardTask,
  createBoardTask,
  deleteBoardTask,
};
