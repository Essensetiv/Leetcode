var maxSumOfThreeSubarrays = function (nums, k) {
    const n = nums.length;

    // Step 1: Calculate sliding window sums
    const sums = Array(n - k + 1).fill(0);
    let windowSum = 0;
    for (let i = 0; i < n; i++) {
        windowSum += nums[i];
        if (i >= k - 1) {
            sums[i - k + 1] = windowSum;
            windowSum -= nums[i - k + 1];
        }
    }

    // Step 2: Precompute left max sums
    const left = Array(sums.length).fill(0);
    let leftMaxIndex = 0;
    for (let i = 0; i < sums.length; i++) {
        if (sums[i] > sums[leftMaxIndex]) {
            leftMaxIndex = i;
        }
        left[i] = leftMaxIndex;
    }

    // Step 3: Precompute right max sums
    const right = Array(sums.length).fill(0);
    let rightMaxIndex = sums.length - 1;
    for (let i = sums.length - 1; i >= 0; i--) {
        if (sums[i] >= sums[rightMaxIndex]) {
            rightMaxIndex = i;
        }
        right[i] = rightMaxIndex;
    }

    // Step 4: Find the max sum
    let maxSum = 0;
    const result = [];
    for (let mid = k; mid < sums.length - k; mid++) {
        const l = left[mid - k];
        const r = right[mid + k];
        const totalSum = sums[l] + sums[mid] + sums[r];
        if (totalSum > maxSum) {
            maxSum = totalSum;
            result[0] = l;
            result[1] = mid;
            result[2] = r;
        }
    }

    return result;
};