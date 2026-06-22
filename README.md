This project was given to me to learn java script and also understand API's and this code is supposed to mkae it easy to handle tasks

Features I've implemented
+ You can creat a new task
+ View all tasks
+ View a task using its ID
+ You can update a task 
+ Delete tasks
+ Filter tasks by status
+ Filter tasks by priority
+ Sort tasks by when it was created
+ There's pagination
+ You can request validation for tasks
+ Errors witj approprate codes

Tech I used
+ Node.js
+ Express.js
+ JavaScript

Installation

1. Clone the repository.

git clone <repository-url>

2. Navigate to the project folder.

cd internship

3. Install dependencies.

npm install express

4. Start the server.

node system.js

The server will run on:

http://localhost:3000
 
 API Endpoints

| Method | Endpoint   | Description       |
| ------ | ---------- | ----------------- |
| GET    | /tasks     | Get all tasks     |
| GET    | /tasks/:id | Get a task by ID  |
| POST   | /tasks     | Create a new task |
| PUT    | /tasks/:id | Update a task     |
| DELETE | /tasks/:id | Delete a task     |

Sample Task Object
{
  "id": 1,
  "title": "Learn APIs",
  "description": "Complete API training module",
  "status": "Pending",
  "priority": "High",
  "createdAt": "2026-06-17T10:00:00Z"
}

Learning Outcomes

Through this project, I gained practical experience with:

Building REST APIs using Express.js
Handling HTTP requests and responses
Working with route parameters and query parameters
Request validation and error handling
Implementing CRUD operations
Testing APIs using Postman

Author
Roshan Thomas
