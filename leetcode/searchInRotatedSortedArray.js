var search = function (nums, target) {
  let isFound = -1;
  function divide(array, start, end) {
    if (start > end) {
      return;
    }
    let mid = Math.floor((start + end) / 2);
    if (target === array[mid]) {
      isFound = mid;
    }
    if (
      (array[mid] > array[end] &&
        target > array[mid] &&
        target >= array[end]) ||
      (target > array[mid] &&
        array[end] > array[mid] &&
        target <= array[end]) ||
      (array[mid] > array[end] && target <= array[end])
    ) {
      divide(array, mid + 1, end);
    } else {
      divide(array, start, mid - 1);
    }
  }

  divide(nums, 0, nums.length - 1);
  console.log(isFound);
};

let nums = [4, 5, 6, 7, 0, 1, 2],
  target = 0;
search(nums, target);
