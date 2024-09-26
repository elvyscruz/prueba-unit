// sum.test.js
const sum = require('./sum');

test('verifica que 2 + 2 son 4', () => {
  expect(sum(2, 2)).toBe(4);
});
