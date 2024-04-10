var myPow = function (x, n) {
    let pow = Math.abs(x)
    let power = Math.abs(n)
    let num = Math.abs(x)
    if (n === 0) {
        
      return 1;
    }
    let laterProd = 1
  while(power>1){
    if(power%2 === 0){
        pow = pow*pow
        power = power/2
    }else{
        laterProd = laterProd*pow
        pow = pow*pow
      
        power = (power-1)/2
    }
   
  }
  pow = pow*laterProd
  if(n<0){
    pow = parseFloat(1/pow).toFixed(5)
  }
  if(x<0 && n%2 !== 0){
    pow = -pow
  }
  console.log(pow);
};

let x = -13.62608, n = 3
myPow(x, n);
