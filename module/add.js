const numberCheck = require("./number-check");
const numberChecker = require("./number-check");

module.exports = {
  add : function(first, second){
    if(numberCheck(first) === true){
      return first + second;
    }
  }
}
//function add(first, second){
//  return first + second;
//}