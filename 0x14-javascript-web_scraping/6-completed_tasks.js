#!/usr/bin/node
/* a script that computes the number of tasks completed by user id.

   The first argument is the API URL: https://jsonplaceholder.typicode.com/todos
   - Only prints users with completed task
   - You must use the module request
*/
const request = require('request');

const myFunc = function (_err, _res, body) {
  body = JSON.parse(body);
  const result = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0
  };
  for (const task of body) {
    if (task.completed) {
      result[task.userId] += 1;
    }
  }
  console.log(result);
};

request(process.argv[2], myFunc);
