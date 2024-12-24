/**
 * @param {number[][]} edges1 - Список рёбер первого дерева.
 * @param {number[][]} edges2 - Список рёбер второго дерева.
 * @return {number} - Минимальный диаметр после слияния двух деревьев.
 */
var minimumDiameterAfterMerge = function(edges1, edges2) {
    // Вычисляем количество узлов для каждого дерева
    const n = edges1.length + 1;
    const m = edges2.length + 1;

    // Строим списки смежности для обоих деревьев
    const adjList1 = buildAdjList(n, edges1);
    const adjList2 = buildAdjList(m, edges2);

    // Вычисляем диаметры обоих деревьев
    const diameter1 = findDiameter(n, adjList1);
    const diameter2 = findDiameter(m, adjList2);

    // Вычисляем максимальную длину пути, который проходит через оба дерева
    const combinedDiameter = Math.ceil(diameter1 / 2.0) + Math.ceil(diameter2 / 2.0) + 1;

    // Возвращаем максимум из трёх возможных значений
    return Math.max(Math.max(diameter1, diameter2), combinedDiameter);
};

/**
 * Строит список смежности для дерева.
 * @param {number} size - Количество узлов в дереве.
 * @param {number[][]} edges - Список рёбер дерева.
 * @return {List<List<Integer>>} - Список смежности.
 */
function buildAdjList(size, edges) {
    const adjList = Array.from({ length: size }, () => []);
    for (const [u, v] of edges) {
        adjList[u].push(v);
        adjList[v].push(u);
    }
    return adjList;
}

/**
 * Находит диаметр дерева.
 * @param {number} n - Количество узлов в дереве.
 * @param {List<List<Integer>>} adjList - Список смежности дерева.
 * @return {number} - Диаметр дерева.
 */
function findDiameter(n, adjList) {
    // Первый BFS для поиска самого удалённого узла от произвольного узла (например, 0)
    const [farthestNode] = findFarthestNode(n, adjList, 0);

    // Второй BFS для поиска диаметра, начиная с самого удалённого узла
    const [, diameter] = findFarthestNode(n, adjList, farthestNode);
    return diameter;
}

/**
 * Находит самый удалённый узел и расстояние до него.
 * @param {number} n 
 * @param {List<List<Integer>>} adjList 
 * @param {number} sourceNode  
 * @return {[number, number]} 
 */
function findFarthestNode(n, adjList, sourceNode) {
    const queue = [sourceNode];
    const visited = Array(n).fill(false);
    visited[sourceNode] = true;

    let maximumDistance = 0;
    let farthestNode = sourceNode;

    while (queue.length > 0) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const currentNode = queue.shift();
            farthestNode = currentNode;

            
            for (const neighbor of adjList[currentNode]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }
        if (queue.length > 0) maximumDistance++;
    }

    return [farthestNode, maximumDistance];
}