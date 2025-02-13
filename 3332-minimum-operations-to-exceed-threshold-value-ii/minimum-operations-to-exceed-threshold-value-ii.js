/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
       let minHeap = new MinPriorityQueue({ priority: x => x });

    for (let num of nums) {
        minHeap.enqueue(num);
    }

    let ans = 0;
    while (minHeap.size() > 1 && minHeap.front().element < k) {
        let num1 = minHeap.dequeue().element;
        let num2 = minHeap.dequeue().element;
        let combined = num1 * 2 + num2;
        minHeap.enqueue(combined);
        ans++;
    }

    return ans;
};