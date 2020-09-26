class CombinationGenerator {
    /**
     * 
     * @param {string} alphabet Array of different char, string that will be used 
     */
    constructor(alphabet, startIteration = 0, revertIteration = false) {
        this.alphabet = alphabet;
        this.alphabetLen = alphabet.length
        this.currentIteration = -1;
        this.revertIteration = revertIteration;
        this.state = [-1];
        for (var i = 0; i < startIteration; i++)
            this.Next();
    }

    /**
     * Add 1 to the current state
     */
    NextState() {
        let keepOne = false;

        this.state[0]++;
        for (var i = 0; i < this.state.length; i++) {
            if (keepOne) {
                this.state[i]++;
                keepOne = false;
            }
            if (this.state[i] != 0 && this.state[i] % this.alphabetLen == 0) {
                keepOne = true;
                this.state[i] = 0;
            }
        }
        if (keepOne)
            this.state.push(0);
    }

    /**
     * Convert the state [0, 0] to 'aa'
     */
    ConvertStateIntoCombination() {
        let combination = '';
        let statecpy = this.state;

        if (!this.revertIteration)
            statecpy = [...this.state].reverse();
        for (var i = 0; i < statecpy.length; i++) {
            combination += this.alphabet[statecpy[i]];
        }
        return combination;
    }

    /**
     * Get the Next iteration, a, b, c, aa, ab, ac, ba, bb, bc, ca, cb, cc etc...
     */
    Next() {
        let res = { combination: '', iterationNumber: this.currentIteration, state: this.state };

        res.iterationNumber = ++this.currentIteration;
        this.NextState();
        res.combination = this.ConvertStateIntoCombination();
        return res;
    }
}

module.exports = CombinationGenerator;
