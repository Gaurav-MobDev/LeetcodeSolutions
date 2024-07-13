function partitionEqualSubSum(array) {
    let dp = [];
    for (let index = 0; index <= n; index++) {
      dp[index] = [];
      for (let subindex = 0; subindex <= sum; subindex++) {
        dp[index][subindex] = -1;
      }
    }
    let count = 0;
    function find(index, currSum) {
      count = count + 1;
      if (dp[index][currSum] !== -1) {
        return dp[index][currSum];
      }
      if (index >= n) {
        return currSum;
      }
      currSum = currSum + arr[index];
      let include = find(index + 1, currSum);
      currSum = currSum - arr[index];
      let exclude = find(index + 1, currSum);
      dp[index][currSum] = include === exclude;
      return dp[index][currSum];
    }
    return find(0, 0)
  
   
}

 console.log(partitionEqualSubSum([2, 3, 3, 4, 5]));
