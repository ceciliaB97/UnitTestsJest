const sum = require('./sum');

beforeAll(() => {
  sum = new sum();
});

afterAll(() => {
  sum = new sum();
});

beforeEach(() => {
  console.log("beforeEach: result is " + sum.result);
});

afterEach(() => {
  console.log("afterEach: result is " + sum.result);
});

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('substracts 2 - 1 to equal 1', () => {
  expect(substract(1, 2)).toBe(1);
});

test('multiplies 1 * 2 to equal 1', () => {
  expect(mult(2)).toBe(2);
});