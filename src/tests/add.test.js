const add = (a, b) => a + b;

test('should add two numbers', () => {
    const result = add(3, 7);
    expect(result).toBe(10);
});