var permute = function (nums) {
    let finalresult = [];

  if (nums.length <= 1) {
    finalresult.push([...nums])
    return finalresult
  }
  let initArray = [];
  function backtrack(remaining, result) {
    if (remaining.length === 0) {
      finalresult.push([...result]);
      return;
    }
    for (let index = 0; index < remaining.length; index++) {
      let arrayCopy = [...remaining];
      let fixValue = arrayCopy.splice(index, 1);
      result.push(fixValue[0]);
      backtrack(arrayCopy, result);
      result.pop();
    }
  }

  backtrack(nums, initArray);

  console.log(JSON.stringify(finalresult));
};

permute([1]);
