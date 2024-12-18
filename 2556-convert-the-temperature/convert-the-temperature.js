/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    let kelvin = celsius + 273.15
    let  fahrenheit  = celsius * 1.80 + 32.00
    let ans = new Array(kelvin,fahrenheit)
    return ans
};