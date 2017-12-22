/**
 * Counts the number of times a word occurs and creates an object mapping of the results
 * @example ['hello', 'world', 'my', 'name', 'hello', 'name', 'name', 'name']
 * @example {'hello': 2, 'world': 1, 'my': 1, 'name': 4}
 * @param {Array} inputWords
 * @return {Object} countWords
 */

function countWords(inputWords) {
  var resObj = {};
  inputWords.map( (word) => resObj[word] = inputWords.reduce( (acc, val) => { return val === word ? ++acc : acc}, 0));
  return resObj
}

module.exports = countWords
