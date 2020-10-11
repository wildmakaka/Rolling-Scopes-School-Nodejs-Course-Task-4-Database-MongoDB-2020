# RS School REST service

<br/>

# Окружение в котором разрабатывалось:

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

<br/>

![Application](/img/results.png?raw=true)

<br/>

# Проверки (необходимо заменять id на сгенерированные):

### Users

<br/>

**Get All Users**

    $ curl -X GET "http://localhost:4000/users" \
    -H  "accept: application/json" \
    | python3 -m json.tool

<br/>

**Get User by ID**

    $ curl -X GET "http://localhost:4000/users/5b811dc3-3f09-48d1-a1cb-634c1f83a127" \
    -H  "accept: application/json" \
    | python3 -m json.tool

<br/>

**Update User**

    $ curl -d '{
        "name": "newName",
        "login": "newLogin",
        "password": "newPassword"
    }' \
    -H "Content-Type: application/json" \
    -X PUT "http://localhost:4000/users/06929eab-d187-4b27-8d61-0a6965383b8d" \
    | python3 -m json.tool

<br/>

**Delete User**

    $ curl \
    -X DELETE "http://localhost:4000/users/5cdcd412-6a5a-461c-878e-13f73d3a8a3a" \
    -H  "accept: application/json" \
    | python3 -m json.tool

<br/>

### Tasks

<br/>

**Get All Tasks**

    $ curl -X GET "http://localhost:4000/tasks" -H  "accept: application/json" \
    | python3 -m json.tool

<br/>

**Get Task by ID**

    $ curl -X GET http://localhost:4000/tasks/110973a6-cd36-4c67-8103-1e7ad2b1b67d \
    -H  "accept: application/json" \
    | python3 -m json.tool

<br/>

**Create Task**

Получить userId  
Получить boardId

<br/>

    $ curl -d '{
      "title": "Hello World Task!",
      "order": "1",
      "description": "Hello World Task! Author is Marley!!!",
      "userId" : "1234",
      "boardId" : "5678",
      "columnId" : "2"
    }' \
    -H "Content-Type: application/json" \
    -X POST http://localhost:4000/tasks \
    | python3 -m json.tool

<!--

  id,
      title,
      order,
      description,
      userId, //assignee
      boardId,
      columnId;
-->

<br/>

**Delete Task**

    $ curl \
    -X DELETE "http://localhost:4000/tasks/43e3a2d0-6c93-44f4-946c-1c8acbeafd5c" \
    -H  "accept: application/json" \
    | python3 -m json.tool

<br/>

### Boards

<br/>

**Get All Boards**

    $ curl -X GET "http://localhost:4000/boards" \
    -H  "accept: application/json" \
    | python3 -m json.tool

<br/>

**Get Board by ID**

    $ curl -X GET "http://localhost:4000/boards/5da5a3c9-4710-4ff6-b6e5-f1cd37ac8af9" \
    -H  "accept: application/json" \
    | python3 -m json.tool

<br/>

**Create Board**

    $ curl -d '{
      "title": "Hello World!"
    }' \
    -H "Content-Type: application/json" \
    -X POST http://localhost:4000/boards \
    | python3 -m json.tool

<!-- $ curl -d '{
  "user": "5d7a514b5d2c12c7449be045",
	"name": "Devworks Bootcamp",
	"description": "Devworks is a full stack JavaScript Bootcamp located in the heart of Boston that focuses on the technologies you need to get a high paying job as a web developer",
	"website": "https://devworks.com",
	"phone": "(111) 111-1111",
	"email": "enroll@devworks.com",
	"address": "233 Bay State Rd Boston MA 02215",
	"careers": ["Web Development", "UI/UX", "Business"],
	"housing": true,
	"jobAssistance": true,
	"jobGuarantee": false,
	"acceptGi": true
}' \
-H "Content-Type: application/json" \
-X POST localhost:5000/api/v1/bootcamps \
| python -m json.tool     -->

<br/>

**Delete Board**

    $ curl \
    -X DELETE "http://localhost:4000/boards/1fc7d7da-5ee6-4820-8447-f8c3d180c4f6" \
    -H  "accept: application/json" \
    | python3 -m json.tool

<br/>

**!!!! Get Board Tasks**

    $ curl -X GET "http://localhost:4000/boards/5da5a3c9-4710-4ff6-b6e5-f1cd37ac8af9/tasks" \
    -H  "accept: application/json" \
    | python3 -m json.tool

<br/>

**!!!! Get Board Task ByID**

    $ curl -X GET "http://localhost:4000/boards/5da5a3c9-4710-4ff6-b6e5-f1cd37ac8af9/tasks/myTaskId" \
    -H  "accept: application/json" \
    | python3 -m json.tool

```
{
        "id": "d87494bf-9a89-452d-ad68-094b19a2619a",
        "title": "Autotest board",
        "columns": [
            {
                "title": "Backlog",
                "order": 1
            },
            {
                "title": "Sprint",
                "order": 2
            }
        ]
    },
```

<br/>

## Task 2. Express REST service

Let's try to create a competitor for Trello!

**Create an [Express](https://expressjs.com/ru/) application, the application should operate with the following resources:**

- User (with attributes):
  ```javascript
  {
    id, name, login, password;
  }
  ```
- Board (set of columns):
  ```javascript
  {
    id, title, columns;
  }
  ```
- Column (set of tasks):
  ```javascript
  {
    id, title, order;
  }
  ```
- Task:
  ```javascript
  {
    id,
      title,
      order,
      description,
      userId, //assignee
      boardId,
      columnId;
  }
  ```

**Details:**

1. For User, Board and Task REST endpoints with separate router paths should be created

   - `/users`
     - `GET /users` - get all users (remove password from response)
     - `GET /users/:id` - get the user by id (ex. “/users/123”) (remove password from response)
     - `POST /users` - create user
     - `PUT /users/:id` - update user
     - `DELETE /users/:id` - delete user
   - `/boards`
     - GET all
     - GET by id
     - POST
     - PUT
     - DELETE
   - `/tasks`
     - GET all by boardId
     - GET by id
     - POST
     - PUT
     - DELETE

2. When somebody DELETE Board, all its Tasks should be deleted as well.

3. When somebody DELETE User, all Tasks where User is assignee should be updated to put userId=null.

4. For now, these endpoints should operate only with in-memory (hardcoded) data, in the next tasks we will use a DB for it. You may organize your modules with the consideration that the data source will be changed soon.

5. An application/json format should be used for request and response body.

6. Do not put everything in one file - use a separate file for application creation (bootstrapping), for controllers (routers) and code related to business logic. Also split files to different modules depends on a domain (user-related, board-related, etc...).

7. To run the service “npm start” command should be used.

8. Service should listen on PORT 4000.
