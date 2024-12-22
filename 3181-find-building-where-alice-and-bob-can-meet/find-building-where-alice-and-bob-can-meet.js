/**
 * @param {number[]} heights
 * @param {number[][]} queries
 * @return {number[]}
 */
var leftmostBuildingQueries = function(heights, queries) {
    const n = heights.length;
    const queryCount = queries.length;

    // Initialize the result array with -1 (default for no meeting place)
    const result = Array(queryCount).fill(-1);

    // Queue to hold deferred queries grouped by the larger index
    const deferredQueries = Array(n).fill().map(() => []);

    
    const priorityQueue = new MinPriorityQueue();

   
    queries.forEach(([aliceStart, bobStart], queryIndex) => {
        if (aliceStart === bobStart) {
            
            result[queryIndex] = aliceStart;
        } else if (aliceStart < bobStart && heights[aliceStart] < heights[bobStart]) {
           
            result[queryIndex] = bobStart;
        } else if (aliceStart > bobStart && heights[aliceStart] > heights[bobStart]) {
           
            result[queryIndex] = aliceStart;
        } else {
            
            const maxHeight = Math.max(heights[aliceStart], heights[bobStart]);
            const maxIndex = Math.max(aliceStart, bobStart);
            deferredQueries[maxIndex].push([maxHeight, queryIndex]);
        }
    });

    for (let currentBuilding = 0; currentBuilding < n; ++currentBuilding) {
        
        while (!priorityQueue.isEmpty() && priorityQueue.front().element[0] < heights[currentBuilding]) {
            const { element } = priorityQueue.dequeue();
            result[element[1]] = currentBuilding; 
        }

       
        deferredQueries[currentBuilding].forEach(query =>
            priorityQueue.enqueue(query, query[0])
        );
    }

    return result;
};