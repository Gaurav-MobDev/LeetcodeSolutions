var addBinary = function(a, b) {
    a = a.split('').reverse()
    b = b.split('').reverse()
    let lengthA = a.length
    let lengthB = b.length
    let sum = ''
    let carry = ''
    if(lengthB > lengthA){
        let temp = a
        a = b
        b = temp

        let temL = lengthB
        lengthB= lengthA
        lengthA = temL
    }
        let index = 0
        while(index < lengthB){
            if(carry == 1 && a[index] == 1 && b[index] == 1){
                carry = 1
                sum =  '1'+sum
            }
            else if(carry == 1 && a[index] == 1 && b[index] == 0){
                carry = 1
                sum =  '0'+sum
            }
           else  if(carry == 1 && a[index] == 0 && b[index] == 1){
                carry = 1
                sum =  '0'+sum
            }
           else  if(carry == 1 && a[index] == 0 && b[index] == 0){
                carry = 0
                sum =  '1'+sum
            }
            else if(carry == 0 && a[index] == 1 && b[index] == 1){
                carry = 1
                sum =  '0'+sum
            }
            else if(carry == 0 && a[index] == 1 && b[index] == 0){
                carry = 0
                sum =  '1'+sum
            }
            else if(carry == 0 && a[index] == 0 && b[index] == 1){
                carry = 0
                sum =  '1'+sum
            }
            else if(carry == 0 && a[index] == 0 && b[index] == 0){
                carry = 0
                sum =  '0'+sum
            }
            index++
        }
        while(index < lengthA){
            if(a[index] == 1 && carry == 1){
                carry = 1
                sum =  '0'+sum
            }
           else  if(a[index] == 0 && carry == 1){
                carry = 0
                sum =  '1'+sum
            }
            else  if(a[index] == 0 && carry == 0){
                carry = 0
                sum =  '0'+sum
            }
            else  if(a[index] == 1 && carry == 0){
                carry = 0
                sum =  '1'+sum
            }
            index++
        }
        if(carry ==1 ){
            sum = carry+sum
        }
  
    console.log(sum)
};

let a = "100", b = "110010"
addBinary(a, b)