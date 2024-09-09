const startLesson = '----Урок 12 Classwork';
console.log(startLesson.toUpperCase());

console.log('Додаткові завдання'.toUpperCase());
// Дано масив об’єктів
// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: false },
//     { name: 'Ajax', online: false },
// ];
// 1. Написати функція яка буде отримувати масив та ім’я друга якого потрібно знайти 
// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));
// 2. Написати функцію яка буде повертати масив всіх імен друзів
// console.log(getAllNames(friends));
// 3. Написати функцію яка буде повертати масив імен друзів які онлайн
// console.log(getOnlineFriends(friends));
// 4. Написати функцію яка буде повертати масив імен друзів які офлайн
// console.log(getOfflineFriends(friends));
// 5. Написати функцію яка буде повертати об’єкт масивів  імен друзів які офлайн та онлайн. Створити 2 масива онлайн і 
// офлайн, якщо тру - в перший, якщо ні - в другий
// const getFriendsByStatus = function () {};
// const friendByStat = {
//     onlineFriends: [],
//     offlineFriends: [],
// }
// console.log(getFriendsByStatus(friends));

console.log('1)');

const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: false },
    { name: 'Ajax', online: false },
];

function findFriendByName(friendsArray, friendName) {
    for (let i = 0; i < friendsArray.length; i++) {
        if (friendsArray[i].name === friendName) {
            return friendsArray[i];
        }
    }
    return 'Друг не знайдений';  
}
console.log(findFriendByName(friends, 'Poly')); 
console.log(findFriendByName(friends, 'Chelsy')); 

console.log('2)');

function getAllNames(friendsArray) {
    for (let i = 0; i < friendsArray.length; i++) {
        console.log(friendsArray[i].name);
    }
}
getAllNames(friends);

console.log('3)');

const onlineFriendsArray = [];
function getOnlineFriends(friendsArray) {
    for (let i = 0; i < friendsArray.length; i++) {
        if (friendsArray[i].online === true) {
            onlineFriendsArray.push(friendsArray[i].name)
        }
    }
    console.log(`Online (${onlineFriendsArray})`);
}
getOnlineFriends(friends);

console.log('4)');

const offlineFriendsArray = [];
function getOfflineFriends(friendsArray) {
    for (let i = 0; i < friendsArray.length; i++) {
        if (friendsArray[i].online === false) {
            offlineFriendsArray.push(friendsArray[i].name)
        }
    }
    console.log(`Offline (${offlineFriendsArray})`);
}
getOfflineFriends(friends);

console.log('5)');

const friendByStat = {
    onlineFriends: [],
    offlineFriends: [],
}
function getFriendsByStatus(friendsArray) {
    const onlineFriends = friends.filter(friend => friend.online);
    friendByStat.onlineFriends.push(onlineFriends);

    const offlineFriends = friends.filter(friend => !friend.online);
    friendByStat.offlineFriends.push(offlineFriends);
}
getFriendsByStatus(friends);
console.log(friendByStat);


console.log('Творчі завдання'.toUpperCase());
// 1. Створіть масив об'єктів "products", де кожен об'єкт буде містити властивості "name", "price", "category" та 
// "stock". Напишіть функцію, яка приймає масив об'єктів "products" і повертає загальну вартість товарів в наявності 
// за вибраною категорією.
// 2. Створіть об'єкт "user" з властивостями "name", "age", "email" та методом "login", який буде виводити повідомлення 
// на екран з привітанням користувача та його даними. Для виклику методу "login" використовуйте функцію зворотнього 
// виклику (callback).
// 3. Створіть функцію "getObjectLength", яка приймає об'єкт як параметр і повертає кількість його властивостей.
// 4. Створіть об'єкт "person" з властивостями "firstName", "lastName" та "fullName". Значення властивості "fullName" 
// повинно бути отримано за допомогою з'єднання значень властивостей "firstName" та "lastName". Додайте до об'єкту метод, 
// який буде виводити повідомлення на екран з повним ім'ям людини.
// 5. Створіть об'єкт "product" з властивостями "name", "price" та "quantity". Додайте до об'єкту метод, який буде 
// розраховувати вартість всіх товарів. Результат повинен бути виведений на екран.
// 6. Створіть масив об'єктів "movies", де кожен об'єкт буде містити властивості "title", "director", "year" та "genre". 
// Напишіть функцію, яка приймає масив об'єктів "movies" та жанр (строку) як параметри, та повертає масив фільмів, які 
// належать до цього жанру.

console.log('1)');

const products = [
    {name: 'Coffee', price: 3, category: 'Drinking', stock: 5},
    {name: 'Milk', price: 1, category: 'Drinking', stock: 15},
    {name: 'Hot-dog', price: 5, category: 'Fast food', stock: 20},
];
function totalPrice(arrProducts) {
    let price = 0;
    let productPrice;
    for (let i = 0; i < arrProducts.length; i++) {
        productPrice = arrProducts[i].price / (100 * arrProducts[i].stock);
        price += productPrice;
    }
    console.log(`Total price (${price})`);
};
console.log(totalPrice(products));

