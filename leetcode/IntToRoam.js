var intToRoman = function (num) {
    const romanNumerals = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];
  let array = [];
  let place = 1;
  while (num > 0) {
    let rem = (num % 10) * place;
    array.push(rem);
    num = parseInt(num / 10);
    place = place * 10;
  }

  let result = "";
  outerloop: for (let index = array.length-1; index >= 0; index--) {
    for (let subindex = 0; subindex < romanNumerals.length; subindex++) {
        if(array[index] == romanNumerals[subindex].value){
            result = result + romanNumerals[subindex].symbol
            continue outerloop
        }else if(array[index] > romanNumerals[subindex].value){
            let position = Math.pow(10,index)
            let value = romanNumerals.find(item => item.value === position).symbol
            let repeat = (array[index]-romanNumerals[subindex].value)/position
            result = result + romanNumerals[subindex].symbol + `${value}`.repeat(repeat)
            continue outerloop
        }
    }
  
  }
  console.log(JSON.stringify(result));
  return result
};
intToRoman(3884);
//1994
