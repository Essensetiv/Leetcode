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
 * @return {number}
 */
var minimumOperations = function(root) {
    if (!root) return 0;

    let operations = 0;
    let queue = [root]; // Очередь для обхода дерева по уровням

    while (queue.length > 0) {
        let levelSize = queue.length;
        let levelValues = [];

        // Собираем значения текущего уровня
        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();
            levelValues.push(node.val);

            // Добавляем дочерние узлы в очередь
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        // Считаем минимальное количество операций для сортировки текущего уровня
        operations += minSwapsToSort(levelValues);
    }

    return operations;
};

/**
 * Функция для подсчёта минимального количества перестановок для сортировки массива.
 * @param {number[]} arr - Массив значений уровня.
 * @return {number} - Минимальное количество перестановок.
 */
function minSwapsToSort(arr) {
    let sorted = [...arr].sort((a, b) => a - b); // Создаём отсортированную копию массива
    let map = new Map();

    // Создаём хеш-таблицу для хранения индексов элементов
    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], i);
    }

    let swaps = 0;

    // Сортируем массив, считая количество перестановок
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== sorted[i]) {
            swaps++;

            // Меняем местами элементы
            let temp = arr[i];
            arr[i] = arr[map.get(sorted[i])];
            arr[map.get(sorted[i])] = temp;

            // Обновляем индексы в хеш-таблице
            map.set(temp, map.get(sorted[i]));
            map.set(sorted[i], i);
        }
    }

    return swaps;
}