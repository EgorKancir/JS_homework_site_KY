const startLesson = '----Урок 9 Classwork';
console.log(startLesson.toUpperCase());

console.log('Додаткові завдання'.toUpperCase());
// 1. Напишіть функцію, яка приймає на вхід масив чисел і повертає новий масив, в якому кожний елемент є квадратом 
// відповідного елементу вхідного масиву.
// 2. Знайдіть суму елементів масиву з використанням колбек-функції
// const arr = [1, 2, 3, 4, 5];
// function sumArray(arr, callback) {
//    // пиши код тут
// }
// sumArray(arr, cb);
// 3. Напишіть функцію, яка повертає новий масив, в якому всі елементи масиву помножені на задане число, з використанням 
// колбек-функції
// 4. const arr = [1, 2, 3, 4, 5];
// function multiplyArray(arr, num, callback) {
//     // код  
// }
// multiplyArray(arr, 3, () => {});
// 5. Напиши стрілкову функцію myNewArrowFunction(), яка приймає всі аргументи за допомогою ...rest і в результаті 
// виводить масив цих аргументів у консоль.
// Для перевірки:
// myNewArrowFunction(1, 2, 3);
// myNewArrowFunction(100, 200, 300, 400, 500);
// myNewArrowFunction("Js", "Python", "Java", "PHP", "C++");

console.log('1)');

function squareElements(numbers) {
    const squaredNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        squaredNumbers.push(numbers[i] * numbers[i]);
    }
    return squaredNumbers;
}
console.log(squareElements([2, 3, 5, 78]));

console.log('2)');

const arr = [1, 2, 3, 4, 5];
function sumArray(arr, callback) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += callback(arr[i]);
    }
    return sum;
}
function add(num) {
    return num;
}
const result = sumArray(arr, add);
console.log(result); 

console.log('3)');

function multiplyArray(arr, multiplier, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], multiplier))        
    }
    return result;
}
function multiply(element, multiplier) {
    return element * multiplier;
}
console.log(multiplyArray([1, 2, 3, 4, 5], 2, multiply));

console.log('5)');

const myNewArrowFunction = (...rest) => {
    const restArr = [];
    for (let i = 0; i < rest.length; i++) {
        restArr.push(rest[i]);
    }
    return restArr;
}
console.log(myNewArrowFunction(1, 2, 3));
console.log(myNewArrowFunction(100, 200, 300, 400, 500));
console.log(myNewArrowFunction("Js", "Python", "Java", "PHP", "C++"));

console.log('Творчі завдання'.toUpperCase());
// 1. Створити стрілкову функцію hello1(), яка при визові буде вертати текст “Привіт JavaScript”. 
// 2. Напишіть стрілкову функцію hello2(), яка при виклику буде приймати змінну name (наприклад, «Василь») 
// і виводити рядок (в нашому випадку «Привіт, Василь»). 
// 3. Напишіть стрілкову функцію mul(n, m), яка приймає два аргументи і повертає добуток, суму і різницю цих 
// аргументів. Перевірте її роботу.  
// 4. Напиши стрілкову функцію myAverageScore , яка у якості аргументу отримує масив з оцінками, і виводить 
// користувачу його середній результат у наступному форматі:

console.log('1)');

const hello1 = () => {
    return 'Привіт JavaScript';
}
console.log(hello1());

console.log('2)');

const hello2 = (name) => {
    return `Привіт ${name}`
}
console.log(hello2('Єгор'));

console.log('3)');

const mul = (n, m) => {
    let multiply = n * m; 
    let sum = n + m;
    let difference = n - m;
    console.log(`Добуток ${multiply}`);
    console.log(`Сума ${sum}`);
    console.log(`Різниця ${difference}`);    
} 
mul(10, 5);

console.log('4)');

const myAverageScore = scores => {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];        
    }
    const average = sum / scores.length;
    console.log(`Середній результат дорівнює ${average}`);
}
myAverageScore([85, 90, 78, 92, 88]);

console.log('ДЗ'.toUpperCase());
// 1. Напишіть функцію, яка приймає масив чисел і колбек-функцію. Функція повинна застосовувати колбек-функцію 
// до кожного елементу масиву та повертати новий масив, що містить результати застосування колбек-функції до 
// кожного елементу.
// const applyCallbackToEachElement = (arr, callback) => {
// }
// const arr = [1, 2, 3, 4, 5];
// const squareCallback = ;
// const result = applyCallbackToEachElement(arr, squareCallback);
// console.log(result); // [1, 4, 9, 16, 25]
// 2. Розрахунок дисконтної ціни
// Створіть функцію, яка розраховує дисконтну ціну на товар з урахуванням знижки. Функція повинна приймати 
// вартість товару та відсоток знижки як аргументи. Використайте стрілкову функцію та колбек.
// const calculateDiscountedPrice = (price, discount, callback) => {
// };
// const showDiscountedPrice = ;
// calculateDiscountedPrice(100, 10, showDiscountedPrice); // Discounted price: 90

console.log('1)');

const applyCallbackToEachElement = (arr, callback) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i]));
    }
    return newArr;
}
function subtract(number) {
    return number - 10;
}
console.log(applyCallbackToEachElement([1, 2, 3, 4, 5], subtract));

console.log('2)');

const calculateDiscountedPrice = (price, discount, callback) => {
    console.log(`Сума товару зі знижкою ${discount}% = ${callback(price, discount)}$`);
    
};
const showDiscountedPrice = (price, discount) => {
    return price - (price * discount / 100)
}
calculateDiscountedPrice(100, 10, showDiscountedPrice); 
