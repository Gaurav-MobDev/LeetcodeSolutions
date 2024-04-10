var lengthOfLIS = function (nums) {
    let dp = Array(nums.length).fill(1)
    console.log(JSON.stringify(dp))
    for(let index = 1 ;index < nums.length ; index++){
        for(let subindex = 0 ;subindex < index ; subindex++){
            if(nums[subindex] < nums[index]){
                dp[index] = Math.max(dp[index], 1+dp[subindex])
            }
        }
    }
    console.log(Math.max(...dp))
};

let nums = [0,1,0,3,2,3]
lengthOfLIS(nums)