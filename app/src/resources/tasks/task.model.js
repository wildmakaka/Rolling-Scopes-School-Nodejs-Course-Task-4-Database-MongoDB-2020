const { v4: uuid } = require('uuid');

class Task {
  constructor({
    id = uuid(),
    title = 'DefaultTask',
    order = 'DefaultOrder',
    description = 'DefaultDescription',
    userId = 'DefaultDescription',
    boardId = 'DefaultDescription',
    columnId = '1',
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  static toResponse(task) {
    const {
      id,
      title,
      order,
      description,
      userId, // assignee
      boardId,
      columnId,
    } = task;
    return {
      id,
      title,
      order,
      description,
      userId, // assignee
      boardId,
      columnId,
    };
  }
}
module.exports = Task;
