var summaryRanges = function (nums) {
  let index = 1;
  let ranges = [`${nums[0]}`];
  let span = 0;
  while (index < nums.length) {
    if (nums[index] - nums[index - 1] > 1) {
        if(ranges[ranges.length - 1] !== `${nums[index - 1]}`){
            ranges[ranges.length - 1] += `->${nums[index - 1]}`;
        }
        ranges.push(`${nums[index]}`)
    }
    if(index === nums.length-1 && nums[index] - nums[index - 1] === 1){
        ranges[ranges.length - 1] += `->${nums[index]}`;
    }
    index++;
  }

  console.log(JSON.stringify(ranges));
};
let nums = [0,1,2,4,5,7,9,10,12,14,15,16,27,28]
summaryRanges(nums);
