var combine = function (n, k) {
  let result = [];

  function bt(start, current) {
    if (current.length === k) {
      result.push([...current]);
      return;
    }

    for (let index = start; index <= n; index++) {
     current.push(index)
      bt(index+1, current);
      current.pop();
    }
  }

  bt(1, []);

  console.log(JSON.stringify(result));
};
let n = 4,
  k = 2;
combine(n, k);
