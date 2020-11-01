const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isRevers = true){
    this.isRevers = isRevers;
  }
  encrypt(str, key) {
    let result = [];
    let strArr = [];
    for(let i = 0; i < str.length; i++){
      strArr.push(str.toUpperCase().charCodeAt(i));
    }
    let keyArr = [];
    for(let i = 0; i < str.length; i++){
      keyArr.push(key.toUpperCase().charCodeAt(i % key.length));
    }
    let spaceCount = 0;
    strArr.map( (item, index) => {
      if(item >= 65 && item <= 90){
        result.push(String.fromCharCode((((item - 65) + (keyArr[index - spaceCount] - 65)) % 26) + 65));
      } else {
        result.push(String.fromCharCode(item));
        spaceCount++;
      }
    })
    return this.isRevers ? result.join('') : result.reverse().join('');
  }    
  decrypt(str, key) {
    let result = [];
    let strArr = [];
    for(let i = 0; i < str.length; i++){
      strArr.push(str.charCodeAt(i));
    }
    let keyArr = [];
    for(let i = 0; i < str.length; i++){
      keyArr.push(key.toUpperCase().charCodeAt(i % key.length));
    }
    let spaceCount = 0;
    strArr.map( (item, index) => {
      if(item >= 65 && item <= 90){
        if((item - 65) - (keyArr[index - spaceCount] - 65) >= 0){
          result.push(String.fromCharCode(((item - 65) - (keyArr[index - spaceCount] - 65)) + 65));
        } else {
          result.push(String.fromCharCode(( 26 - Math.abs((item - 65) - (keyArr[index - spaceCount] - 65))) + 65));
        }
      } else {
        result.push(String.fromCharCode(item));
        spaceCount++;
      }
    })
    return this.isRevers ? result.join('') : result.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
