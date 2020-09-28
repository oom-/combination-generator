# combination-generator
Generate combination over iteration from defined string (useful for brute forcing)

### Easy to use
1. Import 
```js
let CombiGen = require('./combination-generator');
```

2. Create a new instance: 
```js
let alphabet = ['a', 'b', 'c'];
let combigen = new CombiGen(alphabet);
```

3. Get the next Combination
```js
let nextCombination = combigen.Next();
console.log(nextCombination); //{ combination: 'a', iterationNumber: 0, state: [0] }
```

### Optional parameters

* **state** : *Default: [-1]* The starting state, Example: [0,0] will result in `aa`
* **revertIteration** : *Default: false*, show the array in reverse mode.
Example: 
```js
Revert: { combination: 'a', iterationNumber: 0, state: [ 0 ] }
Revert: { combination: 'b', iterationNumber: 1, state: [ 1 ] }
Revert: { combination: 'c', iterationNumber: 2, state: [ 2 ] }
Revert: { combination: 'aa', iterationNumber: 3, state: [ 0, 0 ] }
Revert: { combination: 'ba', iterationNumber: 4, state: [ 1, 0 ] }
Revert: { combination: 'ca', iterationNumber: 5, state: [ 2, 0 ] }
Revert: { combination: 'ab', iterationNumber: 6, state: [ 0, 1 ] }
Revert: { combination: 'bb', iterationNumber: 7, state: [ 1, 1 ] }
Revert: { combination: 'cb', iterationNumber: 8, state: [ 2, 1 ] }
Revert: { combination: 'ac', iterationNumber: 9, state: [ 0, 2 ] }
```
* **minlen** : *Default: null*, If a minlen is defined then start with it.
Example if `minlen = 6`: 
```js
MinLen: {combination : 'aaaaaa', iterationNumber: 0, state: [ 0, 0, 0, 0, 0, 0]}
MinLen: {combination: 'aaaaab', iterationNumber: 1, state: [ 1, 0, 0, 0, 0, 0]}
MinLen: {combination: 'aaaaac', iterationNumber: 2, state: [ 2, 0, 0, 0, 0, 0]}
MinLen: {combination': 'aaaaad', iterationNumber: 3, state: [ 3, 0, 0, 0, 0, 0]}
MinLen: {combination': 'aaaaae', iterationNumber: 4, state: [ 4, 0, 0, 0, 0, 0]}
```
