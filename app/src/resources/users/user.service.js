const usersRepo = require('./user.DB.repository');

const getAll = () => usersRepo.getAll();

const get = (id) => usersRepo.get(id);

const create = (user) => usersRepo.create(user);

const update = (id, user) => usersRepo.update(id, user);

const remove = (userId) => usersRepo.remove(userId);

module.exports = { getAll, get, create, remove, update };
