// 📌 Наибольший общий делитель (НОД)
{
  function gcd(a, b) {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return Math.abs(a);
  }

  // Пример:
  gcd(24, 36); // 12
}


// 📌 Наименьшее общее кратное (НОК)
{
  function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b);
  }
}


// 📌 Проверка на простое число
{
  function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  // Пример:
  isPrime(13); // true
}


// 📌 Генерация простых чисел (решето Эратосфена)
{
  function sieve(n) {
    const isPrime = Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
    for (let i = 2; i * i <= n; i++) {
      if (isPrime[i]) {
        for (let j = i * i; j <= n; j += i) {
          isPrime[j] = false;
        }
      }
    }
    return isPrime
        .map((val, i) => val ? i : null)
        .filter(x => x !== null);
  }

  // Пример:
  sieve(20); // [2, 3, 5, 7, 11, 13, 17, 19]
}


// 📌 Модульное возведение в степень (быстрое возведение в степень)
{
  function modPow(base, exponent, mod) {
    let result = 1;
    base = base % mod;

    while (exponent > 0) {
      if (exponent % 2 === 1) result = (result * base) % mod;
      base = (base * base) % mod;
      exponent = Math.floor(exponent / 2);
    }

    return result;
  }

  // Пример:
  modPow(2, 10, 1000); // 24
}


// 📌 Факториал и комбинаторные формулы (C(n, k))
{
  function factorial(n) {
    let res = 1;
    for (let i = 2; i <= n; i++) res *= i;
    return res;
  }

  function C(n, k) {
    if (k > n) return 0;
    return factorial(n) / (factorial(k) * factorial(n - k));
  }

  // Пример:
  C(5, 2); // 10
}