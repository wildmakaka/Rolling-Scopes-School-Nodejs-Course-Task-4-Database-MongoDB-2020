const DBTasks = require('../../common/InMemeryDbTasks');

const getAll = async () => DBTasks.getAllTasks();

const get = async (id) => {
  const task = await DBTasks.getTask(id);
  if (!task) {
    throw new Error(`[App Error] The task with id: ${id} was not found!`);
  } else if (task.lenght > 1) {
    throw new Error('[App Error] DB is corrupted!');
  }
  return task;
};

const create = async (task) => {
  return DBTasks.createTask(task);
};

// const update = async (id, body) => {
//   return DB.updateUser(id, body);
// };

const remove = async (id) => {
  return DBTasks.removeTask(id);
};

// update

module.exports = { getAll, get, create, remove };
