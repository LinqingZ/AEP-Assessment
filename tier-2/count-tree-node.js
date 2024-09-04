/**
 * Definition for TreeNode.
 *
 *class TreeNode {
 *  constructor(val, left, right){
 *    this.val = (val===undefined ? 0 : val)
 *    this.left = (left===undefined ? null : left)
 *    this.right = (right===undefined ? null : right)
 *  }
 *}
 *
 */

/**
@param {TreeNode} list
@returns {number}
*/

module.exports = function(list){
  let count = 0;
  if (!list || list.val === undefined) {
    return count;
  }
  let stack = [list];
  while (stack.length) {
    let node = stack.pop();
    if (node) {
      count++;
      stack.push(node.left);
      stack.push(node.right);
    }
  }
  return count;
}