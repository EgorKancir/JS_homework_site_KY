const startLesson = '----Урок 8 Classwork';
console.log(startLesson.toUpperCase());

console.log('Додаткові завдання'.toUpperCase());
// 1. Створити масив із п'яти чисел. Використовуючи метод push(), додати до масиву ще один елемент.
// 2. Створити масив із трьох стрічок. Використовуючи метод pop(), видалити з масиву останній елемент.
// 3. Створити масив із десяти чисел. Використовуючи метод slice(), створити новий масив, який буде містити перші 
// п'ять елементів.
// 4. Створити масив із п'яти чисел. Використовуючи метод indexOf(), знайти індекс елемента зі значенням 3.
// 5. Створити масив із п'яти стрічок. Використовуючи метод join(), створити одну стрічку, яка буде містити всі 
// елементи масиву, розділені комою.

console.log('1)');

const array1 = [1, 2, 3, 4, 5];
array1.push(6);
console.log(array1);

console.log('2)');

const array2 = ['-', '-', '-'];
console.log(array2.pop());

console.log('3)');

const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array3Cut = array3.slice(0, 5);
console.log(array3Cut);

console.log('4)');

const array4 = [1, 2, 3, 4, 5];
console.log(`Index number (3) = "${array4.indexOf(3)}"`);

console.log('5)');

const array5 = ['-', '-', '-', '-', '-'];
console.log(array5.join(''));

console.log('Творчі завдання'.toUpperCase());
// 1. Робимо slug в URL з назви стратті.  Заголовок статті складається тільки з букв та пропусків
//  - Нормалізуємо рядок
//  - Разбиваємо по словах
//  - Зшиваємо в рядок з розділителями
//  - Ченінг
// // Повинно вийти top-10-benefits-of-react-framework
// const title = 'Top 10 benefits of React framework';
// 2. Напиши скрипт який рахує суму елементів двух масивів.
// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// 3. const message = 'Welcome to Ukraine!'. Розбити цю строку по буквам в масив, вивести цей масив в 
// консоль. Також вивести в консоль індекс літери l (Л англійська маленька) за допомогою вбудованого метода. 
// Після цього елементи масива поєднати в строку і вивести строку в консоль.
// 4. Створити масив гравців. додати до кожного гравця -N, де n - це порядковий номер.
// Наприклад, “Poly” => “Poly-1”

console.log('1)');

const title = ['Top', 10, 'benefits', 'of', 'React', 'framework'];
console.log(title.join('-'));

console.log('2)');

const numArray1 = [5, 10, 15, 20];
const numArray2 = [10, 20, 30];
let sumArray = numArray1.concat(numArray2);
let totalArray = 0;
for (let i = 0; i < sumArray.length; i++) {
    totalArray += sumArray[i];
}
console.log(`Сума чисел двох масвів = ${totalArray};`);

console.log('3)');

const message = 'Welcome to Ukraine!';
let boxMessage = message.split('');
console.log(boxMessage);
console.log(`Index "l" = ${boxMessage.indexOf('l')}`);
let joinBoxMessage = boxMessage.join('');
console.log(joinBoxMessage);

console.log('4)');

const players = ['Max', 'Poly', 'Nik', 'Katy'];
for (let i = 0; i < players.length; i++) {
    let numberPlayers = (`${players[i]} №${1 + i}`);    
    players.splice(i, 1, numberPlayers); 
}
console.log(players);

console.log('Супертворчі завдання'.toUpperCase());
// 1. Створіть масив styles з елементами 'Джаз' i 'Блюз'. Додайте 'Рок-н-ролл' в кінець масиву. 
// Замініть значення в середині масиву на 'Класика'. Видаліть перший елемент масиву і покажіть його. 
// Додайте 'Реп' і 'Реггі' на початок масиву. Виведіть масив в консоль.
// 2. Напиши скрипт який замінює регістр кожного символа в рядку на протилежний. Наприклад, якщо 
// рядок «JavaScript», то на виході повинно бути «jAVAsCRIPT».
// 3. Напишіть скрипт який:
//     -Просить користувача ввести дані за допомогою input та зберігає їх в масив.
//     -Закінчує робити запити в користувача після того, як введено не числове значення, порожня 
//     строка або натиснуто “відмінити”.
//     -Підраховує та повертає суму елементів масиву.
// P.S. Нуль 0 це – валідне число, будь ласка, не зупиняйте скрипт при введені 0.

console.log('1)');

const styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-рол');
styles.splice(1, 1, 'Класика');
console.log(`Видалений елемент "${styles.shift()}"`);
styles.unshift('Реп');
styles.unshift('Реггі');
console.log(styles);

console.log('2)');

let str = "JavaScript";
let newStr = "";
for (let i = 0; i < str.length; i++) {
    let char = str[i];
    newStr += char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
}
console.log(newStr);

// console.log('3)');

// const boxUserNumber = [];
// let userNumber;
// let numberTotal;
// do {
//     userNumber = prompt('Write your number');
//     if (userNumber >= 0) {
//         boxUserNumber.push(userNumber);      
//     }
// } while (userNumber !== Object);
// for (let i = 0; i < boxUserNumber.length; i++) {
//     numberTotal += boxUserNumber[i];
// }  
// console.log(boxUserNumber);
// alert(`Total sum = '${numberTotal}'`);

console.log('ДЗ'.toUpperCase());
// 1. Напиши скрипт, який об'єднує всі елементи массива в один рядок.  Елементів може бути довільна кількість. 
// Нехай елементи массива  в рядку будут розділені комою.
//  - Спочатку через for
//  - Потім через join()
//     const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
//     let string = '';
// 2. Працюємо з колекцією карток в trello.  Метод splice() (можна використати інші методи)
// const cards = [
//     'Карточка-1',
//     'Карточка-2',
//     'Карточка-3',
//     'Карточка-4',
//     'Карточка-5',
// ];
// 3. Видалити
// /*
//    * Видалення (по індексу), метод indexOf()
//    */
// const cardToRemove = 'Карточка-3';
// 4. Додати
// /*
//    * Додавання (по індексу)
//    */
// const cardToInsert = 'Карточка-6';
// 5.Оновити
// /*
//    * Оновлення (по індексу)
//    */
// const cardToUpdate = 'Карточка-4';

console.log('1)');

const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
let string = '';
for (let i = 0; i < friends.length; i++) {
    if (i + 1 < friends.length) {
        string += `${friends[i]}, `;        
    } else {
        string += `${friends[i]}.`;
    }
}
console.log(`for ${string}`);
let friendsJoin = friends.join(', ');
console.log(`Join(s) ${friendsJoin}`);

console.log('2)');

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
];

console.log('3)');

let cardToRemove = cards.splice(2, 1);
console.log(cardToRemove);

console.log('4)');

cards.splice(5, 1, 'Карточка-6')
console.log(cards);

console.log('5)');

cards.splice(2, 1, 'Карточка-4');
console.log(cards);






















































