const startLesson = '----Урок 14 Classwork';
console.log(startLesson.toUpperCase());

console.log('Додаткові завдання'.toUpperCase());
// Використовуючи 👆 масив об’єктів виконай наступні завдання
// 1. Отримати масив імен всіх гравців
// 2. Збільшити кількість поінтів кожного гравця на 10% (розпорошуємо старий об'єкт)
// 3. Збільшити кількість годин гравця по id. Переписати на тернарник
// 4. Отримати масив всіх гравців онлайн
// 5. Отримати масив всіх гравців офлайн
// 6. Отримати масив всіх хардкорних гравців з часом більше 250
// 7. Знайти гравця по id
// 8. Знайти гравця по імені
// 9. Перевірити чи всі гравці мають час більше 200
// 10. Перевірити чи всі гравці онлайн

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

console.log('1)');

const playerArr = players.map(player => player.name);
console.log(playerArr);

console.log('2)');

const updatedPoints = players.map(player => ({
    ...player,
    points: player.points * 1.1, 
}));
console.log(updatedPoints);

console.log('3)');

const playerIdToUpdate = 'player-2';
const updatedPlayers = players.map(player => 
    player.id === playerIdToUpdate 
    ? { ...player, timePlayed: player.timePlayed + 50 } 
    : player 
);
console.log(updatedPlayers);

console.log('4)');

console.log(players.filter(onlineUser => onlineUser.online === true));

console.log('5)');

const oflineUserArr = [];
const oflineUser = players.filter(onlineUser => onlineUser.online === false);
oflineUserArr.push(oflineUser);
console.log(oflineUserArr);

console.log('6)');

const hardcorUserArr = [];
const hardcorUser = players.filter(hard => hard.timePlayed >= 250)
hardcorUserArr.push(hardcorUser);
console.log(hardcorUserArr);

console.log('7)');

const randomId = 'player-5';
const userId = players.filter(user => user.id === randomId);
console.log(userId);

console.log('8)');

const randomName = 'Mango';
const userName = players.filter(user => user.name === randomName);
console.log(userName);

console.log('9)');

const auditUserTime = players.every(time => time.timePlayed > 200);
console.log(auditUserTime);

console.log('10)');

const auditUserOnline = players.every(userOnline => userOnline.online === true);
console.log(auditUserOnline);

console.log('Творчі завдання'.toUpperCase());
// 1. Напишіть функцію, яка отримує масив чисел (створити самостійно) і  повертає новий масив, що містить лише парні числа.
// 2. Напишіть функцію, яка отримує масив об'єктів і повертає масив імен з тих об'єктів, які мають вік більше 18 років.
// const people = [
//     { name: 'John', age: 32, occupation: 'programmer' },
//     { name: 'Jane', age: 26, occupation: 'teacher' },
//     { name: 'Mike', age: 42, occupation: 'engineer' },
//     { name: 'Emily', age: 17, occupation: 'designer' }
// ];
// 3. Об'єднати два масиви в один без повторень.
// const array1 = [1, 2, 3, 44, 4, 5, 6, 6, 7];
// const array2 = [5,12, 3, 14, 4, 5, 6, 6, 7];
// 4. Напишіть функцію filterRange(arr, a, b), яка приймає масив arr, шукає в ньому елементи більші-рівні a та 
// менші-рівні b і віддає масив цих елементів. const array = [1, 27, 3, 44, 4, 5, 16, 6, 7];

console.log('1)');

const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filterArr = numberArr.filter(num => num % 2 === 0);
console.log(filterArr);

console.log('2)');

const people = [
    { name: 'John', age: 32, occupation: 'programmer' },
    { name: 'Jane', age: 26, occupation: 'teacher' },
    { name: 'Mike', age: 42, occupation: 'engineer' },
    { name: 'Emily', age: 17, occupation: 'designer' }
];
function peopleAge(arr) {
    const ageFilter = arr.filter(user => user.age > 18);
    console.log(ageFilter.map(user => user.name));
}
peopleAge(people);

console.log('3)');

const array1 = [1, 2, 3, 44, 4, 5, 6, 6, 7];
const array2 = [5,12, 3, 14, 4, 5, 6, 6, 7];
console.log(array1.concat(array2));

console.log('4)');

const array = [1, 27, 3, 44, 4, 5, 16, 6, 7];
function filterRange(arr, a, b) {
    const aArr = arr.filter(num => num >= a)
    const bArr = arr.filter(num => num <= b)
    console.log(`>= ${a}: ${aArr}`);
    console.log(`<= ${b}: ${bArr}`);
}
filterRange(array, 15, 20);

