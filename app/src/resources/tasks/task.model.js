const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Task = new Schema(
  {
    title: String,
    order: String,
    description: String,
    userId: String,
    boardId: String,
    columnId: String,
  },
  { collection: 'tasks' }
);

const toResponse = (task) => {
  const { id, title, order, description, userId, boardId, columnId } = task;
  return { id, title, order, description, userId, boardId, columnId };
};

module.exports = { Task: mongoose.model('tasks', Task), toResponse };

// const { v4: uuid } = require('uuid');

// class Task {
//   constructor({
//     id = uuid(),
//     title = 'DefaultTask',
//     order = 'DefaultOrder',
//     description = 'DefaultDescription',
//     userId = 'DefaultDescription',
//     boardId = 'DefaultDescription',
//     columnId = '1',
//   } = {}) {
//     this.id = id;
//     this.title = title;
//     this.order = order;
//     this.description = description;
//     this.userId = userId;
//     this.boardId = boardId;
//     this.columnId = columnId;
//   }

//   static toResponse(task) {
//     const {
//       id,
//       title,
//       order,
//       description,
//       userId, // assignee
//       boardId,
//       columnId,
//     } = task;
//     return {
//       id,
//       title,
//       order,
//       description,
//       userId, // assignee
//       boardId,
//       columnId,
//     };
//   }
// }
// module.exports = Task;
