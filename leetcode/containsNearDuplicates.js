var containsNearbyDuplicate = function(nums, k) {
    if(k === 0){
        return false
    }
    let result = false
    let left = 0
    let right = 1
    let pauseRight = false
    while(left < right && right < nums.length){
        if(nums[left] === nums[right]){
            result = true
            break
        }
        if(!pauseRight){
            right++
        }
        if(Math.abs(left-right) > k || right >= nums.length){
            pauseRight = true
            left++
        }
        if(left === right){
            pauseRight = false
        }
        
    }
    return result
};

let nums = [1,2,3,4,5,6,7,8,9,9], k = 3

console.log(containsNearbyDuplicate(nums, k))