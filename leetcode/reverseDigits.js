var reverse = function(num) {
   
    let reversedNum = 0;
    const isNegative = num < 0;
    num = Math.abs(num);
    while (num > 0) {
        const digit = num % 10;
        reversedNum = reversedNum * 10 + digit;
        num = Math.floor(num / 10);
    }
    if (isNegative) {
        reversedNum = -reversedNum;
    }
    if(reversedNum > Math.pow(2,31)-1 || reversedNum < -Math.pow(2,31)){
        return 0
    }
    return reversedNum;
};
let x  = 1534236469
reverse(x)