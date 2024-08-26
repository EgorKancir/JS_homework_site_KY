const startLesson = '----Урок 7 Classwork';
console.log(startLesson.toUpperCase());

console.log('Додаткові завдання'.toUpperCase());

// 1. Cтворити масив Arr1 за значеннями: 1, 5, “4”, “hello” ; і Arr2 зі значеннями: true,2, 
// {}, [“a”], 222 . Вивести в консоль 2-гий елемент (по індексу) кожного з масивів і їх суму.
// 2. Створіть масив рядків. Виведіть в консоль значення першого елементу. Змініть значення останнього елементу.
// 3. Що буде в консолі? Розібрати чому саме такий результат:
// const array = [10, 25, 13, 44, 15];
// array[5] = 30;
// console.log(array);
// array[10] = 5;
// console.log(array);
// array[0] = 15;
// console.log(array);
// 4. Вивести в консоль всі елементи масиву за допомогою циклів for та for…of.
// 5. Порахувати загальну суму покупок в корзині
// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

console.log('1)');

const arr1 = [1, 5, '4', 'hello'];
const arr2 = [true, 2, {}, ['a'], 222];
let arrSum = arr1[1] + arr2[1];
console.log(`Другий елемент масиву №1 ${arr1[1]}`);
console.log(`Другий елемент масиву №2 ${arr2[1]}`);
console.log(`Сума двох елементів ${arrSum}`);

console.log('2)');

const array1 = [7, 6, 8, 4, 34, 6];
array1[5] = 35;
console.log(array1[0]);
console.log(array1);

console.log('3)');

const array = [10, 25, 13, 44, 15];
array[5] = 30;
console.log(array);
array[10] = 5;
console.log(array);
array[0] = 15;
console.log(array);

console.log('4)');

console.log('for');


for (let i = 0; i < array1.length; i++) {
    console.log(`${i}. елемент = ${array1[i]}`);
}

console.log('for of');


for (const elementArray1 of array1) {
    console.log(elementArray1);
}

console.log('5)');

const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
let total = 0;
for (let i = 0; i < cart.length; i++) {
    total += cart[i];
}
console.log(`Загальна сума покупок в корзині: ${total}`);


console.log('Творчі завдання'.toUpperCase());
// 1. Через індекс елемента додати в кінець масиву Arr1 новий елемент зі значенням: 22. 
// Вивести значення кожного елемента масиву Arr1 в консоль.
// 2. Вивести в консоль значення і тип кожного елементу масиву Arr2 за допомогою цикла for… of
// 3. Написати скрипт який порахує сумму всіх парних чисел в масиві
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

console.log('1)');

arr1[4] = 22;
for (let i = 0; i < arr1.length; i++) {
    console.log(`${i}. елемент = ${arr1[i]}`);
}

console.log('2)');
for (let i = 0; i < arr2.length; i++) {
    console.log(`${i}. елемент = ${arr2[i]}`);
    console.log(typeof arr2[i]);
}

console.log('3)');

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
let numbersTotal = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        numbersTotal += numbers[i];
    }
}
console.log(`Сума всіх парних чисел: ${numbersTotal}`);

console.log('Супертворчі завдання'.toUpperCase());
// 1. Напиши скрипт пошуку логіна. Якщо логіна немає, вивести повідомлення 'Користувач [логін] не знайдено.' 
// Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдено.'
//   - Спочатку через for
//   - Потім через for...of
//   - Логіка break
//   - Метод includes() с тернарним оператором
// 2. Напиши скрипт пошуку самого маленького числа в масиві,  при умові, що числа унікальні (не повторюються).
// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber ;
// 3. Напиши скрипт який рахує суму елементів двух масивів. Без методу concat()
// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];

console.log('1)');

const loginArray = ['Yegor', 'PanDA', 'User123', 'Star344'];
let userLogin = prompt('Напишіть ваш Login');
for (let i = 0; i < loginArray.length; i++) {
    if (loginArray.includes(userLogin) === true) {
        alert(`Користувача ${userLogin} знайдено`);
        break;
    } else {
        alert(`Користувача ${userLogin} не знайдено`);
    }   
}

console.log('2)');

const numbersGroup = [51, 18, 13, 24, 7, 85, 19];
let minNumber = numbersGroup[0];
for (let i = 0; i < numbersGroup.length; i++) {
    if (numbersGroup[i] < minNumber) {
        minNumber = numbersGroup[i];
    }
    console.log("Найменше число:", minNumber);
}

console.log('3)');

const array3 = [5, 10, 15, 20];
const array4 = [10, 20, 30];
let array3Total = 0;
let array4Total = 0;
for (let i = 0; i < array3.length; i++) {
    array3Total += array3[i];    
}
for (let i = 0; i < array4.length; i++) {
    array4Total += array4[i];    
}
let arrayTotal = array3Total + array4Total;
console.log(`Сума двох масивів дорівнює ${arrayTotal}`);


console.log('ДЗ'.toUpperCase());
// 1. Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.
// 2. Створити масив із трьох рядків. Додати до масиву ще одну рядків.
// 3. Створити скрипт який поверне суму всіх чисел в масиві.
// 4. Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.
// 5. Створити масив із 5-ти рядків. Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.
// 6. Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.
// 7. Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.

console.log('1)');

const numberBox = [5, 55, 3];
numberBox[1] = 10;
console.log(numberBox);

console.log('2)');

const bigBox = [2, 4, 8];
bigBox.push(33);
console.log(bigBox);

console.log('3)');

const box = [8, 50, 1];
let boxTotal = 0;
for (let i = 0; i < box.length; i++) {
    boxTotal += box[i];   
}
console.log(`Загальна сума масиву дорівнює ${boxTotal}`);

console.log('4)');

let superBox = [1, 2, 3, 4, 5];
for (let i = 0; i < superBox.length; i++) {
    console.log(`${i}. число масиву є ${superBox[i]}`);    
}

console.log('5)');

const gigaBox = [
    [3, 5, 8],
    [3, 6, 7, 9, 5, 4, 8],
    [2, 1],
    [3],
    [4, 66, 77, 55, 44, 33]
];
for (let i = 0; i < gigaBox.length; i++) {
    if (gigaBox[i].length >=5) {
        console.log(gigaBox[i]);
    }
}

console.log('6)');

const box10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let maxNumber = 0;
for (let i = 0; i < box10.length; i++) {
    if (box10[i] > maxNumber) {
        maxNumber = box10[i];
    }
}
console.log(`Найбільшим числом в масиві є ${maxNumber}`);

console.log('7)');

let total10;
for (let i = 0; i < box10.length; i++) {
    if (box10[i] % 2 === 0) {
        console.log(`Парним числом в масиі є ${box10[i]}`);
    }
}




























