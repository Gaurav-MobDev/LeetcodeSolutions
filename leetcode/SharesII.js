var maxProfit = function (prices) {
    let profit = 0
  for (let index = 0; index < prices.length; index++) {
    if(prices[index+1] > prices[index]){
        profit = profit + (prices[index+1] - prices[index])
    }
  }
  return profit
};
console.log(maxProfit([7,6,4,3,1]))