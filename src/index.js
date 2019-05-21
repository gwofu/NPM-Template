// use axios for http request.
// const axios = require('axios');

// Get environment variables
const name = process.env.NAME;

/**
 * @description Return a greeting message.
 * @example
 * const message = greeting();
 */
const greeting = () => `Hello ${name}!`;

/**
 * @description Add two numbers.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers.
 *
 * @example
 * const total = sum(3 + 4);
 */
function sum(a, b) {
  return a + b;
}

exports.greeting = greeting;
exports.sum = sum;

// This section is used only when you want to run your package through node command.
// Should be removed when development is done.
// eslint-disable-next-line no-console
console.log('End of program');
