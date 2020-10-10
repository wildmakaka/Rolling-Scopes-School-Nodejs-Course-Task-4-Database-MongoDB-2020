// const _ = require('lodash');
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

// const createUser = async (user) => {
//   DB.push(user);
//   return getUser(user.id);
// };

// const updateUser = async (id, body) => {
//   await _.map(DB, (stateItem) => {
//     if (stateItem.id === id) {
//       _.map(stateItem, (value, key) => {
//         // if (body.hasOwnProperty(key)) {
//         //   stateItem[key] = body[key];
//         // }

//         if (Object.prototype.hasOwnProperty.call(body, key)) {
//           stateItem[key] = body[key];
//         }
//       });
//     }
//   });
//   return getUser(id);
// };

// const removeUser = async (id) => {
//   const deletedUser = await getUser(id);
//   await _.remove(DB, (user) => {
//     return user.id === id;
//   });
//   return deletedUser;
// };

// createUser, updateUser, removeUser };
module.exports = { getAllBoards, getBoard };
