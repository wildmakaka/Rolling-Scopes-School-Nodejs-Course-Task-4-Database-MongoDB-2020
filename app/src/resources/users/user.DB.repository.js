const { User } = require('./user.model');

const getAll = async () => User.find({});

const get = async (id) => {
  const user = await User.findById(id);
  if (!user) {
    throw new Error(`User with id ${id} not found!`);
  }

  return user;
};

const create = async (user) => User.create(user);

const update = async (id, user) => {
  await User.updateOne({ _id: id }, user);
  return get(id);
};

const remove = async (id) => User.deleteOne({ _id: id });

module.exports = { getAll, get, create, update, remove };
