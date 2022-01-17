const capitalizeFirst = require('./capitalize');

test('only first letter capitalized', () => {
    expect(capitalizeFirst('bigboi')).toBe('Bigboi');
    });

test('letters other than first are all made lowercase', () => {
    expect(capitalizeFirst('BIGBOI')).toBe('Bigboi');
    });

test('works with spaces and other weird characters', () => {
    expect(capitalizeFirst('big boi!')).toBe('Big boi!');
    });