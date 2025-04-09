const fizzBuzz = require('./fizzbuzz')


test("", () => {// description -what we are teting
    expect(fizzBuzz(60)).toBe('FizzBuzz');//actual logic of te test
});
test("", () => {// description -what we are teting
    expect(fizzBuzz(12)).toBe('Fizz');//actual logic of te test
});
test("", () => {// description -what we are teting
    expect(fizzBuzz(20)).toBe('Buzz');//actual logic of te test
});