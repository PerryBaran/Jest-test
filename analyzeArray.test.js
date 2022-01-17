const analyzeArray = require('./analyzeArray');

test('gives average value', () => {
    expect(analyzeArray([1, 2, 3, 4, 5]).average).toBe(3);
    });

test('gives min value', () => {
    expect(analyzeArray([1, 2, 3, 4, 5]).min).toBe(1);
    });

test('gives max value', () => {
    expect(analyzeArray([1, 2, 3, 4, 5]).max).toBe(5);
    });

test('gives length', () => {
    expect(analyzeArray([1, 2, 3, 4, 5]).length).toBe(5);
    });

test('works with unordered array', () => {
    expect(analyzeArray([5, 1, 3, 4, 2]).average).toBe(3);
    });

test('average works with numbers as strings', () => {
    expect(analyzeArray(['1', '2', '3', '4', '5']).average).toBe(3);
    });

test('min works with numbers as strings', () => {
    expect(analyzeArray(['1', '2', '3', '4', '5']).min).toBe(1);
    });

test('max works with numbers as strings', () => {
    expect(analyzeArray(['1', '2', '3', '4', '5']).max).toBe(5);
    });

test('average fails with none number input', () => {
    expect(analyzeArray(['one', 'two', 'three', 'four', 'five']).average).toBe(NaN);
    });

test('min fails with none number input', () => {
    expect(analyzeArray(['one', 'two', 'three', 'four', 'five']).min).toBe(NaN);
    });

test('max fails with none number input', () => {
    expect(analyzeArray(['one', 'two', 'three', 'four', 'five']).max).toBe(NaN);
    });

