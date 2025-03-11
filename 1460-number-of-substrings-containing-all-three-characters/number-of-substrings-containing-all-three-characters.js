/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    let count = 0, left = 0;
    const countMap = { a: 0, b: 0, c: 0 }; 

    for (let right = 0; right < s.length; right++) {
        countMap[s[right]]++; 

    
        while (countMap.a > 0 && countMap.b > 0 && countMap.c > 0) {
            count += s.length - right;
            countMap[s[left]]--; 
            left++; 
        }
    }

    return count;
};