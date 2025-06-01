// 1. Создание массива
const arr = [];

// 2. Итерирование по массиву
for (let i = 0; i < arr.length; i++) console.log(arr[i]);
arr.forEach(i => console.log(i));
for (const i of arr) console.log(i);

// 3. Фильтрация
const filtered = arr.filter(x => x > 0);

// 4. Поиск и условия
const found = arr.find(x => x === 1);
const index = arr.findIndex(x => x === 1);
const hasValue = arr.includes(1);
const any = arr.some(x => x > 10);     // есть ли хотя бы один
const all = arr.every(x => x > 0);     // все ли удовлетворяют

// 5. Map-преобразование
const mapped = arr.map(x => x * 2);

// 6. Reduce / fold
const sum = arr.reduce((acc, x) => acc + x, 0);

// 7. Сортировка (не мутируя оригинал)
const sorted = [...arr].sort((a, b) => a - b);

// 8. Минимум / максимум
const min = Math.min(...arr);
const max = Math.max(...arr);

// 9. Количество элементов
const count = arr.length;

// 10. Слайсы
const firstTwo = arr.slice(0, 2);
const rest = arr.slice(2);

// 11. Объединение массивов
const combined = [...arr1, ...arr2];

// 12. Разворот массива (без мутации)
const reversed = [...arr].reverse();

// 13. Удаление элемента по индексу (иммутабельно)
const indexToRemove = 2;
const withoutOne = [...arr.slice(0, indexToRemove), ...arr.slice(indexToRemove + 1)];

// 14. Добавление элементов
arr.unshift(0);  // в начало
arr.push(99);    // в конец

// 15. Проверка на пустоту
const isEmpty = arr.length === 0;

// 16. Дедупликация
const unique = [...new Set(arr)];