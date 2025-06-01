// Создание
const set = new Set([1, 2, 3]);
const map = new Map();

// Добавление / удаление
set.add(4);
set.delete(2);
map.set('a', 1);
map.delete('a');

// Проверка наличия
set.has(1);
map.has('a');

// Итерирование
for (const val of set) console.log(val);
for (const [k, v] of map) console.log(k, v);

// Счётчик частот
const freq = new Map();
for (const x of data) {
  freq.set(x, (freq.get(x) || 0) + 1);
}

// Сортировка по значениям
const sortedMap = new Map([...map].sort((a, b) => a[1] - b[1]));

// Множества: объединение, пересечение, разность
const union = new Set([...a, ...b]);
const inter = new Set([...a].filter(x => b.has(x)));
const diff = new Set([...a].filter(x => !b.has(x)));