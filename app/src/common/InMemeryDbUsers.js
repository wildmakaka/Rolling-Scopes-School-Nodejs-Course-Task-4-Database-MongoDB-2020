const _ = require('lodash');
const DBTasks = require('./InMemeryDbTasks');

const DBUsers = [];

const getAllUsers = async () => {
  return DBUsers.slice(0);
};

const getUser = async (id) => {
  const allUsers = await getAllUsers();
  return allUsers.filter((el) => el.id === id)[0];
};

const createUser = async (user) => {
  DBUsers.push(user);
  return getUser(user.id);
};

const updateUser = async (id, body) => {
  await _.map(DBUsers, (stateItem) => {
    if (stateItem.id === id) {
      _.map(stateItem, (value, key) => {
        // if (body.hasOwnProperty(key)) {
        //   stateItem[key] = body[key];
        // }

        if (Object.prototype.hasOwnProperty.call(body, key)) {
          stateItem[key] = body[key];
        }
      });
    }
  });
  return getUser(id);
};

const removeUser = async (userId) => {
  const deletedUser = await getUser(userId);
  await _.remove(DBUsers, (user) => {
    return user.id === userId;
  });

  await DBTasks.deleteUserFromTasks(userId);
  return deletedUser;
};

module.exports = { getAllUsers, getUser, createUser, updateUser, removeUser };
