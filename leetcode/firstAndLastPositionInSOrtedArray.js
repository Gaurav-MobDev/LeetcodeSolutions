var searchRange = function(nums, target) {
   
    let result = [-1, -1]
    function binarySearch(array, start, end){
        if(start > end){
            return
        }
        let mid = Math.floor((start+end)/2)
        let left, right;
        if(array[mid] === target){
            left = mid-1
            while(array[left] === target){
                left--
            }
            result[0] = left+1
            right = mid+1
            while(array[right] === target){
                    right++
            }
            result[1] = right-1
        }else if(array[mid] > target){
            binarySearch(array, start, mid-1)
        }else{
            binarySearch(array, mid+1, end)
        } 
    }
    binarySearch(nums, 0, nums.length-1)
    console.log(JSON.stringify(result))
};

let  nums = [], target = 0
searchRange(nums, target)