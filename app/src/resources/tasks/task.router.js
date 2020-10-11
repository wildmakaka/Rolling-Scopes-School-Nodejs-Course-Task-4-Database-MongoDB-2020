const router = require('express').Router({ mergeParams: true });
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll();
  return res.json(tasks.map(Task.toResponse));
});

router.route('/:id').get(async (req, res) => {
  try {
    const task = await tasksService.get(req.params.id);
    return res.json(Task.toResponse(task));
  } catch (err) {
    res.status(404).send(err.message);
  }
});

router.route('/').post(async (req, res) => {
  // console.log('should create task successfullys');

  const task = await tasksService.create(
    new Task({
      title: req.body.title,
      order: req.body.order,
      description: req.body.description,
      userId: req.body.userId,
      boardId: req.params.boardId,
      columnId: req.body.columnId,
    })
  );

  // console.log('task', task);

  return res.json(Task.toResponse(task));
});

// router.route('/:id').put(async (req, res) => {
//   try {
//     const user = await usersService.update(req.params.id, req.body);
//     return res.json(User.toResponse(user));
//   } catch (err) {
//     res.status(404).send(err.message);
//   }
// });

router.route('/:id').delete(async (req, res) => {
  try {
    const task = await tasksService.remove(req.params.id);
    return res.json(Task.toResponse(task));
  } catch (err) {
    res.status(404).send(err.message);
  }
});

//

// // Get All Tasks belongs to specific board
// router.route('/:boardId/tasks').get(async (req, res) => {
//   // console.log('[BoardRouter] /:boardId/tasks');
//   try {
//     const tasks = await boardsService.getBoardTasks(req.params.boardId);
//     return res.json(tasks);
//   } catch (err) {
//     res.status(404).send(err.message);
//   }
// });

// // Create Task belongs to specific board
// // ERROR !!!
// router.route('/:boardId/tasks/:taskId').get(async (req, res) => {
//   console.log('[BoardRouter] /:boardId/tasks/:taskId');
//   const boardId = req.params.boardId;
//   const taskId = req.params.taskId;

//   try {
//     if (boardId && taskId) {
//       // console.log('EVERYTHING IS OK');
//       // console.log('boardId', boardId);
//       // console.log('taskId', taskId);

//       const task = await boardsService.getBoardTask(boardId, taskId);
//       return res.json(task);
//     }
//     throw new Error('[App Error] Parameter boardId or TaskId is missing!');
//   } catch (err) {
//     res.status(404).send(err.message);
//   }
// });

// Create Task belongs to specific board
// ERROR !!!
// should create task successfully
// router.route('/:boardId/tasks').post(async (req, res) => {
//   console.log('should create task successfullys');
//   try {
//     const task = await boardsService.createBoardTask(
//       req.params.boardId,
//       req.body
//     );
//     return res.json(task);
//   } catch (err) {
//     res.status(404).send(err.message);
//   }
// });

// // should delete task successfully
// router.route('/:taskId').delete(async (req, res) => {
//   console.log('delete task /:boardId/tasks/:taskId');

//   const boardId = req.params.boardId;
//   const taskId = req.params.taskId;

//   // console.log('boardId', boardId);
//   // console.log('taskId', taskId);

//   try {
//     if (boardId && taskId) {
//       const task = await boardsService.deleteBoardTask(boardId, taskId);
//       return res.json(task);
//     }
//     throw new Error('[App Error] Parameter boardId or TaskId is missing!');
//   } catch (err) {
//     res.status(404).send(err.message);
//   }
// });

module.exports = router;
