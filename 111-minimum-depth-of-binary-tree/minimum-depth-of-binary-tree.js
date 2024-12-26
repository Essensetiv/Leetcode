var minDepth = function(root) {
    // Base case...
    // If the subtree is empty i.e. root is null, return depth as 0...
    if (root === null) return 0;
    
    // If both subtrees are empty...
    if (root.left === null && root.right === null)
        return 1;
    
    // If the left subtree is empty, return the depth of right subtree after adding 1 to it...
    if (root.left === null)
        return 1 + minDepth(root.right);
    
    // If the right subtree is empty, return the depth of left subtree after adding 1 to it...
    if (root.right === null)
        return 1 + minDepth(root.left);
    
    // When the two child functions return their depth...
    // Pick the minimum out of these two subtrees and return this value after adding 1 to it...
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;    // Adding 1 is the current node which is the parent of the two subtrees...
};