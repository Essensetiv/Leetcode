/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
var minOperations = function(grid, x) {
    let values = [];
    
    for (let row of grid) {
        for (let val of row) {
            values.push(val);
        }
    }

    values.sort((a, b) => a - b);

    for (let val of values) {
        if (Math.abs(val - values[0]) % x !== 0) {
            return -1;
        }
    }

    let median = values[Math.floor(values.length / 2)];
    let operations = 0;

    for (let val of values) {
        operations += Math.abs(val - median) / x;
    }

    return operations;
};