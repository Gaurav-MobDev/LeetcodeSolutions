var merge = function (intervals) {
  if (intervals.length <= 1) return intervals;
  intervals.sort((a, b) => a[0] - b[0]);
  let result = [intervals[0]];
  for (let index = 1; index < intervals.length; index++) {
    if (result[result.length-1][1] >= intervals[index][0]) {
      result[result.length-1][1] = Math.max(lastMergedInterval[1], currentInterval[1]);
    } else {
      result.push(intervals[index]);
    }
  }
  console.log(JSON.stringify(result));
};

let intervals = [[1,3],[2,6],[8,10],[15,18]]
merge(intervals);


