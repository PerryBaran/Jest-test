const calc = require('./calculator');

test('1 + 2 equals 3', () => {
  expect(calc(1, '+' ,2)).toBe(3);
  });

test('1 - 2 to equal -1', () => {
  expect(calc(1, '-' ,2)).toBe(-1);
  });

test('1 / 2 to equal 0.5', () => {
  expect(calc(1, '/' ,2)).toBe(0.5);
  });

test('1 x 2 to equal 2', () => {
  expect(calc(1, 'x' ,2)).toBe(2);
  });

test('works if values are strings', () => {
  expect(calc('1', '+', '2')).toBe(3);
  })

test('returns error if values are NaN', () => {
  expect(calc('one', '+', 2)).toBe('both values must be numbers');
  })


test('returns error if operator incorrect operator is given', () => {
  expect(calc(1, 'plus', 2)).toBe('operator not defined');
  })