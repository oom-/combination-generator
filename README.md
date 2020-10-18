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
* **minlen** : *Default: null*, If a minlen is defined then start with it.
Example if `minlen = 6`: 
```js
MinLen: {combination : 'aaaaaa', iterationNumber: 0, state: [ 0, 0, 0, 0, 0, 0]}
MinLen: {combination: 'aaaaab', iterationNumber: 1, state: [ 1, 0, 0, 0, 0, 0]}
MinLen: {combination: 'aaaaac', iterationNumber: 2, state: [ 2, 0, 0, 0, 0, 0]}
MinLen: {combination': 'aaaaad', iterationNumber: 3, state: [ 3, 0, 0, 0, 0, 0]}
MinLen: {combination': 'aaaaae', iterationNumber: 4, state: [ 4, 0, 0, 0, 0, 0]}
```
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
### Example (simple-iteration): 
```js
const stateFile = './state.json'; //a state file to not lost the previous iteration

function loadpreviousState()
{
    if (FS.existsSync(stateFile))
        return JSON.parse(FS.readFileSync(stateFile));
    return null;
}

function saveActualState(state)
{
    FS.writeFileSync(stateFile, JSON.stringify(state));
}

//main
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm','n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x','y', 'z'];
alphabet = [...alphabet, ...alphabet.map(d => d.toUpperCase())];
alphabet = [...alphabet, ...['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']]
    
let previousState = loadpreviousState();
let combigen = new CombiGen(alphabet, previousState != null ? previousState : [-1], 6, false);

while (true)
  {
      let combi = combigen.Next();
      //perform task ...
      saveActualState(combi);
  }
```

### Example (random-iteration): 
```js
const alreadycheckfile = './alreadycheck.json'; //a already checked file

function loadAlreadyChecked() {
    if (FS.existsSync(alreadycheckfile))
        return JSON.parse(FS.readFileSync(alreadycheckfile));
    return null;
}

function saveAlreadyChecked(alreadycheck) {
    FS.writeFileSync(alreadycheckfile, JSON.stringify(alreadycheck));
}

function random(min, max) { //min max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//main
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
alphabet = [...alphabet, ...alphabet.map(d => d.toUpperCase())];
alphabet = [...alphabet, ...['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']]

let alreadyChecked = loadAlreadyChecked();
alreadyChecked = alreadyChecked != null ? alreadyChecked : [];
let combigen = new CombiGen(alphabet);
while (true) {
    let state = [0, 0, 0, 0, 0, 0, 0].map(start => random(start, alphabet.length - 1)); //as much 0 than char in key
    let combination = combigen.ConvertStateIntoCombination(state);
    if (alreadyChecked.indexOf(combination) == -1) {
        console.log(combination);
        alreadyChecked.push(combination);
        saveAlreadyChecked(alreadyChecked);
    }
    else
        console.log('Already checked: ' + combination)
}
```
