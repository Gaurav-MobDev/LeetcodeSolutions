var fourSum = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  console.log(JSON.stringify(nums));
  let result = [];
  for (let i = 0; i < nums.length - 3; i++) {
    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      let sum = nums[left] + nums[i] + nums[right] + nums[left + 1];
      if(result.length > 0 && nums[i] === result[0][0] && nums[left] === result[0][1] && nums[left+1] === result[0][2] && nums[right] === result[0][3]){
        left++;
      }else  if (sum === target) {
        result.push([nums[i], nums[left], nums[left + 1], nums[right]]);
        left++;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
};

let nums = [2,2,2,2,2],
  target = 8;
console.log(JSON.stringify(fourSum(nums, target)));
