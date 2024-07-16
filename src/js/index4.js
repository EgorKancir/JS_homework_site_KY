const startLesson = '----Урок 4 Classwork';
console.log(startLesson.toUpperCase());
// ----Додаткові завдання

// --1)
// Що буде в консолі
// if ("0") {
//  console.log( 'Привіт' );
// }

let hiText;
const numberText = '0';
if (numberText === '0') {
    hiText = 'Привіт'
}
console.log(hiText);

// --2)
// Використовуючи конструкцію if..else, напишіть код, що запитує: ‘Яка “офіційна” назва 
// JavaScript?’ Якщо відвідувач вводить “ECMAScript”, виведіть “Правильно!”, в іншому 
// випадку — виведіть: “Ви не знаєте? ECMAScript!”

let resultQuestion;
let officialName = prompt('Яка “офіційна” назва JavaScript?');
if (officialName === 'ECMAScript') {
    resultQuestion = 'Правильно!';
} else {
    resultQuestion = 'Ви не знаєте? ECMAScript!';
}
alert(resultQuestion);

// --3)
// Використовуючи if..else, напишіть код, що отримує число з інпуту і потім виводить повідомлення на екран:
// 1, якщо значення більше нуля,
// -1, якщо меньше нуля,
// 0, якщо дорівнює нулю.

let inputNumber = prompt('Напишіть будь-яке число');
if (inputNumber >= 1) {
    alert('1');
}else if (inputNumber < 0) {
    alert('-1');
}else if (inputNumber = 0) {
    alert('0');
}else {
    alert(Error);
}

// --4)
// Перепишіть конструкцію if, використовуючи умовний оператор '?':
// let result;
// if (a + b < 4) {
//   result = 'Нижче';
// } else {
//   result = 'Вище';
// }

const a = 1;
const b = 2;
let result = a + b < 4 ? 'Нижче' : 'Вище';
console.log(result);

// ----Творчі завдання

// --2)
// Напиши скрипт який перевіряє можливість відкрити чат з користувачем. Для цього користувач має бути:
// другом
// онлайн
// без режиму не турбувати
// const isOnline = false;
// const isFriend = true;
// const isDnd = false;

const isOnline = false;
const isFriend = true;
const isDnd = false;
let resultChat = isOnline && isFriend && isDnd;
let userChat;
if (resultChat === true) {
    userChat = 'Користувач чекає на вас!';
}else if (resultChat === false) {
    userChat = 'Користувач недоступний.';
}
console.log(userChat);

// --3)
// Напиши скрипт перевірки підписки користувачапід час доступу до контенту. 
// Є три типи підпистки: free, pro та vip. Отримати доступ можуть тільки pro та vip.

const userSubscribe = 'vip';
let userScanner;
if (userSubscribe === 'free') {
    userScanner = 'Заборонено! Ваша підписка не розрахована на це. Збільшіть рівень вашої підписки.';
}else if (userSubscribe === 'pro') {
    userScanner = 'Вітаємо! Вам дозволено.';
}else if (userSubscribe === 'vip') {
    userScanner = 'Вітаємо! Вам дозволено. Гарного вам дня.';
}
console.log(userScanner);
