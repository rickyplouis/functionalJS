function getShortMessages(objArray) {
  return objArray.map( (obj) => obj.message).filter( (message) => message.length < 50)
}

module.exports = getShortMessages
