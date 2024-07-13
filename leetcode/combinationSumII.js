var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  let result = [];
  let map = {};
  function backTrack(index, current, sum, str) {
    if(map[str]){
        return
    }
    if (sum === target) {
      result.push([...current]);
      map[str] = str
      return;
    }
    if (index >= candidates.length || sum > target) {
      return;
    }
    // for (let i = index; i < candidates.length; i++) {
    //   if (i > index && candidates[i] === candidates[i - 1]) continue;

    //   current.push(candidates[i]);
    //   backTrack(i + 1, current, sum + candidates[i], str);
    //   current.pop();
    // }
   
    current.push(candidates[index])
    backTrack(index + 1, current, sum + candidates[index], str + `${candidates[index]}`);
    current.pop();
    backTrack(index + 1, current, sum, str);
  }

  backTrack(0, [], 0, "");
  console.log(JSON.stringify(map));
  return result;
};

let candidates = [10, 1, 2, 7, 6, 1, 5],
  target = 8;

console.log(JSON.stringify(combinationSum2(candidates, target)));
