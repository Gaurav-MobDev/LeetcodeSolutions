var twoSum = function (numbers, target) {
  let result = []
  let map = {}
  for(let index = 0; index < numbers.length; index++){
    let rem = target - numbers[index]
    if(map[`${rem}`]>=0){
        result = [map[`${rem}`], index]
        return result
    }else{
        map[`${numbers[index]}`] = index
    }
  }
  return result;
};
let numbers = [2,7,11,15]
let target = 9;
console.log(twoSum(numbers, target));
