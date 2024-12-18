/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    let n  = prices.length
    let result = prices.slice();
    for(let i = 0; i<n;i++){
        for(let j = i+1;j<n;j++){
            if(prices[i]>=prices[j]){
                result[i] = prices[i]-prices[j]
                break
            }
        }
    }
    return result

};