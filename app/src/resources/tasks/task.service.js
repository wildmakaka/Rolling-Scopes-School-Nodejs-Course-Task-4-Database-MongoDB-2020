const tasksRepo = require('./task.DB.repository');

const getAll = () => tasksRepo.getAll();
const getById = (boardId, taskId) => tasksRepo.getById(boardId, taskId);
const create = (task) => tasksRepo.create(task);
const update = (boardId, taskId, task) =>
  tasksRepo.update(boardId, taskId, task);
const remove = (id) => tasksRepo.remove(id);

module.exports = { getAll, getById, create, update, remove };
