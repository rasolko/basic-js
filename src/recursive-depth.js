const CustomError = require("../extensions/custom-error");
module.exports = class DepthCalculator {
  calculateDepth(arr) {
    return Array.isArray(arr) ? (1 + Math.max(...arr.map( item => this.calculateDepth(item.length === 0 ? [1] : item)))) : 0
  }
};