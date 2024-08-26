const startLesson = '----Урок 9 Classwork';
console.log(startLesson.toUpperCase());

console.log('Додаткові завдання'.toUpperCase());
// 2. Напиши функцію яка повертає буль як результат перевірки числа на парність:
// console.log(isEven(4)); // true
// console.log(isEven(3)); // false
// У цій функції ми перевіряємо, чи є передане число парним, повертаючи true якщо так, та false у протилежному випадку.
// 3. Напиши функцію яка повертає найбільше число в масиві:
// let array = [1, 3, 2, 5, 4];
// let max = findMaxNumber(array);
// console.log(max); // 5
// У цій функції ми проходимо по масиву чисел та знаходимо найбільше число. Його повертаємо як результат функції.
// 4. Напиши функцію яка повертає факторіал числа:
// function factorial(number) {
//     let result = 1;
//     for(let i = 2; i <= number; i++) {
//       result *= i;
//     }
//     return result;
// } 
// console.log(factorial(5)); // 120

console.log('2)');

const isEven = function(num) {
    if (num % 2 === 0) {
        console.log(true);
        return;
    }
    console.log(false);
};
console.log(isEven(6));

console.log('3)');

const array1 = [1, 3, 2, 5, 4, 47, 3];
const func1 = function(arr) {
    let minNum = 0;
    for (let i = 0; i < arr.length; i++) { 
        if (arr[i] > minNum) {
            minNum = arr[i];
        } 
    }
    console.log(`Найбільше число в масиві ${minNum}`);
}
console.log(func1(array1));

console.log('4)');

function factorial(number) {
    let result = 1;
    for(let i = 2; i <= number; i++) {
      result *= i;
    }
    return result;
} 
console.log(factorial(5)); 


console.log('Творчі завдання'.toUpperCase());
// 1. Створити функцію hello1(), яка при визові буде вертати текст “Привіт JavaScript”. 
// 2. Напишіть функцію hello2(), яка при виклику буде приймати змінну name (наприклад, «Василь») і 
// виводити рядок (в нашому випадку «Привіт, Василь»). 
// 3. Напишіть функцію mul(n, m), яка приймає два аргументи і повертає добуток, суму і різницю цих 
// аргументів. Перевірте її роботу.  
// 4. Напиши функцію myAverageScore , яка у якості аргументу отримує масив з оцінками, і
// виводить користувачу його середній результат у наступному форматі:
// Myaveragescore: A (якщо середня оцінка від 91 до 100)
// My average score: B (якщо середня оцінка від 81 до 90)
// My average score: C (якщо середня оцінка від 71 до 80)
// My average score: D (якщо середня оцінка від 70 і менше)
// Для перевірки:
// console.log(myAverageScore([100, 75, 81, 96]));
// console.log(myAverageScore([45, 63, 85, 70]));
// console.log(myAverageScore([77, 82, 60, 58]));
// console.log(myAverageScore([93, 99, 93, 96]));

console.log('1)');

function hello1() {
    console.log('Привіт JavaScript');
}
console.log(hello1());

console.log('2)');

function hello2(name) {
    console.log(`Привіт, "${name}"`);
}
console.log(hello2('Василь'));

console.log('3)');

function mul(n, m) {
    let product = n * m;
    let sum = n + m;
    let difference = n - m;   
    console.log(`Добуток = ${product}; Сума = ${sum}; Різниця = ${difference};`);
}
console.log(mul(20, 14));

console.log('4)');

const myAverageScore = function(arrayNum) {
    let total = 0;
    for (let i = 0; i < arrayNum.length; i++) {
        total += arrayNum[i];
    }
    let averageRating = total / arrayNum.length;  
    let resultRating;
    switch (true) {
        case (averageRating >= 91 && averageRating <= 100) :
        resultRating = 'A';
        break;
        case (averageRating >= 81 && averageRating <= 90) :
        resultRating = 'B';
        break;
        case (averageRating >= 71 && averageRating <= 80) :
        resultRating = 'C';
        break;
        case (averageRating >= 0 && averageRating <= 70) :
        resultRating = 'D';
        break;
        default: 
        console.log('Упс! Щось пішло не по плану...');
        break;
    }
    console.log(`Середній результат: ${resultRating}`);
}
myAverageScore([100, 75, 81, 96]);
myAverageScore([45, 63, 85, 70]);
myAverageScore([77, 82, 60, 58]);
myAverageScore([93, 99, 93, 96]);


