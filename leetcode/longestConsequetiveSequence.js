var longestConsecutive = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  const numSet = new Set(nums);
  let maxLength = 1;
  console.table(numSet);
  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentLength = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentLength++;
      }

      maxLength = Math.max(maxLength, currentLength);
    }
  }

  return maxLength;
};

// Example usage:
const nums = [100, 4, 200, 1, 3, 2];
const result = longestConsecutive(nums);
console.log(result); // Output: 4
