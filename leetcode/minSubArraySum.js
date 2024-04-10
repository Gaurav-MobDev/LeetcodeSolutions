var minSubArrayLen = function (target, nums) {
  nums.sort((a, b) => a - b);
  console.log(nums)
  let result = [];
  let sum = 0
  let ptr;
  if(target === nums[parseInt([nums.length]/2)]){
    sum = target
    result.push(nums[parseInt([nums.length]/2)])
  }else if(target > nums[parseInt([nums.length]/2)]){
    ptr = nums.length - 1;
  }
  while (ptr >=0) {
    sum += nums[ptr]
    if(sum === target){
        result.push(nums[ptr])
        break
    }else if(sum < target){
        result.push(nums[ptr])
    }else{
        sum -= nums[ptr]
    }
    ptr--
  }
  if(sum === target){
    console.log(JSON.stringify(result), result.length)
    return result.length
  }else{
    console.log(0)
    return 0
  }
  
};
let target = 20, nums = [2,16,14,15]
minSubArrayLen(target, nums)
//[2,14,15,16]