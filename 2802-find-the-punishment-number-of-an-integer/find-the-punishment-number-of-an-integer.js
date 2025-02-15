/**
 * @param {number} n
 * @return {number}
 */
function punishmentNumber(n) {
    function canPartition(num, target, start) {
        if (target === 0 && start === num.length) return true;
        if (start >= num.length) return false;
        
        let sum = 0;
        for (let i = start; i < num.length; i++) {
            sum = sum * 10 + parseInt(num[i], 10);
            if (sum > target) break;
            if (canPartition(num, target - sum, i + 1)) return true;
        }
        
        return false;
    }
    
    let totalSum = 0;
    for (let i = 1; i <= n; i++) {
        let squareStr = (i * i).toString();
        if (canPartition(squareStr, i, 0)) {
            totalSum += i * i;
        }
    }
    
    return totalSum;
}