var generateParenthesis = function (n) {
  let result = [];
  function bt(index, parenthesis, left, right) {
    if (index === n) {
      if(left === right)
      result.push(parenthesis);
      return;
    }
   
    if (left < n) {
      left++;
      parenthesis = parenthesis + "(";
      bt(index + 1, parenthesis, left,right);
      parenthesis = parenthesis.slice(0, -1);
     
    }
    left--;
    right++;
    if(right <= left){
      parenthesis = parenthesis + ")";
      bt(index + 1, parenthesis, left,right);
      parenthesis = parenthesis.slice(0, -1);
    }
    right--;
  }
  bt(0, "", 0, 0);
  console.log(JSON.stringify(result));
};

let n = 6;
generateParenthesis(n);
