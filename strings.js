// 📌 Строка -> массив и обратно
const arr = str.split('');
const str2 = arr.join('');
const chars = Array.from(str);

// 📌 Поиск подстроки
str.includes('abc');     // true / false
str.indexOf('abc');      // позиция или -1

// 📌 Сравнение строк
str1 === str2;
str1.toLowerCase() === str2.toLowerCase();

// 📌 Слияние строк
const merged = str1 + str2;
const merged2 = `${str1}${str2}`;

// 📌 Удаление символов
str.replace(/x/g, '');

// 📌 Замена символов / подстрок
str.replace(/l/g, 'X');       // все 'l'
str.replace('ll', 'XX');      // только первое 'll'

// 📌 Регулярные выражения
const found = /l/.test(str);
const matches = str.match(/l/g);