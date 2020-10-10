const { v4: uuid } = require('uuid');
class Board {
  constructor({
    id = uuid(),
    title = 'DefaultTitle',
    columns = 'DefaultColumns',
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
