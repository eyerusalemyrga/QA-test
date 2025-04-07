const{add, subtract,multiply,divide}=require('./math');
test('adds 2 + 3 to equal 5', () => {// description -what we are teting
    expect(add(2, 3)).toBe(5);//actual logic of te test
});
test('subtract 5 and 2 to equal 3', () => {// description -what we are teting
    expect(subtract(5, 2)).toBe(3);//actual logic of te test
});




test('divide 10 / 2 to equal 5', () => {// description -what we are teting
    expect(divide(10, 2)).toBe(5);//actual logic of te test
});
test('multiply 5*2 to equal 10', () => {// description -what we are teting
    expect(multiply(5, 2)).toBe(10);//actual logic of te test
});
