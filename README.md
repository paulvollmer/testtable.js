# testtable.js
Module to write data driven tests.


## Installation

```
npm install --save-dev @paulvollmer/testtable
```

or if you prefer yarn, run

```
yarn add --dev @paulvollmer/testtable
```


## Usage

```js
const TestTable = require('testtable');

describe('Sample test', () => {

  // create an array with input and expected data
  const testData = [
    { input: 'hello foo', expected: 'hello world', skip: true },
    { input: 'hello bar', expected: 'hello world' },
  ];

  // run all tests defined at the testData array
  new TestTable(testData).run((index, data) => {
    test(`${index} should ...`, () => {
      expect(index).toBe(1);
      expect(data.input).toBe('hello bar');
      expect(data.expected).toBe('hello world');
    })
  });

});
```

## Test data

Sample test data object
```
{
  input: 'hello foo',
  expected: 'hello bar',
  only: true
}
```

#### input
The `input` property can be used to define the test data.

#### expected
The `expected` property set the data used to write code to check if x expect to be equal to y

#### only
The `only` property can be used to only run a specific item from the test data

#### skip
The `skip` property can be used to skip the execution of a test item
