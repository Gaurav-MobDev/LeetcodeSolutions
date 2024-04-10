var removeElement = function (nums, val) {
  let count = 0;
  let i = 0;
  let j = 0;
  let index = 0;
  while (index < nums.length) {
    if (nums[index] == val) {
        j = index;
        count=count+1
        while (nums[j] == val) {
            j=j+1
        }
        nums[index] = nums[j]
        i=j
        while (i < nums.length) {
            //if(nums[i+1]){
                nums[i] = nums[i+1]
           // }
           if(nums[i] === undefined){
            nums[i] = '_'
            }
            i=i+1
        }
    }
    index = index + 1;
  }
  console.log(nums, nums.length-count);
};
removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
