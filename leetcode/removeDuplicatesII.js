// var removeDuplicates = function (nums) {
//   let count = 1;
//   let firstPointer = 0;
//   let secondPointer = 1;
//   let length = nums.length;
//   while (firstPointer < length && secondPointer < nums.length) {
//     if(nums[secondPointer] == '_'){
//         break;
//     }
//     if (nums[firstPointer] == nums[secondPointer]) {
//       count = count + 1;
//       if (count > 2) {
//         shiftArray(secondPointer, length, nums)
//       }else{
//         secondPointer=secondPointer+1
//       }
     
//     }else{
//         if(secondPointer-firstPointer > 1){
//             firstPointer=firstPointer+1
//            // secondPointer=secondPointer+1
//         }else{
//             firstPointer=firstPointer+1
//             secondPointer=secondPointer+1
//         }
//       count=1
//     }
//   }
//   let newLength=0
//   for (let index = 0; index < length; index++) {
//     if(nums[index] == '_'){
//         break;
//     }else{
//         newLength=newLength+1
//     }
//   }
//   console.log(nums, newLength);
//   return newLength
// };

// const shiftArray = (start, end, array) => {
//   for (let index = start; index < end-1; index++) {
//     array[index] = array[index+1]
//   }
//   array[end-1] = '_'
// };


//CHAT GPT code
var removeDuplicates = function(nums) {
    let count = 1;
    let length = nums.length;
    let newIndex = 1;

    for (let i = 1; i < length; i++) {
        if (nums[i] === nums[i - 1]) {
            count++;
        } else {
            count = 1;
        }

        if (count <= 2) {
            nums[newIndex++] = nums[i];
            console.log(newIndex)
        }
    }

    nums.length = newIndex; // Truncate the array to the new length
    console.log(nums, nums.length);
    return nums.length;
};

const numbers = [0, 0, 1, 1, 1, 1, 2, 3, 3];
removeDuplicates(numbers); // Output: [0, 0, 1, 1, 2, 3, 3], Length: 7

