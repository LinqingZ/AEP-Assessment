/**
@param {number} num
@returns {number}
*/

module.exports = function(num){
  //Solution goes here
  let numStr = num.toString(2);
  let count = 0;
  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] === '1') {
      count++;
    }
  }
  return count;
}