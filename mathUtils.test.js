const mathUtils = require('./mathUtils');

test('adds numbers correctly', () => {
    expect(mathUtils.add(2, 3)).toBe(5);
});

test('handles zero correctly', () => {
    expect(mathUtils.add(0, 5)).toBe(5);
});

test('handles negative numbers correctly', () => {
    expect(mathUtils.add(-2, 3)).toBe(1);
});
