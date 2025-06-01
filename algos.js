// Очередь (FIFO)
const queue = [];
queue.push(x);       // добавление
queue.shift();       // удаление

// Стек (LIFO)
const stack = [];
stack.push(x);       // добавление
stack.pop();         // удаление

// Двусторонняя очередь (Deque)
const deque = [];
deque.push(x);       // в конец
deque.unshift(y);    // в начало
deque.pop();         // с конца
deque.shift();       // с начала

// Связный список (ручная реализация)
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const head = new Node(1);
head.next = new Node(2);

// Множество (Set)
const set = new Set([1, 2]);
set.add(3);
set.delete(2);
set.has(1);

// Хэш-таблица / словарь (Map)
const map = new Map();
map.set('key', 123);
map.get('key');
map.has('key');
map.delete('key');

// Куча (MinHeap)
class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) { /* push и bubbleUp */
  }

  extractMin() { /* pop и sinkDown */
  }
}

// Бинарный поиск (на отсортированном массиве)
function binarySearch(arr, target) {
  let l = 0, r = arr.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (arr[mid] === target) return mid;
    arr[mid] < target ? l = mid + 1 : r = mid - 1;
  }
  return -1;
}

// Обход графа — DFS (стек) / BFS (очередь)
function dfs(root) {
  const stack = [root], visited = new Set();
  while (stack.length) {
    const node = stack.pop();
    if (visited.has(node)) continue;
    visited.add(node);
    stack.push(...node.neighbors);
  }
}

function bfs(root) {
  const queue = [root], visited = new Set();
  while (queue.length) {
    const node = queue.shift();
    if (visited.has(node)) continue;
    visited.add(node);
    queue.push(...node.neighbors);
  }
}
