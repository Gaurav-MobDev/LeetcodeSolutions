var reverseBits = function(n) {
    let bits = Array(32).fill(0)
    console.log(bits)
    let num = n
    let i = 0
    while(num > 0){
        bits[i] = num%2
        num = Math.floor(num/2)
        i++
       
    }
    console.log(bits)
    let reverse = 0
  
    for(let index =bits.length-1; index >=0; index--){
        reverse +=  bits[index]*Math.pow(2,bits.length-index-1)
    }
    return reverse
};

let n = 43261596
console.log(reverseBits(n))
// (00111001011110000010100101000000)
//00000010100101000001111010011100