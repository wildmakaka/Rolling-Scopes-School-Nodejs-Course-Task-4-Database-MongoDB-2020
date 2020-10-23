const tasksRepo = require('./task.DB.repository');

const getAll = () => tasksRepo.getAll();
const get = (taskId) => tasksRepo.get(taskId);
const create = (task) => tasksRepo.create(task);
const update = (boardId, taskId, task) =>
  tasksRepo.update(boardId, taskId, task);
const remove = (id) => tasksRepo.remove(id);

module.exports = { getAll, get, create, update, remove };
