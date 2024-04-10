var findMedianSortedArrays = function (nums1, nums2) {
  let nums1Length = nums1.length;
  let nums2Length = nums2.length;
  let median1;
  let median2;
  if(nums1Length === 0){
    median1 = 0
  }else if (nums1Length % 2 == 0) {
    let mid = Math.floor(nums1Length / 2);
    median1 = parseFloat((nums1[mid] + nums1[mid - 1]) / 2);
  } else if (nums1Length % 2 !== 0) {
    let mid = Math.floor(nums1Length / 2);
    median1 = nums1[mid];
  }

  if(nums2Length === 0){
    median2 = 0
  }else if (nums2Length % 2 == 0) {
    let mid = Math.floor(nums2Length / 2);
    median2 = parseFloat((nums2[mid] + nums2[mid - 1]) / 2);
  } else if (nums2Length % 2 !== 0) {
    let mid = Math.floor(nums2Length / 2);
    median2 = nums2[mid];
  }

  let divisor = nums1Length > 0 && nums2Length > 0 ? 2 :nums1Length === 0 && nums2Length > 0 ? 1 : 1
  let median = parseFloat((median1+median2)/divisor)

  console.log(median)
  return median
};

let nums1 = [1,2], nums2 = [3,4]
findMedianSortedArrays(nums1, nums2)