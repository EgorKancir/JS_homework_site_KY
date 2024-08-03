const startLesson = '----Урок 6 Classwork';
console.log(startLesson.toUpperCase());

console.log('Додаткові завдання'.toUpperCase());

// 1. Вивести в консоль числа від 1 до 5 всіма циклами
// 2. Який буде останній результат коду:
//  let num = 3;
//         while (num) {
//             console.log(num);
//             num -= 1;
//         }
// 3. Переписати на while
// for (let number = 0; number < 5;) {
//             console.log(`Число ${number}`);
//         }
// 4. Написати скрипт який буде перевіряти середній бал успішності учня. 
// Прервати роботу циклу, коли середній бал буде меньше 7.
// 5. Виведіть в консоль всі непарні числа за допомогою циклу for

console.log('1)');

let numberOne = 1;
while (numberOne <= 5) {
    console.log(numberOne);
    numberOne += 1;
}

const maxNumber = 5;
for (let i = 1; i <= maxNumber ; i++) {
    console.log(i);
}

console.log('2)');

let num = 3;
while (num) {
    console.log(num);
    num -= 1;
}

console.log('3)');

let number = 0;
while (number < 5) {
    console.log(`Число ${number}`); 
    number += 1;
}

console.log('4)');

const ratingMathematics = 5;
const ratingHistory = 8;
const ratingEnglish = 9;
const ratingBiology = 10;
const ratingChemistry = 8;
const ratingPhysics = 9;
const ratingArt = 10;
let ratingStudent;
do {
    ratingStudent = (ratingMathematics + ratingHistory + ratingEnglish + ratingBiology + ratingChemistry + ratingPhysics + ratingArt) / 7;
    if (ratingStudent < 7) {
        console.log(`Незараховано твоя оцінка ${Math.floor(ratingStudent)}`);
        break;
    }
}while (ratingStudent < 7);
if (ratingStudent >=7) {
    console.log(`Молодець! Зараховано твоя оцінка ${Math.floor(ratingStudent)}`);
}

console.log('5)');

const numberClass = 10;
for (let i = 0; i < numberClass; i += 1) {
    if (i % 2 === 0) {
        continue;
    }   
    console.log('Непарне: ', i);
}

console.log('Творчі завдання'.toUpperCase());
// 1. Напиши цикл, який пропонує в prompt ввести число, більше 100. Якщо відвідувач ввів інше число – попросити 
// ввести ще раз и т.д.
// 2. Напиши скрипт який підраховує загальну суму зп працівників. Кількість робітників зберігається в змінній employees.
//  ЗП кожного працівника це випадкове число від 500 до 5000.  Записати суму в змінну totalSalary і вивести в на сторінку.
// 3. Напиши скрипт який порахує суму всіх парних чисел, які входять в діапазон чисел в змінних від min до max. Наприклад, 
// якщо min=0 и max=5, то діапазон 0-5, і в ньому 2 парних числа - 2 та 4, їх сума 6. Можна зробити отримання 
// значень мінімального і максимального числа через інпут.
// 4.Цикл повинен питати число поки відвідувач не введе число, більше 100, або не натисне кнопку Відміна (ESC).

console.log('1)');

let userNumber = '';
do {
    userNumber = prompt('Введіть будь-яке число яке більше за 100', '');
    if (userNumber < 100) {
        alert('Введіть число ще раз');
    }
} while (userNumber <= 100);
console.log(`Число користувача яке більше за (100): ${userNumber}`);


console.log('2)');

const employees = 10;
let totalSalary = 0;
for (let i = 0; i < employees; i++) {
    const salary = Math.floor(Math.random() * 4501) + 500;
    totalSalary += salary;
}
alert(`Загальна сума зарплати: ${totalSalary} грн.`);

console.log('3)');

let numberSum = 0;
for (let i = 3; i <= 13; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(`Парне число: ${i}`);
    numberSum += i;
}
console.log(`Сума парних чисел: ${numberSum}`);

console.log('4)');

