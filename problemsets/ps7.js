/**
 * Implents Array# reduce using recursion
 * For simplicity, your implementation of reduce need not replicate the behaviour of a reduce missing an initial value. You may assume the initial value will always be supplied.
 * @param {Array} arr
 * @param {Function} fn
 * @param {Number} init
 */

function reduce(arr, fn, initial) {
  return arr.length > 0 ? reduce(arr.slice(1), fn, fn(initial, arr[0], 0, arr.slice(1))) : initial;
}

module.exports = reduce
