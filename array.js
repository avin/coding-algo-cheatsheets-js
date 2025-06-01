// 📌 Создание массива
const arr = [];

// 📌 Итерирование по массиву
for (let i = 0; i < arr.length; i++) console.log(arr[i]);
arr.forEach(i => console.log(i));
for (const i of arr) console.log(i);

// 📌 Фильтрация
const filtered = arr.filter(x => x > 0);

// 📌 Поиск и условия
const found = arr.find(x => x === 1);
const index = arr.findIndex(x => x === 1);
const hasValue = arr.includes(1);
const any = arr.some(x => x > 10);     // есть ли хотя бы один
const all = arr.every(x => x > 0);     // все ли удовлетворяют

// 📌 Map-преобразование
const mapped = arr.map(x => x * 2);

// 📌 Reduce / fold
const sum = arr.reduce((acc, x) => acc + x, 0);

// 📌 Сортировка (не мутируя оригинал)
const sorted = [...arr].sort((a, b) => a - b);

// 📌 Минимум / максимум
const min = Math.min(...arr);
const max = Math.max(...arr);

// 📌 Количество элементов
const count = arr.length;

// 📌 Слайсы
const firstTwo = arr.slice(0, 2);
const rest = arr.slice(2);

// 📌 Объединение массивов
const combined = [...arr1, ...arr2];

// 📌 Разворот массива (без мутации)
const reversed = [...arr].reverse();

// 📌 Удаление элемента по индексу (иммутабельно)
const indexToRemove = 2;
const withoutOne = [...arr.slice(0, indexToRemove), ...arr.slice(indexToRemove + 1)];

// 📌 Добавление элементов
arr.unshift(0);  // в начало
arr.push(99);    // в конец

// 📌 Проверка на пустоту
const isEmpty = arr.length === 0;

// 📌 Дедупликация
const unique = [...new Set(arr)];