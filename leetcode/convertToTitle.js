var convertToTitle = function (columnNumber) {
    const CHARS = {
        1: 'A',
        2: 'B',
        3: 'C',
        4: 'D',
        5: 'E',
        6: 'F',
        7: 'G',
        8: 'H',
        9: 'I',
        10: 'J',
        11: 'K',
        12: 'L',
        13: 'M',
        14: 'N',
        15: 'O',
        16: 'P',
        17: 'Q',
        18: 'R',
        19: 'S',
        20: 'T',
        21: 'U',
        22: 'V',
        23: 'W',
        24: 'X',
        25: 'Y',
        26: 'Z'
    };


    let result = ''
    let rem = 0
    if (columnNumber <= 26) {
        return CHARS[columnNumber]
    }
    while (columnNumber > 0) {
        rem = (columnNumber-1) % 26
        columnNumber = Math.floor((columnNumber-1) / 26) 
        result =  CHARS[rem+1] + result
    }
   
    return result
};

let index = 52
console.log(convertToTitle(index))