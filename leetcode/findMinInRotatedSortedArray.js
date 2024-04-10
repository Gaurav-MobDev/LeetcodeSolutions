var findMin = function(nums) {
    let left = 0
    let right = nums.length-1
    let min  = Infinity
    while(left<=right){
        if(nums[left] < min){
            min = nums[left]
        }
        if(nums[right] < min){
            min = nums[right]
        }
        left++
        right--
    }
    console.log(min)
    return min
};

let nums = [3,1,2]
findMin(nums)