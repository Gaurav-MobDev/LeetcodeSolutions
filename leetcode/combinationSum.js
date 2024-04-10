var combinationSum = function (candidates, target) {
  let result = [];
  function backTrack(index, current, sum) {
    if (sum === target) {
      result.push([...current]);
      return;
    }
    if (index >= candidates.length || sum > target) {
      return;
    }
    current.push(candidates[index])
    backTrack(index, current, sum + candidates[index]);
    current.pop();
    backTrack(index + 1, current, sum);
  }

  backTrack(0, [], 0);
  console.log(JSON.stringify(result));
};

let candidates = [2, 3, 5],
  target = 8;
combinationSum(candidates, target);
