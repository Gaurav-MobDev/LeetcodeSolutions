var minimumTotal = function (triangle) {
  let minSum = Infinity;
  let sumTrack = [];
  function dp(currentSum, mainIndex, index1, index2, track) {
    currentSum += triangle[mainIndex][index1];

    if (mainIndex === triangle.length - 1) {
        sumTrack.push([...track]);
        minSum = Math.min(minSum, currentSum);
        return;
    }
    track.push(triangle[mainIndex][index1]);
    dp(currentSum, mainIndex + 1, index1, index1, track);
    console.log(JSON.stringify(track))
    track.pop();
    if (index2 < triangle[mainIndex + 1].length) {
        currentSum += triangle[mainIndex + 1][index2];
        track.push(triangle[mainIndex + 1][index2]);
        dp(currentSum, mainIndex + 1, index1, index2 + 1, track);
        track.pop();
    }
  }
  dp(0, 0, 0, 0, []);
  console.log(JSON.stringify(sumTrack));
  console.log(minSum);
};

let triangle = [[2]]
minimumTotal(triangle)