console.log('Супертворчі завдання'.toUpperCase());
// 1. Напиши функцію logItems(items) для перебора і логування массива
//     logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
//     logItems([1, 2, 3, 4, 5]);
//     logItems(['клавиатура', 'наушники', 'часы']);
// 2. Напиши скрипт пошуку логіна
// - Якщо логіна немає, вивести повідомлення 'Користувач [логін] не знайдено.'
// - Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдено.'
//     const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
//     const loginToFind = 'aj4xth3m4n';
// 3. Напиши функцию findSmallesNumber(numbers) пошуку самого маленького числа в масиві, при умові, що числа 
// унікальні (не повторюються).
//     console.log(findSmallesNumber([3, 8, 12, -2, 15])); // -2
//     console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
//     console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4
// 4. Напиши функцию changeCase(string) яка замінює регістр кожного символа в рядку на протилежний. Наприклад, якщо рядок «JavaScript», то на виході повинно бути «jAVAsCRIPT».
//     console.log(changeCase('qweRTY')); // QWErty
//     console.log(changeCase('mAnGo')); // MaNgO
//     console.log(changeCase('AjAx')); // aJaX
// 5. Напиши функцию slugify(string) яка отримує рядок і повертає URL-slug. Заголовок статті складається 
// тільки з букв та пропусків
//     console.log(slugify('Top 10 benefits of React framework'));//top-10-benefits-of-react-framework
//     console.log(slugify('Azure Static Web Apps are Awesome'));
//     console.log(slugify('Technical writing tips for non-native English speakers'));

console.log('1)');

function logItems(items) {
    for (const element of items) {
        console.log(element);
    }
}
logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
logItems([1, 2, 3, 4, 5]);
logItems(['клавиатура', 'наушники', 'часы']);

console.log('2)');

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
function loginSearch(loginToFind) {
    let resultLogin;
    if (logins.includes(loginToFind) === true) {
        resultLogin = `Користувач ${loginToFind} знайдено.`
    } else {
        resultLogin = `Користувач ${loginToFind} не знайдено.`
    }
    console.log(resultLogin);
}
loginSearch('aj4xth3m4n');

console.log('3)');

function findSmallesNumber(arraySmall) {
    let smallNum = arraySmall[0];
    for (let i = 1; i < arraySmall.length; i++) {
        if (arraySmall[i] < smallNum) {
            smallNum = arraySmall[i];
        }
    }
    return smallNum;
}
console.log(findSmallesNumber([3, 8, 12, -2, 15])); // -2
console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4

console.log('4)');

function changeCase(textDef) {
    let newText = '';
    for (let i = 0; i < textDef.length; i++) {
        let letter = textDef[i];
        newText += letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase();
    }
    console.log(`Before --> ${textDef} and After --> ${newText}`);
}
console.log(changeCase('qweRTY')); // QWErty
console.log(changeCase('mAnGo')); // MaNgO
console.log(changeCase('AjAx')); // aJaX

console.log('5)');

function slugify(urlText) {
    let textToArray = urlText.split(' ');
    let arrayToUrl = textToArray.join('-');
    let redyUrl = '';
    for (let i = 0; i < arrayToUrl.length; i++) {
        let urlLetter = arrayToUrl[i];
        redyUrl += urlLetter === urlLetter.toUpperCase() ? urlLetter.toLowerCase() : urlLetter.toLowerCase();
    }
    console.log(redyUrl);
}
console.log(slugify('Top 10 benefits of React framework'));//top-10-benefits-of-react-framework
console.log(slugify('Azure Static Web Apps are Awesome'));
console.log(slugify('Technical writing tips for non-native English speakers'));


