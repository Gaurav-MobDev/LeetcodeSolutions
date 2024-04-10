var hammingWeight = function(n) {
    let rem = 0
    let ones = 0
    while(n > 0){
        rem = n%2
        if(rem === 1){
            ones++
        }
        n = Math.floor(n/2)
    }
    return ones
};

let num = 2147483645
console.log(hammingWeight(num))