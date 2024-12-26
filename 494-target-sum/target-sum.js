/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const computeSums = (nums, start, end) => {
        const sums = [0];
        for (let i = start; i < end; i++) {
            const num = nums[i];
            const n = sums.length;
            for (let j = 0; j < n; j++) {
                sums.push(sums[j] + num);
                sums[j] -= num;
            }
        }
        return sums;
    };

    const n = nums.length, mid = Math.floor(n / 2);
    const sums1 = computeSums(nums, 0, mid);
    const sums2 = computeSums(nums, mid, n);
    const countMap = new Map();

    for (const sum of sums2) {
        countMap.set(sum, (countMap.get(sum) || 0) + 1);
    }

    let total = 0;
    for (const sum of sums1) {
        const complement = target - sum;
        if (countMap.has(complement)) {
            total += countMap.get(complement);
        }
    }

    return total;
};