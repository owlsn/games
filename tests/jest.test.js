var jest = require('../lib/jest')

test('test jest.test_function to equal 123', () => {
    expect(jest.test_function()).toEqual(123);
});