var jump = function (nums) {
  const n = nums.length;
  if (n <= 1) {
    return 0;
  }
  let jumps = 1;
  let currMaxReach = nums[0];
  let nextMaxReach = nums[0];

  for (let i = 1; i < n; i++) {
    if (i > currMaxReach) {
      jumps++;
      currMaxReach = nextMaxReach;
    }
    nextMaxReach = Math.max(nextMaxReach, i + nums[i]);
  }
  return jumps;
};
console.log(jump([1,1,1,1]));
//[2,3,1,1,4]
//3
