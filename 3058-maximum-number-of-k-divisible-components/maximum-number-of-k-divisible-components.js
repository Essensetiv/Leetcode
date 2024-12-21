/**
 * @param {number} n - Количество узлов в дереве.
 * @param {number[][]} edges - Список рёбер дерева.
 * @param {number[]} values - Значения узлов.
 * @param {number} k - Число, на которое должна делиться сумма значений компонента.
 * @return {number} - Максимальное количество компонентов.
 */
var maxKDivisibleComponents = function(n, edges, values, k) {
    // Шаг 1: Создаём список смежности для дерева
    const adjList = Array.from({ length: n }, () => []);
    for (const [a, b] of edges) {
        adjList[a].push(b);
        adjList[b].push(a);
    }

    // Шаг 2: Инициализируем счётчик компонентов
    let componentCount = 0;

    // Шаг 3: Запускаем DFS для обхода дерева
    function dfs(node, parent) {
        // Инициализируем сумму значений для текущего поддерева
        let sum = values[node];

        // Обходим всех соседей текущего узла
        for (const neighbor of adjList[node]) {
            if (neighbor !== parent) {
                // Рекурсивно вызываем DFS для соседа
                sum += dfs(neighbor, node);
            }
        }

        // Если сумма значений в поддереве делится на k, увеличиваем счётчик компонентов
        if (sum % k === 0) {
            componentCount++;
            return 0; // Сбрасываем сумму, так как компонент уже учтён
        }

        // Возвращаем сумму для использования в родительском узле
        return sum;
    }

    // Запускаем DFS с корня дерева (узел 0)
    dfs(0, -1);

    // Возвращаем количество компонентов
    return componentCount;
};