const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Board = new Schema(
  {
    title: String,
    columns: [
      {
        id: String,
        title: String,
        order: Number,
      },
    ],
  },
  { collection: 'boards' }
);

const toResponse = (board) => {
  const { id, title, columns } = board;
  return { id, title, columns };
};

module.exports = { Board: mongoose.model('boards', Board), toResponse };

// const { v4: uuid } = require('uuid');
// class Board {
//   constructor({
//     id = uuid(),
//     title = 'DefaultTitle',
//     columns = [
//       { id: uuid(), title: 'Default Column Title 1', order: '1' },
//       { id: uuid(), title: 'Default Column Title 2', order: '2' },
//       { id: uuid(), title: 'Default Column Title 3', order: '3' },
//     ],
//   } = {}) {
//     this.id = id;
//     this.title = title;
//     this.columns = columns;
//   }

//   static toResponse(board) {
//     const { id, title, columns } = board;
//     return { id, title, columns };
//   }
// }

// module.exports = Board;
