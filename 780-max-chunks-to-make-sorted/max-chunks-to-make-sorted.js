/** 
 * @param {number[]} arr 
 * @return {number} 
 */ 
var maxChunksToSorted = function(arr) { 
    let n = arr.length; 
    let prefixMax = [...arr] 
    let suffixMin = [...arr] 
 
    
    for (let i = 1; i < n; i++) { 
        prefixMax[i] = Math.max(prefixMax[i - 1], prefixMax[i]) 
    } 
 
     
    for (let i = n - 2; i >= 0; i--) { 
        suffixMin[i] = Math.min(suffixMin[i], suffixMin[i + 1]) 
    } 
 
    let chunks = 0; 
    for (let i = 0; i < n; i++) { 
        if (i === n - 1 || suffixMin[i + 1] >= prefixMax[i]) { 
            chunks++ 
        } 
    } 
 
    return chunks 
};