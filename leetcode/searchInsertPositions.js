var searchInsert = function (nums, target) {
  let size = nums.length;
  const recursiveSearch = (start, end) =>{
    const mid = Math.floor((start + end) / 2);
    if (end < start) {
      return start
    }
    if (nums[mid] === target) {
      return mid;
    } else if (target < nums[mid]) {
     return recursiveSearch(start, mid - 1);
    } else {
     return  recursiveSearch(mid + 1, end);
    }
  }
  console.log(recursiveSearch(0, size - 1));
  //return position;
};

let nums = [1,3,4,5,6]
  target = 3;

searchInsert(nums, target);
