const age = "15";
console.log(age);

const names = "Egor";
console.log(names);

const isStudent = true;
console.log(isStudent);

const myString = "Успіх - це вміння рухатися від невдачі до невдачі, не втрачаючи ентузіазму.";
console.log(myString);

const myNumber = 23;
const plusNumber = 10;
let total = myNumber + plusNumber;
console.log(total);

let myNull = null;
console.log(myNull);

let userName = prompt("Введіть ваше ім'я");
const hello = "Вітаємо";
alert(`${hello} ${userName}!`);

const userConfirmation = confirm("Підтверджуєте ?");
console.log(userConfirmation);
const trueUser = ("Дякую за підтвердження!");
const falseUser = ("Дію відмінено!");
if (userConfirmation == true) {
    alert(trueUser);
}
if (userConfirmation == false) {
    alert(falseUser);
}

const danger = "Ця дія небезпечна!";
alert(danger);
const userDanger = confirm("Підтверджуєте дію?");
console.log(userDanger);
const trueDanger = ("Дякую за підтвердження!");
const falseDanger = ("Дію відмінено!");
if (userDanger == true) {
    alert(trueDanger);
}
if (userDanger == false) {
    alert(falseDanger);
}

1)

const str = "Привіт";
const num = 123;
const flag = true;
const txt = "true";

console.log(typeof str);
console.log(typeof num);
console.log(typeof flag);
console.log(typeof txt);

// 2)

let myName = "Egor";
let age = 15;
let year = 2024;
let time = "10:58";
let user;
const check = true;
const checkName = "False";
const country = "Ukraine";
const animals = false;
const ready = true;

console.log(typeof myName);
console.log(typeof age);
console.log(typeof year);
console.log(typeof time);
console.log(typeof user);
console.log(typeof check);
console.log(typeof checkName);
console.log(typeof country);
console.log(typeof animals);
console.log(typeof ready);

// 3)

const myAge = 15;
const friendsAge = 17;
let ourAge = myAge + friendsAge;
console.log(ourAge);

// 4)

let a = 32;
let b = 12;
let total = a * b;
console.log(total);

// 5)

const startText = "Я навчаюся в GoITeens в групі:";
const group = "UA_FE_1y_17_23";
console.log(startText, group); 

// 6)

const userName = prompt("Вкажіть ваше ім'я");
console.log(userName);

// Творче завдання

let nameDesktop = "«MacBook Pro 13»"
let price = 100000;
console.log("Обрано", nameDesktop, "ціна за штуку", price, "кредитів");


 