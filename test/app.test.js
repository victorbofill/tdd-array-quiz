const assert = require('assert');
const app = require('../lib/app');

const testArray = [1, 4, 5, 7];
const testArray2 = [9, 4, 1, 10];

describe('Testing squaresTest function', () => {
    it('Test 1', () => {
        const results = app.squaresTest(testArray);

        assert.deepEqual(results, [25, 49]);
    });    

    it('Test 2', () => {
        const results = app.squaresTest(testArray2);

        assert.deepEqual(results, [81, 100]);
    });    
});