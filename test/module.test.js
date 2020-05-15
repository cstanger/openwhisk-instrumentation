const { main, config } = require('./../index.js');

function sum(param) {
  return param.a + param.b;
}

test('test proper wrapper call', async () => {
  expect(main(sum)({ a: 1, b: 2 })).resolves.toBe(3);
});

test('test error if function was not passed', () => {
  expect(() => main()({ a: 1, b: 2 })).toThrow('Inner Function is not defined');
});

test('test error if function was not passed', () => {
  expect(() => main()({ a: 1, b: 2 })).toThrow('Inner Function is not defined');
});

let outputData = '';
storeLog = (inputs) => (outputData += inputs + ' ');
test('Test logged Metric for INPUT', async () => {
  console['log'] = jest.fn(storeLog);
  await main(sum)({ a: 1, b: 2 });
  console.log(outputData);
  expect(outputData).toMatch(/214e9967a58b9eb94f4348d001233ab1b8b67a17/);
});
