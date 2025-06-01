// 📌 Вывод данных (print / log)
{
  console.log("Hello");
  console.log(arr);
  console.log(JSON.stringify(obj));
}

// 📌 Форматирование вывода
{
  const name = "Alice";
  const age = 30;

  console.log(`Name: ${name}, Age: ${age}`); // шаблонные строки
  console.log("Name:", name, "| Age:", age); // через запятую
}

// 📌 Измерение времени выполнения
{
  console.time("task");
  yourFunction();
  console.timeEnd("task");
}

{
  const t0 = performance.now();
  // код
  const t1 = performance.now();
  console.log(`Time: ${t1 - t0} ms`);
}

// 📌 Профилирование кода
{
  console.profile("MyProfile");
  // код
  console.profileEnd();
}

// 📌 Отладочные принты
{
  console.log("DEBUG: x =", x);
  console.trace(); // показывает стек вызовов
}

{
  console.table(arr); // красиво выводит массив объектов
}

// 📌 Тестовые данные и генерация input'ов
{
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Генерация массива из 100 случайных чисел от 1 до 1000
  const arr = Array.from({ length: 100 }, () => getRandomInt(1, 1000));

  // Генерация строки
  const str = Array.from({ length: 10 }, () =>
      String.fromCharCode(getRandomInt(97, 122))
  ).join('');
}