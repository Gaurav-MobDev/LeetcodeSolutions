var subsets = function(nums) {
    let result = [];
 function recursion(currentArray, currentIndex) {
   result.push([...currentArray]);

   if (currentIndex === nums.length) {
     return;
   }
   for (let index = currentIndex; index < nums.length; index++) {
     currentArray.push(nums[index]);
     recursion(currentArray, index + 1);
     currentArray.pop()
   }
 }
   recursion([], 0 );
 console.log(JSON.stringify(result))
return result
};

let set = [1,2,3]
subsets(set)