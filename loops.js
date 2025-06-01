// Цикл for
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// Цикл while
let i = 0;
while (i <= 10) {
  i++;
}

// do...while
do {
  i--;
} while (i > 0);

// forEach с индексом
arr.forEach((val, idx) => {
  console.log(`index: ${idx}, value: ${val}`);
});

// Условия if / else
if (i === 0) {
  console.log(0);
} else {
  console.log('non 0');
}

// switch-case
switch (i) {
  case 0:
    console.log('=0');
    break;
  case 1:
    console.log('=1');
    break;
  default:
    console.log('other');
}

// break / continue
for (let j = 0; j < 10; j++) {
  if (j % 2 === 0) continue;
  if (j > 8) break;
  console.log(j);
}

// Множественные условия
if (i && b) console.log('both');
if (i || b) console.log('one of');
else console.log('no one');

// Тернарный оператор
const foo = bar === 2 ? 'the 2' : 'other';