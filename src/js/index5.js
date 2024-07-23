const startLesson = '----Урок 5 Classwork';
console.log(startLesson.toUpperCase());

// ----Додаткові завдання

// -1) 
// Напишіть код з використанням switch, що відповідає наступній конструкції if..else. Результат виведіть на екран:

// if(browser == 'Edge') {
//     p.textContent = "You've got the Edge!";
// } else if (browser == 'Chrome'
//     || browser == 'Firefox'
//     || browser == 'Safari'
//     || browser == 'Opera') {
//     p.textContent = 'Ми підтримуємо і ці браузери' ;
// } else {
//     p.textContent =  'Маємо надію, що ця сторінка виглядає добре!' ;
// }

const browser = 'Safari';
let answerBrowser;
switch (browser) {
    case 'Chrome': 
    case 'Firefox' : 
    case 'Safari' : 
    case 'Opera' : 
    answerBrowser = 'Ми підтримуємо і ці браузери'; 
    break; 
    default :
    console.log('Маємо надію, що ця сторінка виглядає добре!');
}
console.log(answerBrowser);

// -2)

// Є 3 вікові групи : діти (0-16), дорослі(17-60), пенсіонери (61-100). 
// До якої групи відноситься Максим, якщо йому 55 років. Назву групи вивести на екран.

const userOld = 56;
let oldResult;
switch (true){
    case (userOld >= 0 && userOld <=16) : 
    oldResult = 'Діти';
    break;
    case (userOld >= 17 && userOld <=60) : 
    oldResult = 'Дорослі';
    break;
    case (userOld >= 61 && userOld <=100) : 
    oldResult = 'Пенсіонери';
    break;
    default :
    console.log('Невірні данні')
}
console.log(oldResult);

// -3)

// Якщо ваше ім’я містить більше 4 букв і прізвище більше 5, то виведіть на екран 
// число,яке дорівнює сумі букв імені і прізвища. Якщо умова не виконується - вивести 
// “УПС”. Наприклад: “Віктор Сташко” Віктор - 6 літер, Сташко - 6 літер. Виводимо 12. 
// Використовувати вбудований метод length.

const myName = 'Yegor';
const mySurname = 'Kantsyr';
if (myName.length >= 4 && mySurname.length >= 5) {
    console.log(myName.length + mySurname.length);
}else {
    console.log('УПС')
}

// -4)

// Виберіть будь-яке число від 1 до 5 включно через функцію random. 
// За допомогою if else визначіть, що це за число.

let randomNumber = (Math.random() * 5) +1;
let doneNumber = (Math.round(randomNumber));
let numbePrizes;
switch (doneNumber) {
    case 1 :
    numbePrizes = 'Ваш приз під номером 1';
    break;
    case 2 :
    numbePrizes = 'Ваш приз під номером 2';
    break;
    case 3 :
    numbePrizes = 'Ваш приз під номером 3';
    break;
    case 4 :
    numbePrizes = 'Ваш приз під номером 4';
    break;
    case 5 :
    numbePrizes = 'Ваш приз під номером 5';
    break;
    default :
    console.log('Упс помилка');
}
console.log(numbePrizes);

// -5)

// Змінна lang може приймати 4 значення: 'ua', 'en', 'fr'. 
// За допомогою конструкції switch виведи на екран назву місяця в залежності 
// від обраної мови. Наприклад, якщо lang = 'fr', то в консоль виводимо "Janvier".

let lang = 'fr';
let month;
switch (lang) {
    case 'ua' : 
    month = 'Липень';
    break;
    case 'en' :
    month = 'July';
    break;
    case 'fr' :
    month = 'Juillet';
    break;
    default :
    console.log('Упс в нас немає такої мови.')
}
console.log(month);

// -6)

// Напиши скрипт вибору опції доставки товару. Опція зберігається в змінній 
// option: 1 - самовивіз, 2 - кур"єр, 3 - пошта. В змінну message записати повідомлення в залежності від опції.
// - 'Ви зможете забрати товар завтра з 12:00 в нашому офісі'
// - 'Кур"єр доставить замовлення завтра з 9:00 до 18:00'
// - 'Посилка буде відправлена сьогодні'

let option = prompt('Оберіть вид доставки. 1) - самовивіз, 2) - кур"єр, 3) - пошта.');
let message;
switch (option) {
    case '1':
    message = 'Ви зможете забрати товар завтра з 12:00 в нашому офісі';
    break;
    case '2':
    message = 'Кур"єр доставить замовлення завтра з 9:00 до 18:00';
    break;
    case '3':
    message = 'Посилка буде відправлена сьогодні';
    break;
    default :
    console.log('Упс! Цієї опції не існує.');
}
alert(message);

// -7)

// Напиши скрипт вибору готеля по кількості зірок.
// 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
// Якщо в змінній stars щось окрім чисел 1-5, виведи рядок
//'Токої кількості зірок немає'

let hotelStar = prompt('Оберіть готель по кількості зірок. 1) - 20$, 2) - 30$, 3) - 50$, 4) - 70$, 5) - 120$');
let hotelCheck;
switch (hotelStar) {
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    hotelCheck = 'Дякуємо ! Ваше замовлення прийнято.';
    default :
    console.log('Упс! Цієї опції не існує.');
}
alert(hotelCheck);
