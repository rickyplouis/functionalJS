function countWords(inputWords) {
  var resObj = {};
  inputWords.map( (word) => resObj[word] = inputWords.reduce( (acc, val) => { return val === word ? ++acc : acc}, 0));
  return resObj
}

module.exports = countWords
