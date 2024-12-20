/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number[]} arr
 * @return {TreeNode}
 */
function arrayToTree(arr, index = 0) {
    if (index >= arr.length || arr[index] === null) {
        return null;
    }
    const node = new TreeNode(arr[index]);
    node.left = arrayToTree(arr, 2 * index + 1);
    node.right = arrayToTree(arr, 2 * index + 2);
    return node;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function treeToArray(root) {
    if (!root) return [];
    const queue = [root];
    const result = [];
    while (queue.length > 0) {
        const node = queue.shift();
        if (node) {
            result.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            result.push(null);
        }
    }
    // Убираем лишние null в конце
    while (result[result.length - 1] === null) {
        result.pop();
    }
    return result;
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var reverseOddLevels = function(root) {
    // Рекурсивная функция для обхода дерева
    function traverseDFS(leftChild, rightChild, level) {
        // Базовый случай: если один из узлов равен null, завершаем рекурсию
        if (leftChild === null || rightChild === null) {
            return;
        }

        // Если текущий уровень нечетный, меняем значения узлов
        if (level % 2 === 1) {
            let temp = leftChild.val;
            leftChild.val = rightChild.val;
            rightChild.val = temp;
        }

        // Рекурсивно обходим левые и правые поддеревья
        traverseDFS(leftChild.left, rightChild.right, level + 1);
        traverseDFS(leftChild.right, rightChild.left, level + 1);
    }

    // Запускаем рекурсивный обход
    traverseDFS(root.left, root.right, 1);
    return root;
};

/**
 * @param {number[]} arr
 * @return {number[]}
 */
function processArray(arr) {
    // Преобразуем массив в дерево
    const root = arrayToTree(arr);
    // Применяем функцию reverseOddLevels
    const newRoot = reverseOddLevels(root);
    // Преобразуем дерево обратно в массив
    return treeToArray(newRoot);
};
