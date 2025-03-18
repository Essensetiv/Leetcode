/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function(nums) {
    let l = 0, usedBits = 0, maxLength = 0;

    for (let r = 0; r < nums.length; r++) {
        while ((usedBits & nums[r]) !== 0) {
            usedBits ^= nums[l];
            l++;
        }

        usedBits |= nums[r];
        maxLength = Math.max(maxLength, r - l + 1);
    }

    return maxLength;
};