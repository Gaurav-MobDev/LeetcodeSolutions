var maxSubArray = function(nums) {
    if (nums.length === 1) {
        return nums[0]
    }
    let sum = nums[0]
    let max = -Infinity
    for (let index = 1; index < nums.length; index++) {
        if (sum > max) {
            max = sum
        }
      if (sum < 0 && sum < nums[index]) {
            sum = nums[index]
        }else{
        sum += nums[index]

        }
      
        if (sum > max) {
            max = sum
        }
    }
    return max
};

let nums = [-2,1,-3,4,-1,2,1,-5,4]
maxSubArray(nums)