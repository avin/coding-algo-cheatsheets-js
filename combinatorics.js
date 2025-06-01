// 58. Генерация всех подмножеств (power set)
{
  function subsets(arr) {
    const res = [[]];
    for (const el of arr) {
      const n = res.length;
      for (let i = 0; i < n; i++) {
        res.push([...res[i], el]);
      }
    }
    return res;
  }

  // Пример:
  subsets([1, 2]); // [[], [1], [2], [1,2]]
}


// 59. Генерация всех перестановок (permutations)
{
  function permutations(arr) {
    const res = [];

    function backtrack(path, used) {
      if (path.length === arr.length) {
        res.push([...path]);
        return;
      }
      for (let i = 0; i < arr.length; i++) {
        if (used[i]) continue;
        used[i] = true;
        path.push(arr[i]);
        backtrack(path, used);
        path.pop();
        used[i] = false;
      }
    }

    backtrack([], Array(arr.length).fill(false));
    return res;
  }

  // Пример:
  permutations([1, 2]); // [[1,2], [2,1]]
}


// 60. Генерация всех комбинаций (по k элементов из n)
{
  function combinations(arr, k) {
    const res = [];

    function backtrack(start, path) {
      if (path.length === k) {
        res.push([...path]);
        return;
      }
      for (let i = start; i < arr.length; i++) {
        path.push(arr[i]);
        backtrack(i + 1, path);
        path.pop();
      }
    }

    backtrack(0, []);
    return res;
  }

  // Пример:
  combinations([1, 2, 3], 2); // [[1,2], [1,3], [2,3]]
}


// 61. Генерация всех парных сочетаний (двойной цикл)
{
  function allPairs(arr) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        res.push([arr[i], arr[j]]);
      }
    }
    return res;
  }

  // Пример:
  allPairs([1, 2, 3]); // [[1,2], [1,3], [2,3]]
}