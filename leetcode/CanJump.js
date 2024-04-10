var canJump = function (nums) {
    if (nums.length <= 1) {
        return true; 
    }

    let maxReach = nums[0]; 

    for (let i = 0; i < nums.length; i++) {
        if (i > maxReach) {
            return false; 
        }
        
        maxReach = Math.max(maxReach, i + nums[i]); 
        if (maxReach >= nums.length - 1) {
            return true; 
        }
    }

    return false; 
};

console.log(canJump([3,0,8,2,0,0,1]))
//[2,0,0]