const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)) Error
  let result = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === `--discard-next` && i !== arr.length - 1){
      i++;
    } else if(arr[i] === `--discard-next` && i === arr.length - 1){
    }

    else if((arr[i] === `--discard-prev` && i === 0) 
    || (arr[i] === `--discard-prev` && arr[i - 2] === `--discard-next`)){
    } else if(arr[i] === `--discard-prev` && i !== 0){
      result.pop();
    } 
    
    else if(arr[i] === `--double-next` && i !== arr.length - 1){
      result.push(arr[i + 1]);
    } else if(arr[i] === `--double-next` && i === arr.length - 1){
    }
    
    else if((arr[i] === `--double-prev` && i === 0) 
    || (arr[i] === `--double-prev` && arr[i - 2] === '--discard-next')){
    } else if(arr[i] === `--double-prev` && i !== 0){
      result.push(arr[i - 1]);
    }
    
    else{
      result.push(arr[i]);
    }
  }
  return result;
};
