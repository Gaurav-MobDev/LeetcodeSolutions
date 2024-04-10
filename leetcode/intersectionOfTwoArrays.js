var intersection = function (nums1, nums2) {
    let result = []
    let index2Start = 0
    for (let index1 = 0; index1 < nums1.length; index1++) {
        for (let index2 = index2Start; index2 < nums2.length; index2++) {
            if (nums1[index1] === nums2[index2] && result.length === 0) {
                result.push(nums1[index1])
                index2Start = index2+1
                break;
            } else if (nums1[index1] === nums2[index2] && result.length > 0 && nums1[index1 - 1] === nums2[index2 - 1]) {
                result.push(nums1[index1])
                  index2Start = index2+1
                 break;
            }
        }
    }
    return result
};
let nums1 = [1,2,2,1], nums2 = [2,2]

console.log(intersection(nums1, nums2))