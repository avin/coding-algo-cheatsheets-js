// Округление
Math.round(x); // до ближайшего
Math.ceil(x);  // вверх
Math.floor(x); // вниз

// Целочисленное деление и остаток
Math.trunc(x); // обрезает дробную часть
x % y;         // остаток от деления

// Знаки и модуль
-Math.abs(x);  // отрицательное
Math.abs(x);   // модуль
Math.sign(x);  // -1, 0, 1

// Диапазон чисел
const range = Array.from({ length: n }, (_, i) => i + start);

// Преобразование типов
const str = String(val);
const num = Number(str);   // безопаснее
const num2 = +str;         // быстрее, но менее читаемо