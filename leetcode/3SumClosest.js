var threeSumClosest = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  console.log(JSON.stringify(nums));
  let closest = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      let sum = nums[left] + nums[i] + nums[right];
      if (sum === target) {
        return sum;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
      if (Math.abs(sum - target) < Math.abs(closest - target)) {
        closest = sum;
      }
    }
  }
  return closest;
};

let nums = [-1, 2, 1, -4],
  target = 1;
console.log(threeSumClosest(nums, target));
