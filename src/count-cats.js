const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let count = 0;
  backyard.map( item => {
    item.map( item => {
      if(item === '^^'){
        count++
      }
    })
  })
  return count
};
