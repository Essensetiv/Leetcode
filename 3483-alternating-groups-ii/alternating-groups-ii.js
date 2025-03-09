/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
var numberOfAlternatingGroups = function(colors, k) {
    let count = 0;
    let left = 0;
    
    for (let right = 0; right < colors.length + k - 1; right++) {
        const currentColor = colors[right % colors.length];
        const prevColor = colors[(right - 1) % colors.length];
        
        if (right > 0 && currentColor === prevColor) {
            left = right;  
        }
        
        if (right - left + 1 >= k) {
            count++;  
        }
    }
    
    return count;
};