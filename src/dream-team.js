const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) return false
  let membersArr = [];
  let result = '';
  members.map( item => {
    if(typeof item === 'string'){
      membersArr.push(item.trim().toUpperCase());
    }
  })
  membersArr.sort();
  membersArr.map( item => {
    result = result + item.split('')[0];
  })
  return result
};
