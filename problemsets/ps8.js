/**
 * Counts number of arguments passed to it which have a property 'quack' defined directly on them. Do not match values inherited from prototypes.
 * @param  {x * Objects} xNumOfObjects
 * @return {Number}
 */

function duckCount() {
  let args = [].slice.call(arguments)
  return args.reduce( function(count, duckLikeObj) {
    return isADuck.call(duckLikeObj) ? count + 1 : count
  },0)
}

/**
 * Determines if function has property quack
 * @return {boolean} isADuck()
 */

function isADuck(){
  return Object.keys(this).length > 0 && 'quack' in this;
}

module.exports = duckCount
