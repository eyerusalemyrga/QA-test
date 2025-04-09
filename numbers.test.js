const isEven = require('./numbers');

test('even', () => {// description -what we are teting
    expect(isEven(5)).toBe(false);//actual logic of te test
});