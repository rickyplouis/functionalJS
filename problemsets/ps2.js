function repeat(operation, num){
  return num > 0 ? repeat(operation, num -1) : operation;
}

module.exports = repeat;
