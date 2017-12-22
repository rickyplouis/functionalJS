/**
 * Takes an array of objects with '.message' properties and returns an array of
 * messages that are less than < 50 characters long.
 * @param{array}
 * @return{array}
 */

function getShortMessages(objArray) {
  return objArray.map( (obj) => obj.message).filter( (message) => message.length < 50)
}

module.exports = getShortMessages