console.log('2)');

const user = {
    name: 'Yegor',
    age: 15,
    email: 'kancyryegor@gmail.com',
    login() {
        console.log(`Привіт ${this.name}! Твій вік - ${this.age}. Твоя електрона адреса - ${this.email}`);
    }
}
user.login();

console.log('3)');

function getObjectLength(object) {
    console.log(Object.keys(object).length);
}
getObjectLength(user);

console.log('4)');

const person = {
    firstName: 'Yegor',
    lastName: 'Kantcyr',
    fullName() {
        console.log(`FullName ${this.firstName} ${this.lastName}`);
    }
};
person.fullName();

console.log('6)');

const movies = [
    {title: 'A quiet place', director: 'John Kraznski', year: 2021, genre: 'Horror'},
    {title: 'Smile', director: 'Smile', year: 2024, genre: 'Comedy'},
    {title: 'A quiet place', director: 'John Kraznski', year: 2023, genre: 'Horror'},
];
const yourMovie = [];
function choiceMovie(movie, yourGenre) {
    for (let i = 0; i < movie.length; i++) {
        if (movie[i].genre === yourGenre) {
            yourMovie.push(movie[i]);
        };
    };
    console.log(yourMovie);
};
choiceMovie(movies, 'Horror');


console.log('ДЗ'.toUpperCase());
//     Завдання 1
// Напиши скрипт, який, для об'єкта user, послідовно:
// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of
//     Завдання 2
// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість 
// властивостей.
//     Завдання 3
// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого 
// (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в 
// форматі "ім'я":"кількість задач".
//     Завдання 4
// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників 
// і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".
//     Завдання 5
// Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. Повертає масив значень 
// певної властивості prop з кожного об'єкта в масиві.
//     Завдання 6
// Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту 
// (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).
// Викличи функції для перевірки працездатності твоєї реалізації.

console.log('1)');

const newUser = {
    name: "John",
    age: 30,
    hobby: "reading",
    premium: true
};
newUser.mood = 'happy';
newUser.hobby = 'skydiving';
newUser.premium = false;
for (const key of Object.keys(newUser)) {
    console.log(`${key}: ${newUser[key]}`);
}

console.log('2)');

let keyArr;
function ountProps(obj) {
    keyArr = Object.keys(obj);
    console.log(`Кількість властивостей в елементі: ${keyArr.length}`);
}
ountProps(newUser);

console.log('3)');

const employees = {
    "John Doe": 10,
    "Jane Smith": 15,
    "Alice Johnson": 8,
    "Bob Brown": 12
};  
function findBestEmployee(employees) {
    let namesEmployees = Object.keys(employees);
    let bestEmployees = '';
    let maxRang = 0;
    for (const name of namesEmployees) {
        if (employees[name] > maxRang) {
            maxRang = employees[name];
            bestEmployees = name;
        }
    }
    return bestEmployees;
}
console.log(findBestEmployee(employees));

console.log('4)');

const salaryWorker = {
    "John Doe": 50000,
    "Jane Smith": 60000,
    "Alice Johnson": 55000
}
function countTotalSalary(employees) {
    let namesEmployees = Object.keys(employees);
    let totalSalar = 0;
    for (const name of namesEmployees) {
        totalSalar += employees[name];
    }
    return totalSalar;
}
console.log(countTotalSalary(salaryWorker));

console.log('5)');

const items = [
    { name: "Laptop", price: 1200, brand: "Dell" },
    { name: "Phone", price: 800, brand: "Apple" },
    { name: "Tablet", price: 400, brand: "Samsung" }
];
function getAllPropValues(arr, prop) {
    const values = [];
    for (const obj of arr) {
        if (obj.hasOwnProperty(prop)) {
            values.push(obj[prop]);
        }
    }
    return values;
}
console.log(getAllPropValues(items, 'name')); 
console.log(getAllPropValues(items, 'brand'));

console.log('5)');

const productsArr = [
    { name: "Laptop", price: 1200, quantity: 2 },
    { name: "Phone", price: 800, quantity: 3 },
    { name: "Tablet", price: 400, quantity: 5 },
    { name: "Laptop", price: 1200, quantity: 1 } 
];
function calculateTotalPrice(allProdcuts, productName) {
    let totalPrice = 0;
    for (const product of allProdcuts) {
        if (product.name === productName) {
            totalPrice += product.price * product.quantity;
        }
    }
    return totalPrice;
}
console.log(calculateTotalPrice(productsArr, 'Laptop'));
console.log(calculateTotalPrice(productsArr, 'Phone'));
console.log(calculateTotalPrice(productsArr, 'Tablet')); 