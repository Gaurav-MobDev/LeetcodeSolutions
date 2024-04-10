var removeDuplicates = function (nums) {
  let i = 0;
  let j = 1;
  let count = 0;
  let length = nums.length;
  while (i < length && j < length) {
   
      if (nums[i] === nums[j]) {
        nums[j] = "_";
        j = j + 1;
        count = count + 1;
      } else {
        i = i + 1;
        if (nums[i] === "_") {
          nums[i] = nums[j];
        }else{
            j=j+1
        }
      
      }
  }
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === "_") {
      nums.splice(index, 1);
      index = index - 1;
    }
  }
  return nums;
};

console.log(JSON.stringify(removeDuplicates([0, 1, 1,2, 3, 4])));
