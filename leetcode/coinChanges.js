var coinChange = function (coins, amount) {
  let dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
      console.log(JSON.stringify(dp))

  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};

let coins = [1,3,4,5],
  amount = 7;
coinChange(coins, amount);
