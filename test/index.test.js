'use strict';

const TestTable = require('../src');

test('TestTable constructor empty', () => {
  let test= new TestTable();
  expect(test.data.length).toBe(0);
});

test('TestTable constructor', () => {
  const testData = [
    {input: 'foo', expected: 1},
    {input: 'bar', expected: 2},
  ];
  let test= new TestTable(testData);
  expect(test.data.length).toBe(2);
  expect(test.data[0].input).toBe('foo');
  expect(test.data[0].expected).toBe(1);
  expect(test.data[1].input).toBe('bar');
  expect(test.data[1].expected).toBe(2);
});

test('TestTable run', () => {
  const testData = [
    {input: 'foo', expected: 1},
    {input: 'bar', expected: 2},
  ];
  let test= new TestTable(testData);
  test.run((index, data) => {
    expect(data.input).toBe(testData[index].input);
    expect(data.expected).toBe(testData[index].expected);
  });
});

test('TestTable run with skip', () => {
  const testData = [
    {input: 'foo', expected: 1, skip: true},
    {input: 'bar', expected: 2},
  ];
  let test= new TestTable(testData);
  test.run((index, data) => {
    expect(index).toBe(1);
    expect(data.input).toBe('bar');
    expect(data.expected).toBe(2);
  });
});

test('TestTable run with only', () => {
  const testData = [
    {input: 'foo', expected: 1, only: true},
    {input: 'bar', expected: 2},
  ];
  let test= new TestTable(testData);
  test.run((index, data) => {
    expect(index).toBe(0);
    expect(data.input).toBe('foo');
    expect(data.expected).toBe(1);
  });
});
