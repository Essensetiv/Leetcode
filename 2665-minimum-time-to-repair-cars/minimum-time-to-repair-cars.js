var repairCars = function(ranks, cars) {
    let left = 1, right = Math.min(...ranks) * cars * cars, ans = right;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let totalCars = 0;

        for (let rank of ranks) {
            totalCars += Math.floor(Math.sqrt(mid / rank));
        }

        if (totalCars >= cars) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return ans;
};