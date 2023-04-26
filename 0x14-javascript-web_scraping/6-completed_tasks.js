#!/usr/bin/node
/* a script that computes the number of tasks completed by user id.

   The first argument is the API URL: https://jsonplaceholder.typicode.com/todos
   - Only prints users with completed task
   - You must use the module request
*/
const request = require('request');

const myFunc = function (_err, _res, body) {
  body = JSON.parse(body);
  const result = {};

  // Build list of available ids
  for (const task of body) {
    if (result[task.userId] === undefined) {
      result[task.userId] = 0;
    }
  }

  // Increment based on the number of completed tasks
  for (const task of body) {
    if (task.completed) {
      result[task.userId] += 1;
    }
  }
  console.log(result);
};

request(process.argv[2], myFunc);
