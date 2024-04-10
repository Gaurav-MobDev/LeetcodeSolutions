var trailingZeroes = function (n) {
  let number = n;
  let result = [];
  let trailingZeroes = 0
  while (number >= 1) {
    let primes = number
    while(primes%5 === 0){
        result.push(5)
        primes = primes/5
    }
    while(primes%2 === 0){
        result.push(2)
        primes = primes/2
    }
    number--;
  }
  let stack = []
  let numOfFives = 0
  let numOfTwos = 0
  console.log(JSON.stringify(result));
  for(let index = 0; index< result.length ; index++){
    if(result[index] === 5){
        numOfFives++
    }
    if(result[index] === 2){
        numOfTwos++
    }
  }

  console.log(JSON.stringify(stack))
  console.log(
    Math.min(numOfFives, numOfTwos)
  );
};

trailingZeroes(5);
