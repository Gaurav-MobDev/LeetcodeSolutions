var subsetsII = function (nums) {
  let result = [];
  function recursion(currentArray, currentIndex) {
    result.push([...currentArray]);
    if (currentIndex === nums.length) {
      return;
    }
    for (let index = currentIndex; index < nums.length; index++) {
      if (
        index > currentIndex &&
        nums[currentIndex] === nums[currentIndex - 1]
      ) {
        continue;
      }
      currentArray.push(nums[index]);
      recursion(currentArray, index + 1);
      currentArray.pop();
    }
  }
  recursion([], 0);
  console.log(JSON.stringify(result));

  return result;
};
subsetsII([1, 2, 2]);
