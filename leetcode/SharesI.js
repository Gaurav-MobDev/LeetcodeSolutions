var maxProfit = function (prices) {
    let minPrice = prices[0];
  let maxProfitValue = 0
  let currentProfit = 0
  for (let index = 1; index < prices.length; index++) {
   if(prices[index]< minPrice){
    minPrice = prices[index]
   }else{
    currentProfit = prices[index]-minPrice
    if(currentProfit>maxProfitValue){
        maxProfitValue = currentProfit
    }
   }
}
  return maxProfitValue;
};
let maxProfitValue = maxProfit([2,7,8,1,20]);
console.log(maxProfitValue);
