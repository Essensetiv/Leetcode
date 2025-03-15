/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCapability = function(nums, k) {
    let left = Math.min(...nums), right = Math.max(...nums);

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (canRob(nums, k, mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};

function canRob(nums, k, capability) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= capability) {
            count++;
            i++; // Skip next house
        }
        if (count >= k) return true;
    }
    return false;
}