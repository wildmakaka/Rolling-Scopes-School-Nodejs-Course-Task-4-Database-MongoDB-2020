const DBTasks = require('../../common/InMemeryDbTasks');

const getAll = async () => DBTasks.getAllTasks();

const get = async (boardId, taskId) => {
  const task = await DBTasks.getTask(boardId, taskId);
  if (!task) {
    throw new Error(`[App Error] The task with id: ${taskId} was not found!`);
  } else if (task.lenght > 1) {
    throw new Error('[App Error] DB is corrupted!');
  }
  return task;
};

const create = async (task) => {
  return DBTasks.createTask(task);
};

const update = async (boardId, taskId, body) => {
  return DBTasks.updateTask(boardId, taskId, body);
};

const remove = async (id) => {
  return DBTasks.removeTask(id);
};

module.exports = { getAll, get, create, update, remove };
