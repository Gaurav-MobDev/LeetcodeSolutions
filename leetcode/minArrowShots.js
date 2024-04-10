var findMinArrowShots = function(points) {
   let count = 1
   for(let index = 1; index < points.length; index++){
    if((points[index-1][0] <= points[index][0] &&  points[index-1][1] <= points[index][1] && points[index][0] <= points[index-1][1]) || (points[index-1][0] <= points[index][0] &&  points[index-1][1] >= points[index][1])){

    }else{
        count++
    }
   }
    console.log(count)
};


let points = [[10,16],[2,8],[1,6],[7,12]]
findMinArrowShots(points)