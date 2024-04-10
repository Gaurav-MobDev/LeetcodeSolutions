var rob = function (nums) {
  let max = 0;
  function dp(index, sum, prev) {
    sum = sum + nums[index];
    if (index >= nums.length) {
      return;
    }

    if (sum > max) {
      max = sum;
    }
    for (let subindex = index + 2; subindex < nums.length; subindex++) {
      if (sum + nums[subindex] > sum + prev) {
        prev = nums[subindex];
        dp(subindex, sum, prev);
      }
    }
  }
  for (let index = 0; index < nums.length; index++) {
    dp(index, 0, 0);
  }
  return max;
};

let nums = [
  114, 117, 207, 117, 235, 82, 90, 67, 143, 146, 53, 108, 200, 91, 80, 223, 58,
  170, 110, 236, 81, 90, 222, 160, 165, 195, 187, 199, 114, 235, 197, 187, 69,
  129, 64, 214, 228, 78, 188, 67, 205, 94, 205, 169, 241, 202, 144, 240,
];
console.log(rob(nums));
