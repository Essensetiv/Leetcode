/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
    if (!root) {
        return [];
    }

    const ans = []; 
    const queue = [root]; 

    while (queue.length > 0) {
        const currentLength = queue.length;
        let currMax = -Infinity; 

        for (let i = 0; i < currentLength; i++) {
            const node = queue.shift(); 
            currMax = Math.max(currMax, node.val); 

            
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }

        ans.push(currMax); 
    }

    return ans;
};