console.log('ДЗ'.toUpperCase());
// Завдання 1
// Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде 
// виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].
// Нумерація повинна починатися з 1. Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 
// буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.
// Завдання 2
// Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію 
// calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну 
// гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.
// Завдання 3
// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок 
// (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.
// Завдання 4
// Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.
// Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.
// Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка 
// три крапки '...', після чого повертає укорочену версію.
// Завдання 5
// Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. Функція перевіряє її на вміст 
// слів spam і sale. Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція 
// повертає false. Слова в рядку можуть бути в довільному регістрі.
// Завдання 6
// Напиши скрипт з наступним функціоналом:
// При завантаженні сторінки користувачеві пропонується в prompt ввести число. Введення зберігається в змінну input 
// і додається в масив чисел numbers.
// Операція введення числа користувачем і збереження в масив триває до тих пор, пір, поки користувач 
// не натисне Cancel в prompt.
// Після того як користувач припинив введення натиснувши Cancel, якщо масив не порожній, необхідно порахувати суму всіх 
// елементів масиву і записати її в змінну total. Використовуй цикл for або for...of. Після чого в консоль виведи рядок 
// 'Загальна сума чисел дорівнює [сума]'.
// Робити перевірку того, що користувач ввів саме число, а не довільний набір символів, не обов'язково. Якщо хочеш, в 
// разі некоректного введення, показуй alert з текстом 'Було введено не число, попробуйте ще раз', при цьому результат 
// prompt записувати в масив чисел не потрібно, після чого знову користувачеві пропонується ввести число в prompt.
// let input;
// const numbers = [];
// let total = 0;

console.log('1)');

function logItems(arrayItems) {
    for (let i = 0; i < arrayItems.length; i++) {
        let itemNum = i + 1;
        console.log(`${itemNum} - ${arrayItems[i]}`);    
    }
}
logItems(['Mango', 'Poly', 'Ajax']);

console.log('2)');

function calculateEngravingPrice(message, pricePerWord) {
    let fullPrice = message.length * pricePerWord;
    console.log(`Ціна гравіювання слова "${message}" = ${fullPrice} Euro`);
}
calculateEngravingPrice('Love', 3);

console.log('3)');

function findLongestWord(string) {
    let stringArray = string.split(' ');
    let bigString = stringArray[0];
    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i].length > bigString.length) {
            bigString = stringArray[i];
        }        
    }
    console.log(`Найдовшим словом з ряду слів (${string}) є "${bigString}".`);   
    return bigString;
}
findLongestWord('Велике маленьке сильне слабке довге коротке');

console.log('4)');

function formatString(string) {
    let stringArray = string.split('');
    do {
        if (stringArray.length > 40) {
            stringArray.pop();
        }
    } while (stringArray.length > 40);
    stringArray.push('...')
    console.log(stringArray.join(''));
}
formatString('Apple — американська корпорація з офісом у Купертіно, що проєктує та розробляє побутову електроніку, програмне забезпечення й онлайн-сервіси.');

console.log('5)');

function checkForSpam(message) {
    const normalizedMessage = message.toLowerCase();
    return normalizedMessage.includes('spam') || normalizedMessage.includes('sale');
}
console.log(checkForSpam('Я так довго мріяв про цей смартфон, і нарешті він потрапив під sale. Не міг встояти перед такою вигідною пропозицією.'));

console.log('6)');

let input;
const numbers = [];
let totalS = 0;
while (true) {
    input = prompt('Введіть число:');
    if (input === null) {
        break;
    }
    const number = Number(input);
    if (isNaN(number)) {
        alert('Було введено не число, попробуйте ще раз');
    } else {
        numbers.push(number);
    }
}
if (numbers.length > 0) {
    for (const number of numbers) {
        totalS += number;
    }
console.log(`Загальна сума чисел дорівнює ${totalS}`);
}
