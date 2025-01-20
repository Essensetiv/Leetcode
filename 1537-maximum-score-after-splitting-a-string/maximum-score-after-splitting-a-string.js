/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let totalOnes = 0, zerosCount = 0, onesCount = 0, bestScore = -Infinity;

    // Count total number of ones
    for (const char of s) {
        if (char === '1') totalOnes++;
    }

    // Traverse the string and calculate scores
    for (let i = 0; i < s.length - 1; i++) { // Stop before the last character
        if (s[i] === '0') zerosCount++;
        else onesCount++;

        // Calculate score
        const currentScore = zerosCount + (totalOnes - onesCount);
        bestScore = Math.max(bestScore, currentScore);
    }

    return bestScore;
};