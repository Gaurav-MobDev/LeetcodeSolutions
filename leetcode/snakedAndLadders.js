var snakesAndLadders = function(board) {
    let array = []
    for(let index = board.length-1; index >= 0; index--){
        array.push(...board[index])
    }
    console.log(JSON.stringify(array))
    let arrayLength = array.length;
    if(arrayLength <=6){
        return 1
    }
    let index = 0
    let numberOfMoves = 0;
    while(index <= arrayLength+1){

        let max = 6
        let subIndex = 0
        while(subIndex <= 5){
            if(array[index+subIndex] > max){
                max = array[index+subIndex]
            }
            subIndex++
        }
        console.log('max= ', max)
        if(array[index+max] === index+1){
            numberOfMoves = -1
            break
        }
        index = index+max
        numberOfMoves++

    }
    console.log(numberOfMoves)
};

let board =[[-1,-1,19,10,-1],[2,-1,-1,6,-1],[-1,17,-1,19,-1],[25,-1,20,-1,-1],[-1,-1,-1,-1,15]]
// [[-1,-1,19,10,-1],[2,-1,-1,6,-1],[-1,17,-1,19,-1],[25,-1,20,-1,-1],[-1,-1,-1,-1,15]]
//[[1,1,-1],[1,1,1],[-1,1,1]]
//[[-1,-1,-1],[-1,9,8],[-1,8,9]]
//[[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,35,-1,-1,13,-1],[-1,-1,-1,-1,-1,-1],[-1,15,-1,-1,-1,-1]]
snakesAndLadders(board)