console.log('Супертворчі завдання'.toUpperCase());
// 1. Напишіть функцію, яка отримує масив рядків і  повертає новий масив, в якому кожен з рядків складається  з 
// першої та останньої букви відповідної строки вхідного масиву.
// const array2 = ['apple', 'banana', 'orange', 'banana', 'grape', 'apple', 'kiwi'];
// 2. У вас є масив обʼєктів user, і у кожного з обʼєктів є name, surname та id.
// Напишіть код, який створить ще один масив обʼєктів з параметрами id й fullName, де fullName – складається з name та surname.
// const people = [
//   { name: 'John',  surname: ‘Doe’,  age: 32, occupation: 'programmer' },
//   { name: 'Jane', surname: ‘Lee’,  age: 26, occupation: 'teacher' },
//   { name: 'Mike', surname: ‘Watson’, age: 42, occupation: 'engineer' },
//   { name: 'Emily', surname: ‘Brad’, age: 29, occupation: 'designer' }
// ];

console.log('1)');

const arrayFrukt = ['apple', 'banana', 'orange', 'banana', 'grape', 'apple', 'kiwi'];
function getFirstAndLastChars(arr) {
    return arr.map(str => str[0] + str[str.length - 1]);
}
console.log(getFirstAndLastChars(arrayFrukt));

console.log('2)');

const newPeople = [
    { name: 'John',  surname: 'Doe',  age: 32, occupation: 'programmer' },
    { name: 'Jane', surname: 'Lee',  age: 26, occupation: 'teacher' },
    { name: 'Mike', surname: 'Watson', age: 42, occupation: 'engineer' },
    { name: 'Emily', surname: 'Brad', age: 29, occupation: 'designer' }
];
function createFullNameArray(arr) {
    return arr.map(({ name, surname, age }, index) => ({
        id: index + 1,
        fullName: `${name} ${surname}`
    }));
}
console.log(createFullNameArray(newPeople));

console.log('ДЗ'.toUpperCase());
// Завдання 1
// Отримати масив імен всіх користувачів (поле name).
// Завдання 2
// Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).
// Завдання 3
// Отримати масив імен користувачів за статтю (поле gender).
// Завдання 4
// Отримати масив тільки неактивних користувачів (поле isActive).
// Завдання 5
// Отримати користувача (не масив) по email (поле email, він унікальний).
// Завдання 6
// Отримати масив користувачів, які потрапляють у вікову категорію від min до max років (поле age).

const usersArr = [
    { name: 'John Doe', eyeColor: 'blue', gender: 'male', isActive: true, email: 'john@example.com', age: 25 },
    { name: 'Jane Smith', eyeColor: 'green', gender: 'female', isActive: false, email: 'jane@example.com', age: 30 },
    { name: 'Mike Johnson', eyeColor: 'brown', gender: 'male', isActive: true, email: 'mike@example.com', age: 35 },
    { name: 'Emily Brad', eyeColor: 'blue', gender: 'female', isActive: false, email: 'emily@example.com', age: 22 },
    { name: 'Alice Cooper', eyeColor: 'brown', gender: 'female', isActive: true, email: 'alice@example.com', age: 29 }
];

console.log('1)');

const getUserNames = users => {
    let userName = users.map(name => name.name);
    return userName;
};
console.log(getUserNames(usersArr));

console.log('2)');

const getUsersWithEyeColor = (users, color) => {
    let userEye = users.filter(eye => eye.eyeColor === color);
    return userEye;
};
console.log(getUsersWithEyeColor(usersArr, 'blue'));

console.log('3)');

const getUsersWithGender = (users, gender) => {
    let userGender = users.filter(userGender => userGender.gender === gender);
    return userGender;
};  
console.log(getUsersWithGender(usersArr, 'male')); 

console.log('4)');

const getInactiveUsers = users => {
    let userInactive = users.filter(inactive => inactive.isActive === false);
    return userInactive;
};
console.log(getInactiveUsers(usersArr)); 

console.log('5)');

const getUserWithEmail = (users, email) => {
    let userEmail = users.find(uEmail => uEmail.email === email);
    return userEmail;
};
console.log(getUserWithEmail(usersArr, 'john@example.com'));
console.log(getUserWithEmail(usersArr, 'emily@example.com'));

console.log('6)');

const getUsersWithAge = (users, min, max) => {
    let filterAge = users.filter(uAge => uAge.age >= min && uAge.age <= max);
    return filterAge;
};
console.log(getUsersWithAge(usersArr, 20, 30)); 
console.log(getUsersWithAge(usersArr, 30, 40));