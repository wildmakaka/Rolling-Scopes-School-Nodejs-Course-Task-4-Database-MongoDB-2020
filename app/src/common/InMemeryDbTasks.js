const _ = require('lodash');
const DBTasks = [];

const getAllTasks = async () => {
  return DBTasks.slice(0);
};

const getTask = async (boardId, taskId) => {
  const allTasks = await getAllTasks();
  let result;

  if (!boardId) {
    result = await allTasks.filter((el) => el.id === taskId)[0];
  } else {
    result = await allTasks.filter(
      (el) => el.boardId === boardId && el.id === taskId
    )[0];
  }
  return result;
};

const createTask = async (task) => {
  DBTasks.push(task);
  return getTask(null, task.id);
};

const updateTask = async (boardId, taskId, body) => {
  await _.map(DBTasks, (task) => {
    if (task.id === taskId) {
      _.map(task, (value, key) => {
        // if (body.hasOwnProperty(key)) {
        //   stateItem[key] = body[key];
        // }

        if (Object.prototype.hasOwnProperty.call(body, key)) {
          task[key] = body[key];
        }
      });
    }
  });

  return getTask(null, taskId);
};

const removeTask = async (id) => {
  const deletedTask = await getTask(null, id);
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

const removeTaskByBoardId = async (boardId) => {
  await _.remove(DBTasks, (task) => {
    return task.boardId === boardId;
  });
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  removeTask,
  deleteUserFromTasks,
  removeTaskByBoardId,
};
