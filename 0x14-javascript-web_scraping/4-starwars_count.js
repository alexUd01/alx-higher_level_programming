#!/usr/bin/node
/* A script that prints the number of movies where the character
   “Wedge Antilles” is present.

   The first argument is the API URL of the Star wars API:
   https://swapi-api.alx-tools.com/api/films/
   Wedge Antilles is character ID 18 - your script must use this ID for
   filtering the result of the API
   You must use the module request
*/
const request = require('request');

const givenUrl = 'https://swapi-api.alx-tools.com/api/films/';
// const preferredUrl = 'https://swapi-api.alx-tools.com/api/people/18/';

request(givenUrl, function (_err, _rsp, body) {
  body = JSON.parse(body);
  let count = 0;

  const results = body.results;
  for (const result of results) {
    const characters = result.characters;
    for (const character of characters) {
      if (character.endsWith('/18/')) {
	count = count + 1;
      }
    }
  }
  console.log(count);
});
