function reduce(arr, fn, initial) {
  return arr.length > 0 ? reduce(arr.slice(1), fn, fn(initial, arr[0], 0, arr.slice(1))) : initial;
}

module.exports = reduce
