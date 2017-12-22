/**
 * Recursively executes a function N number of times
 * @param {function} operation
 * @param {Number} num
 * @return {function} repeat
 */

function repeat(operation, num){
  return num > 0 ? repeat(operation, num -1) : operation;
}

module.exports = repeat;
