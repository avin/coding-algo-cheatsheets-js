// ---------------------------------------------------
// 📌 Создание объекта
// ---------------------------------------------------
const obj = {}; // литерал
const obj2 = new Object(); // конструктор


// ---------------------------------------------------
// 📌 Доступ к свойствам
// ---------------------------------------------------
const person = {name: "Иван", age: 25};
console.log(person.name);    // через точку
console.log(person["age"]);  // через скобки


// ---------------------------------------------------
// 📌 Деструктуризация объектов
// ---------------------------------------------------
const {name, age} = person;
const {name: firstName, height = 180} = person; // переименование и значение по умолчанию


// ---------------------------------------------------
// 📌 Итерация по объекту
// ---------------------------------------------------
for (const key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key, person[key]);
  }
}
Object.keys(person).forEach(key => console.log(key, person[key]));
Object.values(person).forEach(value => console.log(value));
Object.entries(person).forEach(([key, value]) => console.log(key, value));


// ---------------------------------------------------
// 📌 Объединение / копирование объектов
// ---------------------------------------------------
const defaults = {active: true, role: "user"};
const settings = {role: "admin", theme: "dark"};
const merged1 = Object.assign({}, defaults, settings);
const merged2 = {...defaults, ...settings};


// ---------------------------------------------------
// 📌 Проверка наличия свойства
// ---------------------------------------------------
"role" in settings;               // true
settings.hasOwnProperty("theme"); // true


// ---------------------------------------------------
// 📌 Заморозка и запечатывание объекта
// ---------------------------------------------------
Object.freeze(person); // защищает от изменений (но поверхностно)
Object.seal(person);   // запрещает добавление/удаление свойств, но позволяет менять значения


// ---------------------------------------------------
// 📌 Создание объекта без прототипа
// ---------------------------------------------------
const pureObject = Object.create(null);
pureObject.custom = 123;


// ---------------------------------------------------
// 📌 Прочие полезные методы
// ---------------------------------------------------
Object.getPrototypeOf(person);      // прототип
Object.defineProperty(person, "id", {value: 1, writable: false, configurable: false});
delete person.id;                   // не сработает, если configurable: false