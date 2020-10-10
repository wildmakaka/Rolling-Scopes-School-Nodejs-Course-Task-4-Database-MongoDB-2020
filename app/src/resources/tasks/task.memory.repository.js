const DB = require('../../common/InMemeryDbTasks');

const getAll = async () => DB.getAllTasks();

// const get = async (id) => {
//   const user = await DB.getUser(id);
//   if (!user) {
//     throw new Error(`[App Error] The user with id: ${id} was not found!`);
//   } else if (user.lenght > 1) {
//     throw new Error('[App Error] DB is corrupted!');
//   }
//   return user;
// };

// const create = async (user) => {
//   return DB.createUser(user);
// };

// const update = async (id, body) => {
//   return DB.updateUser(id, body);
// };

// const remove = async (id) => {
//   return DB.removeUser(id);
// };

// module.exports = { getAll, get, create, update, remove };

module.exports = { getAll };
