const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = '';
  let addStr = '';
  if(!options.separator){
    options.separator = '+';
  }
  if(!options.additionSeparator){
    options.additionSeparator = '|';
  }
  if(!options.repeatTimes){
    options.repeatTimes = 1;
  }
  if(!options.additionRepeatTimes){
    options.additionRepeatTimes = 1;
  }
  if(options.additionRepeatTimes){
    if(options.addition === null){
      options.addition = 'null';
    }
    let addArr = [];
    for(let i = 0; i < options.additionRepeatTimes; i++){
      addArr.push(options.addition);
    }
    addStr = addArr.join(options.additionSeparator);
  }
  if(options.repeatTimes){
    let strArr = [];
    for(let i = 0; i < options.repeatTimes; i++){
      strArr.push(str + addStr);
    }
    result = strArr.join(options.separator);
  }
  return result
};
  