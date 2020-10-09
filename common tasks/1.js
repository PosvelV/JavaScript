const string = "Привет! Как дела?";

const alphabet = ["а", "о", "у", "ы", "э", "и", "е", "ю", "я", "ё", "А", "О", "У", "Ы", "Э", "И", "Е", "Ю", "Я", "Ё"]

function getVowels (stringUse) {
  let stringGet = "";
  for (let i = 0; i < stringUse.length; i++) {
    var letter = stringUse[i];

    if (-1 != alphabet.indexOf(letter)) {
      stringGet = stringGet + letter + ", ";
    }
  }
  return stringGet
}

console.log(getVowels(string));