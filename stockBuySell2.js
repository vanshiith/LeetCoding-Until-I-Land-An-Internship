/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profitMax = 0
    for(let i = 0; i<prices.length; i++){
        if(prices[i-1]<prices[i]){
            profitMax += (prices[i] - prices[i-1])
        }
    }
    return profitMax;
};

