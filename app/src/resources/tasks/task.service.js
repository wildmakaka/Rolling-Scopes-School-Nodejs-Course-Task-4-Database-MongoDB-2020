const tasksRepo = require('./task.memory.repository');

const getAll = () => tasksRepo.getAll();

const get = (id) => tasksRepo.get(id);

const create = (task) => tasksRepo.create(task);

// const update = (id, body) => tasksRepo.update(id, body);

const remove = (id) => tasksRepo.remove(id);

//  remove, update };

module.exports = { getAll, get, create, remove };
