const reverseString = require('./reverseString');

test('reverses word', () => {
    expect(reverseString('bigboi')).toBe('iobgib');
    });

test('works with spaces and other characters', () => {
    expect(reverseString('big boi!')).toBe('!iob gib');
    });