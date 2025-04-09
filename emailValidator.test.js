const isValidEmail = require('./emailValidator');

test('', () => {// description -what we are teting
    expect(isValidEmail()).toBe(false);//actual logic of te test
});