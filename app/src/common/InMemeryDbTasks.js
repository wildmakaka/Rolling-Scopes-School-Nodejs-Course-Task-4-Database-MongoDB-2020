const _ = require('lodash');
// const Task = require('../resources/tasks/task.model');

const DBTasks = [];

// DBTasks.push(new Task(), new Task(), new Task());

const getAllTasks = async () => {
  return DBTasks.slice(0);
};

const getTask = async (id) => {
  const allTasks = await getAllTasks();
  return allTasks.filter((el) => el.id === id)[0];
};

const createTask = async (task) => {
  DBTasks.push(task);
  return getTask(task.id);
};

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

const removeTask = async (id) => {
  const deletedTask = await getTask(id);
  await _.remove(DBTasks, (task) => {
    return task.id === id;
  });
  return deletedTask;
};

const deleteUserFromTasks = async (userId) => {
  await _.map(DBTasks, (task) => {
    if (task.userId === userId) {
      task.userId = null;
    }
  });

  return null;
};

// module.exports = { , updateUser, removeUser };
module.exports = {
  getAllTasks,
  getTask,
  createTask,
  removeTask,
  deleteUserFromTasks,
};
