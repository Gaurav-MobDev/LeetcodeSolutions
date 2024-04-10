var mySqrt = function (x) {

 let index = 0
 while(true){
    index++
    if((index)*(index) > x){
        break
    }
 }
 console.log(index-1)
};

mySqrt(6);
