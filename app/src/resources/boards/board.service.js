const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();

const get = (id) => boardsRepo.get(id);

// const create = (user) => boardsRepo.create(user);

// const update = (id, body) => boardsRepo.update(id, body);

// const remove = (id) => boardsRepo.remove(id);

// module.exports = { getAll, get, create, remove, update };

module.exports = { getAll, get };
