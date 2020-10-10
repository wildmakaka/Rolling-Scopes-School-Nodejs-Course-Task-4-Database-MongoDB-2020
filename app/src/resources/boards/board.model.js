const { v4: uuid } = require('uuid');
class Board {
  constructor({
    id = uuid(),
    title = 'DefaultTitle',
    columns = [
      { id: uuid(), title: 'Default Column Title 1', order: '1' },
      { id: uuid(), title: 'Default Column Title 2', order: '2' },
      { id: uuid(), title: 'Default Column Title 3', order: '3' },
    ],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  static toResponse(board) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}

module.exports = Board;
