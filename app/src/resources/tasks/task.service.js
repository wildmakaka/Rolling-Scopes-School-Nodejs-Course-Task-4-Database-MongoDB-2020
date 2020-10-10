const tasksRepo = require('./task.memory.repository');

const getAll = () => tasksRepo.getAll();

// const get = (id) => usersRepo.get(id);

// const create = (user) => usersRepo.create(user);

// const update = (id, body) => usersRepo.update(id, body);

// const remove = (id) => usersRepo.remove(id);

// module.exports = { getAll, get, create, remove, update };

module.exports = { getAll };
