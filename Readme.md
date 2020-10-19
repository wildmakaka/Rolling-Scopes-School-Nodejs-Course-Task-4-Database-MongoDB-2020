# RS School REST service - Task 3. Logging & Error Handling

<br/>

Все в master branch.

<br/>

# Окружение в котором разрабатывалось и тестировалось:

Ubuntu 20.04.01 LTS

<br/>

    $ node --version
    v12.18.4

<br/>

    $ npm --version
    6.14.8

<br/>

    $ cd app/
    $ npm install
    $ npm start
    $ npm test

<br/>

![Application](/img/results.png?raw=true)

<br/>

### Комментарии к задачам:

Логгирование в консоль и в файлы. В файлы логов создаются в app/logs.

<br/>

1. реализовано логирование (url, query parameters, body) для всех запросов к серверу с использованием middleware +20 баллов

<br/>

Реализовано в файле app.js

```js
app.use((req, res, next) => {
  writeAccessLog(req);
  next();
});
```

2. добавлена централизованная обработка всех ошибок, которая включает отправку респонса с соответствующим кодом http статуса и их логирование с использованием middleware +20 баллов

<br/>

Реализовано в файле app.js

```js
app.use((err, req, res, next) => {
  writeErrorLog(err, req, res);
  return res
    .status(INTERNAL_SERVER_ERROR)
    .send(getStatusText(INTERNAL_SERVER_ERROR));
  next();
});
```

3. добавлены обработка и логирование ошибок на событие `uncaughtException` +20 баллов

<br/>

Реализовано в файле loggingConfig.js

Можно разкомментировать в файле app.js

// uncaughtException
// throw Error('Oops!');

чтобы вызвать ошибку.

```js
process.on('uncaughtException', (error) => {
  logger.error('----------------------------');
  logger.error('CRITICAL - UNCOUGHT EXCEPTION!');
  logger.error('----------------------------');
  logger.error(error.stack);
});
```

4. добавлены обработка и логирование ошибок на событие `unhandledRejection` +20 баллов

<br/>

Реализовано в файле loggingConfig.js

Можно разкомментировать в файле app.js

// unhandledRejection
// Promise.reject(Error('Oops!'));

чтобы вызвать ошибку.

```js
process.on('unhandledRejection', (error) => {
  logger.error('----------------------------');
  logger.error('CRITICAL - UNHANDLED REJECTION!');
  logger.error('----------------------------');
  logger.error(error.stack);
});
```

5. процесс логирования осуществляется единственным модулем +20 баллов

Все в файле loggingConfig.js

<br/>

### Проверки:

Проверка получения query параметров:

```
$ curl -X GET "http://localhost:4000/users?user=admin&pass=admin" -H  "accept: application/json"

```

результат

```
[10/19/2020, 8:56:27 AM] info: ----------------------------
[10/19/2020, 8:56:27 AM] info: method = "GET"
[10/19/2020, 8:56:27 AM] info: url = "/users?user=admin&pass=admin"
[10/19/2020, 8:56:27 AM] info: body = {}
[10/19/2020, 8:56:27 AM] info: query = {"user":"admin","pass":"admin"}
[10/19/2020, 8:56:27 AM] info: ----------------------------

```

<br/>

Проверку остальных параметров можно посмотреть при запуске тестов.

<br/>

```
// Обращение к несуществующему ресурсу
$ curl -X GET "http://localhost:4000/user" -H "accept: application/json"

```

<br/>

Результат

