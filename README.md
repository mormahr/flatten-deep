# flatten-deep

[![npm version](https://badge.fury.io/js/flatten-deep.svg)](https://badge.fury.io/js/flatten-deep)
[![Build Status](https://travis-ci.org/mormahr/flatten-deep.svg?branch=master)](https://travis-ci.org/mormahr/flatten-deep)

* Deep flatten arrays in JavaScript
* Non-recursive algorithm.
* Fast (see Benchmarks)
* Linear or constant memory usage

## Usage

```shell
$ npm install --save flatten-deep
```

```javascript
var flattenDeep = require("flatten-deep");

console.log(flattenDeep([1, [2, [3, [4, 5], 6]]]))
// => [ 1, 2, 3, 4, 5, 6 ]
```

