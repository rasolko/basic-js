const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    if(arguments.length === 0){
      this.arr.push('( )');
      return this
    } else {
      this.arr.push(`( ${String(value)} )`);
      return this
    }
    
  },
  removeLink(position) {
    if(!Number.isInteger(position) || position <= 0 || this.arr[position] === undefined){
      this.arr = [];
      throw new RangeError
    } else {
      this.arr.splice(position - 1, 1);
      return this
    }
    
  },
  reverseChain() {
    this.arr.reverse();
    return this
  },
  finishChain() {
    let result = this.arr.join('~~');
    this.arr = [];
    return result
  }
};

module.exports = chainMaker;
