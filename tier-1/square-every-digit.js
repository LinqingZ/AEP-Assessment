/**
@param {number} num
@returns {number}
*/
module.exports = function(num){
  //Solution goes here
  let numStr = num.toString();
  let result = '';
  for (let i = 0; i < numStr.length; i++) {
    result += Math.pow(parseInt(numStr[i]), 2);
  }
  return parseInt(result);
}

