const cipher = require('./caesarCipher');

test('offset works with single characters', () => {
  expect(cipher('a', 3)).toBe('d');
    });

test('offset works with negative numbers', () => {
    expect(cipher('d', -3)).toBe('a');
    });

test('offset wraps', () => {
    expect(cipher('z', 3)).toBe('c');
    });

test('offset wraps with negative offset', () => {
    expect(cipher('c', -3)).toBe('z');
    });

test('works with high offsets', () => {
    expect(cipher('a', 200)).toBe('s');
    });

test('works with very negative offsets', () => {
    expect(cipher('a', -200)).toBe('i');
    });

test('offsets longer words', () => {
    expect(cipher('abcdef', 3)).toBe('defghi');
    });

test('ignores spaces and special characters', () => {
    expect(cipher('abc def!', 3)).toBe('def ghi!');
    });