let controlNumber = '';
do {
    controlNumber = prompt('Введіть число яке більше за 100', '');
    if (controlNumber < 100) {
        alert('Введіть число ще раз');
    }
} while (controlNumber <= 100);
alert('Супер ваше число більше за 100');

console.log('Супертворчі завдання'.toUpperCase());

console.log('1)');

const ADMIN_PASSWORD = '12345678';
let userPin = prompt('Введіть пароль (адміністратора)');
let message;
switch (userPin) {
    case '12345678' : message = 'Ласкаво просимо'; break;
    default : message = 'Доступ заборонений, невірний пароль!'; break;
}
if (userPin === null) {
    message = 'Скасовано користувачем';
}
alert(message);

console.log('2)');

let credits = 23580;
const pricePerPazzle = 3000;
let pazzleUser = prompt('Яку кількість пазлів ви бажаєте придбати');
let messageUser;
if (pazzleUser === null) {
    alert('Скасовано користувачем');
}
let totalPrice;
let remaindererUser;
do {
    totalPrice = pricePerPazzle * pazzleUser;
    remaindererUser = credits - totalPrice;
    if (totalPrice <= credits) {
        alert(`Ви купили ${pazzleUser} пазлів, на рахунку залишилося ${remaindererUser} кредитів.`);
        break;
    }
} while (totalPrice <= credits);
if (totalPrice >= credits) {
    
} alert('Недостатньо коштів на рахунку!');

console.log('ДЗ');
// 1) Вивести на екран всі числа від 1 до 10 за допомогою циклу while.
// 2) Вивести на екран всі парні числа від 2 до 20 за допомогою циклу for. 
// Якщо число парне, пропустити його за допомогою continue.
// 3) Вивести на екран таблицю множення числа 7 за допомогою циклу for.
// 4) Створити масив з числами від 1 до 5. Вивести на екран кожен елемент масиву за допомогою циклу while.
// 5) Створити масив із числами від 1 до 10. За допомогою циклу for пройтися по масиву та вивести на екран 
// всі числа, крім числа 7. Якщо зустрінете число 7, закінчити виконання циклу за допомогою оператора break.
// 6) Створити скрипт, який виводить на екран всі числа , які менші за n. Якщо зустрічається число, що більше
// або дорівнює n, цикл повинен бути закінчений за допомогою break.
// 7) За допомогою циклу while вивести на екран всі числа від 1 до 20, крім чисел, кратних 3. Якщо зустрінете 
// число, кратне 3, цикл повинен продовжити виконання за допомогою оператора continue.

console.log('1)');

let numberCounter = 1;
while (numberCounter <= 10) {
    console.log(numberCounter);
    numberCounter += 1;
}

console.log('2)');

const numberList = 20;
for (let i = 2; i < numberList; i++) {
    if (i % 2 === 1) {
        continue;
    }
    console.log(`Парне ${i}`);    
}

console.log('3)');

const mainNumber = 7;
let multiplication;
for (let i = 1; i <= 10; i++) {
    multiplication = mainNumber * i;
    console.log(`${mainNumber} * ${i} = ${multiplication}`)
}

console.log('4)');

const numberGroup = [1, 2, 3, 4, 5];
let groupIndex = 0;
while (groupIndex <= 4) {
    console.log(`Елемент масиву ${numberGroup[groupIndex]}`);
    groupIndex += 1;
}

console.log('5)');

const sevenGroup = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < sevenGroup.length; i++) {
    if (i === 7) {
        break;
    }
    console.log(`Елемент великого масиву ${sevenGroup[i]}`);
}

console.log('6)');

const n = 15;
for (let i = 0; i <= n; i++) {
    if (i >= n) {
        break;
    }
    console.log(`Число менше за ${n}: ${i}`);    
}

// console.log('7)');

// let myNumber = 1;
// while (myNumber <= 20) {
//     if (myNumber % 3 === 0) {
//         continue;
//     }
//     console.log(myNumber);
//     myNumber++;
// }





















