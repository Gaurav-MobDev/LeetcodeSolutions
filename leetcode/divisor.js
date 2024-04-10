var divide = function(dividend, divisor) {
    let isNegative = (divisor < 0 && dividend > 0) || (divisor > 0 && dividend < 0)
    if (Math.abs(divisor) === 1) {
        if (!isNegative && Math.abs(dividend) >= Math.pow(2, 31)-1) {
            dividend = Math.pow(2, 31)-1
        }
        if (-Math.abs(dividend) < -(Math.pow(2, 31))) {
            dividend = -(Math.pow(2, 31)+1)
        }
        return isNegative ? -Math.abs(dividend) : Math.abs(dividend)
    }
    if (dividend === divisor) {
        return 1
    }
    if (dividend === -divisor) {
        return -1
    }
    let num = 0

    let sum = Math.abs(divisor)
    while (sum < Math.abs(dividend)) {
        sum = sum + Math.abs(divisor)
        num++
    }
    if (num > Math.pow(2, 31)-1) {
        num = Math.pow(2, 31)-1
    }
    if (-num < -(Math.pow(2, 31))) {
        num = -(Math.pow(2, 31))
    }
    return isNegative ? -num : num
};

console.log(divide(-2147483648 ,2))