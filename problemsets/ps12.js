/**
 * Create a function that keeps track of the number of times a method is called
 * @param {Object} target
 * @param {Function} method
 */

function Spy(target, method) {
  var spy = {
    count: 0
  }

  //copy calling the method
  var callMethod = target[method]

  //redefine target[method] but add count before it
  target[method] = function(){
    spy.count++;
    return callMethod.apply(target, arguments)
  }
  return spy
}

module.exports = Spy
