const mixedArray = [3, 13, 74, 14, 66, 15, 22, 4];

function filterArray(numbersList) {
  let numbersNeed = [];
  for (var i=0; i < numbersList.length; i++) {
    if (numbersList[i] % 2 == 0){
      numbersNeed.push(numbersList[i])
    }
  }
  return numbersNeed;
}

console.log(filterArray(mixedArray));