const User = require('../resources/users/user.model');

const DB = [];

DB.push(new User(), new User(), new User());

const getAllUsers = async () => {
  return DB.slice(0);
};

const getUser = async (id) => {
  const allUsers = await getAllUsers();
  return allUsers.filter((el) => el.id === id)[0];
};

const createUser = async (user) => {
  DB.push(user);
  return getUser(user.id);
};

module.exports = { getAllUsers, getUser, createUser };