```
WRITE ERROR LOG
---------------------------
[10/19/2020, 8:57:47 AM] error: ----------------------------
[10/19/2020, 8:57:47 AM] error: error = {"status":"Not Found","statusCode":404}
[10/19/2020, 8:57:47 AM] error: method = "GET"
[10/19/2020, 8:57:47 AM] error: statusCode = 404
[10/19/2020, 8:57:47 AM] error: params = {}
[10/19/2020, 8:57:47 AM] error: url = "/user"
[10/19/2020, 8:57:47 AM] error: body = {}
[10/19/2020, 8:57:47 AM] error: query = {}
[10/19/2020, 8:57:47 AM] error: stack = "Error: Can't find /user on this server!\n    at /home/marley/projects/dev/js/Rolling-Scopes-School-Nodejs-Course-Task-3-Logging-and-Error-Handling/app/src/app.js:49:15\n    at Layer.handle [as handle_request] (/home/marley/projects/dev/js/Rolling-Scopes-School-Nodejs-Course-Task-3-Logging-and-Error-Handling/app/node_modules/express/lib/router/layer.js:95:5)\n    at next (/home/marley/projects/dev/js/Rolling-Scopes-School-Nodejs-Course-Task-3-Logging-and-Error-Handling/app/node_modules/express/lib/router/route.js:137:13)\n    at next (/home/marley/projects/dev/js/Rolling-Scopes-School-Nodejs-Course-Task-3-Logging-and-Error-Handling/app/node_modules/express/lib/router/route.js:131:14)\n    at next (/home/marley/projects/dev/js/Rolling-Scopes-School-Nodejs-Course-Task-3-Logging-and-Error-Handling/app/node_modules/express/lib/router/route.js:131:14)\n    at next (/home/marley/projects/dev/js/Rolling-Scopes-School-Nodejs-Course-Task-3-Logging-and-Error-Handling/app/node_modules/express/lib/router/route.js:131:14)\n    at next (/home/marley/projects/dev/js/Rolling-Scopes-School-Nodejs-Course-Task-3-Logging-and-Error-Handling/app/node_modules/express/lib/router/route.js:131:14)\n    at next (/home/marley/projects/dev/js/Rolling-Scopes-School-Nodejs-Course-Task-3-Logging-and-Error-Handling/app/node_modules/express/lib/router/route.js:131:14)\n    at next (/home/marley/projects/dev/js/Rolling-Scopes-School-Nodejs-Course-Task-3-Logging-and-Error-Handling/app/node_modules/express/lib/router/route.js:131:14)\n    at Route.dispatch (/home/marley/projects/dev/js/Rolling-Scopes-School-Nodejs-Course-Task-3-Logging-and-Error-Handling/app/node_modules/express/lib/router/route.js:112:3)"
[10/19/2020, 8:57:47 AM] error: ----------------------------

```

<br/>

## Task 3. Logging & Error Handling

Максимальная оценка - 100 баллов.

1. реализовано логирование (url, query parameters, body) для всех запросов к серверу с использованием middleware +20 баллов
2. добавлена централизованная обработка всех ошибок, которая включает отправку респонса с соответствующим кодом http статуса и их логирование с использованием middleware +20 баллов
3. добавлены обработка и логирование ошибок на событие `uncaughtException` +20 баллов
4. добавлены обработка и логирование ошибок на событие `unhandledRejection` +20 баллов
5. процесс логирования осуществляется единственным модулем +20 баллов
6. каждый коммит после дедлайна минус 10 баллов.

Все тесты `npm run test` должны проходить, если не проходят тесты минус 10 баллов.

**Подсказки:**

- _(3 пункт)_ Для проверки, пропишите `throw Error('Oops!')` ВНЕ инициализации express и ПОСЛЕ `process.on('uncaughtException', () => {})`. Например:

```
// Express initialization
const app = express().use(...);

// Exceptions catcher
process.on('uncaughtException'...);

// PUT IT HERE
throw Error('Oops!');

module.exports = app;
```

_Как результат_: вывод в консоли отловленной ошибки

- _(4 пункт)_ Для проверки, пропишите `Promise.reject(Error('Oops!'))` ВНЕ инициализации express и ПОСЛЕ `process.on('unhandledRejection', () => {})`:

```
// Express initialization
const app = express().use(...);

// Exceptions catcher
process.on('unhandledRejection'...);

// PUT IT HERE
Promise.reject(Error('Oops!'));

module.exports = app;
```

_Как результат_: вывод в консоли отловленной ошибки

<br/>

## Task 3. Logging & Error Handling

Add logging functionality to already existing REST service.

1. Add express middleware which will log incoming requests to service (url, query parameters, body).
2. Add express middleware which will log all unhandled errors and return a standard message with HTTP code 500 (Internal Server Error).

3. Add errors handling to `process.on(‘uncaughtException’,...)`.
4. Add Unhandled promise rejection listener to log error
5. `console.log` or writing to a file can be used for logging. Any third-party logging library can also be used for this purpose.
