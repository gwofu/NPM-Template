require('dotenv').config();
const myPackage = require('../src/index');

test('greeting with hello world', () => {
  const str = myPackage.greeting();
  // debugger;
  expect(str).toBe('Hello world!');
  expect(str).toHaveLength(12);
  expect({}).not.toHaveProperty('flavors');
});

test('adds 1 + 2 to equal 3', () => {
  expect(myPackage.sum(1, 2)).toBe(3);
});
