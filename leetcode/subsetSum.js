// function isSubsetSum(arr, n, sum) {
//   let dp = [];
//   for (let index = 0; index <= n; index++) {
//     dp[index] = [];
//     for (let subindex = 0; subindex <= sum; subindex++) {
//       dp[index][subindex] = -1;
//     }
//   }
//   let count = 0;
//   function find(index, currSum) {
//     count = count + 1;
//     if (dp[index][currSum] !== -1) {
//       return dp[index][currSum];
//     }
//     if (currSum === sum) {
//       return true;
//     }
//     if (index >= n || currSum > sum) {
//       return false;
//     }
//     currSum = currSum + arr[index];
//     let include = find(index + 1, currSum);
//     currSum = currSum - arr[index];
//     let exclude = find(index + 1, currSum);
//     dp[index][currSum] = include || exclude;
//     return dp[index][currSum];
//   }

//   console.log(find(0, 0));
//   console.log(count);
// }


var subsetsSum = function(nums) {
  let result = [];
  let sums = []
function recursion(currentArray, currentIndex, sum) {
 result.push([...currentArray]);
 sums.push(sum)
 if (currentIndex === nums.length) {
   return;
 }
 for (let index = currentIndex; index < nums.length; index++) {
   currentArray.push(nums[index]);
   sum = sum + nums[index]
   recursion(currentArray, index + 1, sum);
   sum = sum - nums[index]
   currentArray.pop()
 }
}
 recursion([], 0, 0 );
console.log(JSON.stringify(result))
console.log(JSON.stringify(sums))
return result
};
subsetsSum([2,5,8,11,13]);
