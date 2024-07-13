function sortStack(stack, resultStack) {
  if (stack.length === 0) {
    return;
  }
  let tempStack = [];
  let min = stack.pop();
  while (stack.length > 0) {
    let temp = stack.pop();
    if (temp < min) {
      let minTemp = min;
      min = temp;
      temp = minTemp;
    }
    tempStack.push(temp);
  }
  resultStack.push(min);
  sortStack([...tempStack], resultStack);
  return resultStack;
}

//[3,4,1,6,8]
//[2]
let result = sortStack([4,5,5,7,1,0], []);
console.log(result);
