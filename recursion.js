// Рекурсия с базовым случаем
function recur(n) {
  if (n === 0) return;
  recur(n - 1);
}

// Итерация через стек (DFS)
function dfs(root) {
  const stack = [root];
  while (stack.length > 0) {
    const node = stack.pop();
    if (!node) continue;
    // обработка
    stack.push(node.right);
    stack.push(node.left);
  }
}

// Хвостовая рекурсия (в JS работает как обычная)
function tailRec(n, acc = 1) {
  if (n === 0) return acc;
  return tailRec(n - 1, acc * n);
}