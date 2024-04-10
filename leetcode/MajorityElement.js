var majorityElement = function (nums) {
  let countMap = {};

  for (let index = 0; index < nums.length; index++) {
    if (countMap[`${nums[index]}`]) {
      countMap[`${nums[index]}`] = countMap[`${nums[index]}`] + 1;
    } else {
      countMap[`${nums[index]}`] = 1;
    }
  }

  for (let [key, value] of Object.entries(countMap)) {
    if (value > nums.length / 2) {
      return key;
    }
  }
};
let majority = majorityElement([3, 2, 3]);
console.log(majority);
