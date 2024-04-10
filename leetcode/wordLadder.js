function wordsDifferByOne(word1, word2){
    word1 = word1.split('')
    word2 = word2.split('')
    let difference = 0
    for(let index = 0 ;index< word1.length ;index++){
        if(word1[index] !== word2[index]){
            difference++
        }
    }
    return difference === 1
}

var ladderLength = function(beginWord, endWord, wordList) {
    let length = 0
    let isEndWordInList = false
    for(let index = 0 ;  index < wordList.length ; index++){
        
        if(wordList[index] === endWord && wordsDifferByOne(beginWord, wordList[index])){
            isEndWordInList = true

        }
        if(wordList[index] === endWord && !wordsDifferByOne(beginWord, wordList[index])){
            isEndWordInList = false

        }
        if(wordsDifferByOne(beginWord, wordList[index])){
            length++
            beginWord =  wordList[index]
        }
        
    }

    return isEndWordInList ? length : 0
};

let beginWord = "hot", endWord = "dog", wordList = ["hot","dog","dot"]
console.log(ladderLength(beginWord, endWord, wordList))