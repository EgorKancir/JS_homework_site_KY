const startLesson = '----Урок 13 Classwork';
console.log(startLesson.toUpperCase());

console.log('Додаткові завдання'.toUpperCase());

console.log('1)');

const user = {
    name: 'John',
    age: 30,
    email: 'john@example.com'
};
const {name, age, email} = user;
console.log(name);

console.log('2)');

const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    features: ['power windows', 'rear camera', 'navigation'],
    safety: {
        airbags: true,
        antilock_brakes: true,
        stability_control: true
    }
};
const {make, model, year, features, safety} = car;
console.log(safety);
console.log(features);
console.log(model);
console.log(year);

console.log('3)');

const movie = {
    title: 'The Shawshank Redemption',
    director: {
        name: 'Frank Darabont',
        nationality: 'American'
    },
    actors: ['Tim Robbins', 'Morgan Freeman'],
    release_year: 1994,
    ratings: {
        imdb: 9.3,
        rotten_tomatoes: 90
    }
}
const {title, director, actors, release_year, ratings} = movie;
console.log(title);
console.log(director);
console.log(actors);
console.log(release_year);
console.log(ratings);

console.log('4)');

const books = {
    count: 3,
    list: [
        {
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            year: 1925
        },
        {
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            year: 1960
        },
        {
            title: '1984',
            author: 'George Orwell',
            year: 1949
        }
    ]
}
const {count, list} = books;
console.log(count);
console.log(list);

console.log('Творчі завдання'.toUpperCase());

console.log('1)');

const person = {
    name: 'Nelli',
    surname: 'Laroy',
    age: 25
};
function personInfo({ name, surname, age }) {
    return `Мене звати ${name} ${surname} і мені ${age} років.`;
}
console.log(personInfo(person));

console.log('2)');

const student = {
    name: 'Bruce',
    surname: 'Lee',
    grades: [4, 5, 3]
};
function calculateAverageGrade({grades}) {
    let totalMarks = 0;
    for (const marks of grades) {
        totalMarks += marks;
    };
    let averageMarks = totalMarks / 3;
    return averageMarks;
}
console.log(calculateAverageGrade(student));

console.log('3)');

const items = [
    { name: 'Футболка', price: 250, quantity: 2 },
    { name: 'Джинси', price: 800, quantity: 1 },
    { name: 'Кросівки', price: 1200, quantity: 1 }
];
function calculateTotalCost(items) {
    let totalCost = 0;
    for (const { price, quantity } of items) {
      totalCost += price * quantity;
    }
    return totalCost;
}
console.log(calculateTotalCost(items)); 

console.log('4)');

const personArr = {
    name: 'John',
    emails: ['john@gmail.com', 'john@example.com', 'john123@yahoo.com']
}; 
function getFirstEmail(arrPerson) {
    const {emails} = arrPerson;
    return emails[0];
}
console.log(getFirstEmail(personArr)); 

console.log('5)');

const data = {
    users: [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 17 },
        { name: 'Bob', age: 30 },
        { name: 'Alice', age: 20 }
    ]
};
function getAdultUsers({users}) {
    for (let i = 0; i < users.length; i++) {
        let userObj = users[i];
        const {age} = userObj;
        if (age >= 18) {
            console.log(userObj);
        }        
    }
}
getAdultUsers(data); 

console.log('ДЗ'.toUpperCase());

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
    let bestEmployee = '';
    let maxTasks = 0;
    for (const [name, tasks] of Object.entries(employees)) {
        if (tasks > maxTasks) {
            maxTasks = tasks;
            bestEmployee = name;
        }
    }
    return bestEmployee;
}
console.log(findBestEmployee(employees));

console.log('4)');

const salaries = {
    "John Doe": 50000,
    "Jane Smith": 60000,
    "Alice Johnson": 55000
};
function countTotalSalary(employees) {
    let totalSalary = 0;
    for (const [, salary] of Object.entries(employees)) {
        totalSalary += salary;
    }
    return totalSalary;
}
console.log(countTotalSalary(salaries));

console.log('5)');

const itemsProd = [
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
console.log(getAllPropValues(itemsProd, 'name')); 
console.log(getAllPropValues(itemsProd, 'brand'));

console.log('6)');

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
