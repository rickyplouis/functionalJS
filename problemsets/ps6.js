/**
 * Counts the number of times a word occurs and creates an object mapping of the results
 * @example ['hello', 'world', 'my', 'name', 'hello', 'name', 'name', 'name']
 * @example {'hello': 2, 'world': 1, 'my': 1, 'name': 4}
 * @param {Array} inputWords
 * @return {Object} countWords
 */

function countWords(inputWords) {
  return inputWords.reduce( (wordMap, word) => {
    wordMap[word] = inputWords.reduce( (count, currWord) => {return word  === currWord ? ++count : count}, 0)
    return wordMap
  },{})
}

module.exports = countWords
