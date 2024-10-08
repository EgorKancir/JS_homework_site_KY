const startLesson = '----Урок 3 Classwork';
console.log(startLesson.toUpperCase());
// 2. Додаткові завдання
// Створити змінну, яка містить рядок з вашим ім'ям та прізвищем. Використовуючи метод .length, вивести в консоль кількість символів у рядку.
// Створити змінну, яка містить рядок з вашим ім'ям. Використовуючи метод .toUpperCase(), перетворити рядок у верхній регістр та вивести результат в консоль.
// Створити змінну, яка містить рядок з вашим ім'ям. Використовуючи метод .charAt(), вивести перший символ вашого імені в консоль.
// Створити змінну, яка містить рядок з вашим ім'ям та прізвищем. Використовуючи метод .indexOf(), знайти і вивести в консоль позицію, на якій знаходиться пробіл між ім'ям та прізвищем.
// Створити змінну, яка містить рядок з вашим ім'ям. Використовуючи метод .replace(), замінити першу літеру вашого імені на символ "@" та вивести результат в консоль.
// Створити змінну, яка містить рядок зі словом "JavaScript". Використовуючи метод .substring(), вивести підстроку, яка містить перші 4 символи слова "Java".

// 1
const info = 'Канцир Єгор';
console.log(info.length);
// 2
console.log(info.toUpperCase());
// 3
console.log(info.charAt(0));
// 4
console.log(info.indexOf(' '));
// 5
console.log(info.replace('К', '@'));
// 6
let lang = 'JavaScript';
console.log(lang.substring(0, 4));

// 3. Творчі завдання
// Напиши скрипт який виведе рядок в форматі: “Гість x y поселяється в n номер g”, підставивши замість x, y, n, g значення змінних.
// Створи програму яка буде обрізати повідомлення від лишніх пропусків з обох сторін.
// Створи змінну яка буде зберігати рядок “Ваш баланс поповнено на 1”. Додай в кінець рядка довільну кількість нулів. Довжину рядка дізнайся за допомогою властивості.

// 1
let x = 'Tom';
let y = 'Holand';
let n = 'готель';
let g = '110';
console.log(`Гість ${x} ${y} поселяється в ${n} номер ${g}`);
// 2
const textBig = '  Привіт світ   ';
console.log(textBig.trim());
// 3
const balance = 'Ваш баланс поповнено на 1';
console.log(balance.padEnd(30, '0'));

const homework = '----Homework';
console.log(homework.toUpperCase());
// 1) Вивести result в консоль. Перевірити тип змінної result= 5+5+’5’.
// 2) Створіть змінну email з вашою електронною адресою. Напишіть скрипт, який перевіряє чи містить змінна email символ @ і рахує загальну кількість символів. Результат виведіть в консоль.
// 3) Записати в окремих змінних кожне слово: My, name, is. Поєднати всі слова в змінну fullName. До змінної fullName додати ‘Viktor’. fullName вивести в консоль.
// 4) Створіть змінну userName з ім’ям користувача і змінну payment з сумою до оплати. За допомогою шаблонного рядка виведіть на екран через alert повідомлення на прикладі цього: «Дякуємо, Олександро! До сплати 300 гривень»

// 1
const result = 5 + 5 + '5';
console.log(result);
// 2
let email = 'kanciregor@gmail.com';
console.log(email.includes('@'));
console.log(email.length);
// 3
const textMy = 'My ';
const textName = 'name ';
const textIs = 'is ';
let fullName = textMy + textName + textIs + 'Viktor' + '.';
console.log(fullName);
// 4
let userName = 'Олександро';
let payment = 300;
alert(`«Дякуємо, ${userName}! До сплати ${payment} гривень»`)