/**
 * Use Array#reduce to implement a simple version of Array#map.
 * @param {Array} arr
 * @param {Function} fn
**/

module.exports = function arrayMap(arr, fn) {
  return arr.reduce( (map, val) => {
    map.push(fn.apply(null, [val]))
    return map
  }, [])
}
