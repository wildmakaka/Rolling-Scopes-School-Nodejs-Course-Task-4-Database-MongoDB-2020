const usersRepo = require('./user.DB.repository');

const getAll = () => usersRepo.getAll();

const getById = (userId) => usersRepo.getById(userId);

const create = (user) => usersRepo.create(user);

const update = (id, user) => usersRepo.update(id, user);

const remove = (userId) => usersRepo.remove(userId);

module.exports = { getAll, getById, create, remove, update };
