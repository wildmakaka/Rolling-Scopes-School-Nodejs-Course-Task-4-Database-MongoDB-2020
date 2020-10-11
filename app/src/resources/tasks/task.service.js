const tasksRepo = require('./task.memory.repository');

const getAll = () => tasksRepo.getAll();
const get = (id) => tasksRepo.get(id);
const create = (task) => tasksRepo.create(task);
const update = (boardId, taskId, body) =>
  tasksRepo.update(boardId, taskId, body);
const remove = (id) => tasksRepo.remove(id);

module.exports = { getAll, get, create, update, remove };
