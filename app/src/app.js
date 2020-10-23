const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');
const userRouter = require('./resources/users/user.router');
const boardRouter = require('./resources/boards/board.router');
const taskRouter = require('./resources/tasks/task.router');
const { INTERNAL_SERVER_ERROR, getStatusText } = require('http-status-codes');
// const { writeAccessLog, writeErrorLog } = require('./loggingConfig');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

// app.use((req, res, next) => {
//   writeAccessLog(req);
//   next();
// });

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

// Команды вызова исключений!

// uncaughtException
// throw Error('Oops!');

// unhandledRejection
// Promise.reject(Error('Oops!'));

app.use('/users', userRouter);
app.use('/boards', boardRouter);
boardRouter.use('/:boardId/tasks', taskRouter);
app.use('/tasks', taskRouter);

// app.all('*', (req, res, next) => {
//   const err = new Error(`Can't find ${req.originalUrl} on this server!`);
//   err.status = getStatusText(NOT_FOUND);
//   err.statusCode = NOT_FOUND;

//   next(err);
// });

app.use((err, req, res) => {
  // writeErrorLog(err, req, res);
  return res
    .status(INTERNAL_SERVER_ERROR)
    .send(getStatusText(INTERNAL_SERVER_ERROR));
});

module.exports = app;
