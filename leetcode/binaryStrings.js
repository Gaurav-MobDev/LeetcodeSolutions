let result = [];
function binaryStrings(n, array) {
  if (array.length >  n-1) {
    result.push([...array])
    return;
  }
  for(let index = 0 ;index< 2; index++){
    //this check to SKIP consecutive 1s
    if(array[array.length - 1] === 1 && index === 1){
        break
    }
    array.push(index)
    binaryStrings(n, array);
    array.pop();
  }
}


binaryStrings(3, [])
console.log(JSON.stringify(result))