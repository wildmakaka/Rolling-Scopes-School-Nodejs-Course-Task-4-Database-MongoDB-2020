# RS School REST service - Task 4. Database MongoDB

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

<!--
### Комментарии к задачам:
-->

<br/>

### Task 4. Database MongoDB

1. Use MongoDB database to store REST service data (Users, Boards, Tasks).
2. Use [Mongoose ODM](https://mongoosejs.com/) to store and update data.
3. The information on DB connection (connection string) should be stored in `.env` file and should be passed to the application using the environment variables with the help of the following [dotenv package](https://www.npmjs.com/package/dotenv).

<br/>

### Критерии оценки

Максимальная оценка - 100 баллов. Минимальная оценка - 0 баллов.

1. в качестве источника данных для users используется MongoDB база данных +30 баллов.
2. в качестве источника данных для tasks используется MongoDB база данных +30 баллов.
3. в качестве источника данных для boards используется MongoDB база данных +30 баллов.
4. строка, используемая для подключения к базе данных хранится в `.env` +10 баллов.
5. каждый непроходящий тест минус 10 баллов.
6. за каждый исправленный тест минус 10 баллов.
7. каждый коммит после дедлайна минус 10 баллов.
