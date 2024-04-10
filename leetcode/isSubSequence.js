var isSubsequence = function (s, t) {
  let sequnceTracker = '';
  let previousIndex = 0
  outerloop: for (
    let subSequenceIndex = 0;
    subSequenceIndex < s.length;
    subSequenceIndex++
  ) {
    for (let tIndex = previousIndex; tIndex < t.length; tIndex++) {
      if (s[subSequenceIndex] === t[tIndex]) {
        sequnceTracker += t[tIndex];
        previousIndex = tIndex+1
        continue outerloop;
      }
    }
  }
  console.log(sequnceTracker, s === sequnceTracker)
 return s === sequnceTracker
};

let s = "aaaaaa"
let t = "bbaaaa"
isSubsequence(s,t)