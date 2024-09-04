/**
@param {number} row
@returns {Array<Array<number>>}
*/

module.exports = function(row){
  //Solution goes here
  let output = [];
  if (row === 0) return output;
  output.push([1]);

  for (let i = 1; i < row; i++) {
    let prevRow = output[i - 1];
    let newRow = [1];
    for (let j = 1; j < prevRow.length; j++) {
      newRow.push(prevRow[j - 1] + prevRow[j]);
    }
    newRow.push(1);
    output.push(newRow);
  }

  return output;
}