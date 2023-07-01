/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    for(let i = 0; i<prices.length - 1; i++){
        for(let j = i + 1; j<prices.length; j++){
            if(prices[j] - prices[i] > profit){
                profit = prices[j] - prices[i]
            }
        }
    }
    return profit;
} //O(n^2)

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = 0;
    let sell = 1;
    let profitMax = 0;

    while(sell<prices.length){
        if(prices[sell] - prices[buy] > 0){
            profitMax = Math.max(prices[sell] - prices[buy], profitMax)
        } else{
            buy = sell
        }
        sell++
        
    }
    return profitMax
}; //O(n)     