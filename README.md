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

* **startIteration** : *Default: 0*,  Allow you to start from a specifiec iteration number, ex: 12 would give `{ combination: 'aaa', iterationNumber: 12, state: [ 0, 0, 0 ] }` as first item from `Next()`
* **revertIteration** : *Default: false*, show the array in reverse mode.
Example: 
```json
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

