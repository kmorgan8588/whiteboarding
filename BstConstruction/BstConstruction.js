/**
 * Implement the removeal method of a BST data structure class.
 * If trying to remove the root from a single node tree, return the root node
 * 
 * example:
 *                   10
 *               /        \
 *              5         15
 *            /  \      /    \
 *           2    5    13     22
 *          /         /  \
 *         1         12  14
 * 
 * remove 10:
 *                   12
 *               /        \
 *              5         15
 *            /  \      /    \
 *           2    5    13     22
 *          /            \
 *         1             14
*/

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    let context = this;
    let nodeVal;
    while (true) {
      nodeVal = context.value;
      if (value < nodeVal) {
        if (context.left === null) {
          context.left = new BST(value);
          break;
        } else {
          context = context.left;
        }
      } else {
        if (context.right === null) {
          context.right = new BST(value);
          break;
        } else {
          context = context.right;
        }
      }
    }
    return this;
  }

  contains(value) {
    // Write your code here.
    let context = this;
    while (context) {
      if (value === context.value) return true;
      else if (value < context.value) context = context.left;
      else context = context.right;
    }
    return false;
  }

  remove(target) {
    
  }
}

function inOrderTraverse(tree, array) {
  if (tree !== null) {
    inOrderTraverse(tree.left, array);
    array.push(tree.value);
    inOrderTraverse(tree.right, array);
  }
  return array;
}

// Do not edit the line below.
module.exports = BST;
