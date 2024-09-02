const startLesson = '----Урок 11 Classwork';
console.log(startLesson.toUpperCase());

console.log('Додаткові завдання'.toUpperCase());
// 1. Створіть об'єкт "person" з властивостями "name", "age", "gender". Додайте до об'єкту метод, який буде виводити 
// на екран повідомлення про особистість зі значеннями всіх властивостей.
// 2. Створіть масив об'єктів "students", де кожен об'єкт буде містити властивості "name", "age", "gender" та "grade". 
// Напишіть функцію, яка приймає масив об'єктів "students" і повертає середній бал групи.
// 3. Створіть об'єкт "book" з властивостями "title", "author", "year" та "genre". Додайте до об'єкту метод, який дозволить 
// змінювати значення властивостей.
// 4. Створіть об’єкт "сar", який буде мати властивості "brand", "model", "year" та "color". Додайте метод, який буде 
// виводити на екран повідомлення про автомобіль зі значеннями всіх властивостей.
// 5. Створіть об'єкт "restaurant" з властивостями "name", "cuisine", "address" та "rating". Додайте до об'єкту метод, 
// який дозволить змінювати значення властивостей "address" та "rating"

console.log('1)');

const person = {
    neme: 'Yegor',
    age: 15,
    gender: 'male',
    userInfo() {
        console.log(`Ім'я ${this.neme}; Вік ${this.age}; Гендер ${this.gender};`);
    }
}
person.userInfo();

console.log('2)');

const studentsClass = [
    students1 = {
        neme: 'Yegor',
        age: 15,
        gender: 'male',
        grade: 5,
    },
    students2 = {
        neme: 'Yegor',
        age: 15,
        gender: 'male',
        grade: 7,
    },
    students3 = {
        neme: 'Yegor',
        age: 15,
        gender: 'male',
        grade: 2,
    },
    students4 = {
        neme: 'Yegor',
        age: 15,
        gender: 'male',
        grade: 10,
    },
];
function verificationClass(arr) {
    let totalAss = 0;
    for (let i = 0; i < arr.length; i++) {
        totalAss += arr[i].grade;
    }
    let averageRating = totalAss / arr.length;
    return averageRating;
}
console.log(verificationClass(studentsClass));

console.log('3)');

const book = {
    title: 'AutoLux',
    author: 'I don`t know',
    year: 1992,
    genre: 'Drama',
    best() {
        console.log('Best book!');
    },
}
book.best();

console.log('4)');

const car = {
    brand: 'Audi',
    model: 'A7',
    year: 2024,
    color: 'black',
    carName() {
        console.log(`Brand ${this.brand} model ${this.model} year ${this.year} color ${this.color}`);
    }
}
car.carName();

console.log('5)');

const restaurant = {
    name: 'Transylvania',
    cuisine: 'American',
    address: 'Way 1',
    rating: 5,
    renameElement(newAddress, newRating) {
        this.address = newAddress;
        this.rating = newRating;
        return restaurant;
    }
}
console.log(restaurant.renameElement('Way 100', 4));

console.log('Творчі завдання'.toUpperCase());

const cart = {
    items: [
        { name: '🍎', price: 50 },
        { name: '🍇', price: 70 },
        { name: '🍋', price: 60 },
        { name: '🍓', price: 110 },
        ],
    getItems() {
        return this.items;
    },
    add(product) {
        const existingProduct = this.items.find(item => item.name === product.name);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            this.items.push({ ...product, quantity: 1 });
        }
    },
    remove(productName) {
        this.items = this.items.filter(item => item.name !== productName);
    },
    clear() {
        this.items = [];
    },
    countTotalPrice() {
        return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    increaseQuantity(productName) {
        const product = this.items.find(item => item.name === productName);
        if (product) {
            product.quantity += 1;
        }
    },
    decreaseQuantity(productName) {
        const product = this.items.find(item => item.name === productName);
        if (product) {
            product.quantity -= 1;
            if (product.quantity <= 0) {
                this.remove(productName);
            }
        }
    },
};

console.log('ДЗ'.toUpperCase());
// 1. Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який 
// повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів 
// Цельсія. Температуру потрібно отримати з інпуту на сторінці. Якщо метод повернув "true" вивести повідомлення “температура 
// нижче 0 градусів Цельсія” і навпаки
// 2. Створіть об’єкт "user", якbq буде мати властивості "name", "email", "password". Додайте метод "login", який буде 
// перевіряти правильність введеного email та password. Використайте інпути для запису значень властивостей в об’єкт
// 3. Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту метод, який 
// повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. Вивести значення 
// властивостей на сторінку. 

console.log('1)');

let userTemperature = prompt('Введіть температуру за вашим вікном');
const weather = {
    temperature: userTemperature,
    humidity: 15,
    windSpeed: 5,
    auditTmperature() {
        if (this.temperature < 0) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}
weather.auditTmperature();

console.log('2)');

let userEmail = prompt('Your Email');
let userPassword = prompt('Your password');
let auditEmail;
let auditPassword;
const user = {
    name: 'Yegor',
    email: 'yegor@gmail.com',
    password: '12345678',
    login() {
        if (userEmail === this.email) {
            auditEmail = true;
        };
        if (userPassword === this.password) {
            auditPassword = true;
        };
        if (auditEmail === true && auditPassword) {
            console.log('ВІТАЮ ваші данні введено вірно');
        } else {
            console.log('УПС ваші данні введено не вірно');  
        };
    },
};
user.login();

console.log('3)');

const movie = {
    title: 'MARVEL',
    director: 'Tony Stark',
    year: 2004,
    rating: 9,
    auditRating() {
        if (this.rating > 8) {
            console.log(true);
        } else {
            console.log(false);
        }
    },
}
console.log(movie);
movie.auditRating();
