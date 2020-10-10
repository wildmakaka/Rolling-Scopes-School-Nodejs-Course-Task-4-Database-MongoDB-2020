// const _ = require('lodash');
const Task = require('../resources/tasks/task.model');

const DBTasks = [];

DBTasks.push(new Task(), new Task(), new Task());

const getAllTasks = async () => {
  return DBTasks.slice(0);
};

// const getUser = async (id) => {
//   const allUsers = await getAllUsers();
//   return allUsers.filter((el) => el.id === id)[0];
// };

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

// module.exports = { getAllUsers, getUser, createUser, updateUser, removeUser };
module.exports = { getAllTasks };
