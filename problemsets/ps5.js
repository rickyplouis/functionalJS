/**
 * Checks that all objects from an array are contained in a second array
 * @param{array} goodUsers
 * @param{array} submittedUsers
 * @return{boolean}
**/

function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    var goodIDs = goodUsers.map( (user) => user.id)
    return submittedUsers.every( (user) => goodIDs.indexOf(user.id) > -1)
  };
}

module.exports = checkUsersValid
