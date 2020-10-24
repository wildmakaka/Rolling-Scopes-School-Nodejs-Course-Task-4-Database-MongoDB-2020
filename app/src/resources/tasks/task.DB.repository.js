const { Task } = require('./task.model');

const getAll = async () => Task.find({});

const getById = async (boardId, taskId) => {
  const task = await Task.findById(taskId);
  if (!task) {
    throw new Error(`Task with id ${taskId} was not found!`);
  }
  return task;
};

const create = async (boardId, newTask) => {
  const ourNewTask = {
    ...newTask,
    boardId,
  };
  const createdTask = await Task.create(ourNewTask);
  return createdTask;
};

const update = async (boardId, taskId, task) => {
  return await Task.updateOne({ _id: taskId }, task);
};

const remove = async (id) => Task.deleteOne({ _id: id });

module.exports = { getAll, getById, create, update, remove };
