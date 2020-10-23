const { Task } = require('./task.model');

const getAll = async () => Task.find({});

const getById = async (boardId, taskId) => {
  const task = await Task.findById(taskId);
  if (!task) {
    throw new Error(`Task with id ${taskId} was not found!`);
  }
  return task;
};

const create = async (task) => Task.create(task);

const update = async (boardId, taskId, task) => {
  await Task.updateOne({ _id: taskId }, task);
  return getById(taskId);
};

const remove = async (id) => Task.deleteOne({ _id: id });

module.exports = { getAll, getById, create, update, remove };

// const DBTasks = require('../../common/InMemeryDbTasks');

// const getAll = async () => DBTasks.getAllTasks();

// const get = async (boardId, taskId) => {
//   const task = await DBTasks.getTask(boardId, taskId);
//   if (!task) {
//     throw new Error(`[App Error] The task with id: ${taskId} was not found!`);
//   } else if (task.lenght > 1) {
//     throw new Error('[App Error] DB is corrupted!');
//   }
//   return task;
// };

// const create = async (task) => {
//   return DBTasks.createTask(task);
// };

// const update = async (boardId, taskId, body) => {
//   return DBTasks.updateTask(boardId, taskId, body);
// };

// const remove = async (id) => {
//   return DBTasks.removeTask(id);
// };

module.exports = { getAll, getById, create, update, remove };
