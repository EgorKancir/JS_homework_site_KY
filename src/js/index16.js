const startLesson = '----Урок 16 Classwork';
console.log(startLesson.toUpperCase());

console.log('Додаткові завдання'.toUpperCase());

console.log('1)');

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return (`${this.firstName} ${this.lastName}`);
    }
}
const person1 = new Person('John', 'Doe');
console.log(person1.getFullName());

console.log('2)');

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const rectangle1 = new Rectangle(10, 5);
console.log(rectangle1.getArea()); 

console.log('3)');

class Calculator {
    add(a, b) {
        return a + b;
    } 
    subtract(a, b) {
        return a - b;
    } 
    multiply(a, b) {
        return a * b;
    } 
    divide(a, b) {
        return a / b;
    }
}
const calculator = new Calculator();
console.log(calculator.add(2, 3)); 
console.log(calculator.subtract(5, 2));
console.log(calculator.multiply(2, 4)); 
console.log(calculator.divide(10, 2)); 
console.log(calculator.divide(10, 0)); 

console.log('4)');

class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
}
const myDog = new Dog('Buddy', 'Labrador Retriever');
console.log(myDog);

console.log('5)');

class AnimalNew {
    makeSould(){
        console.log('The animal makes a sound');
    }
}
class Cat extends AnimalNew {
    makeSould() {
        console.log('Meow');
    }
}
const animalNew = new AnimalNew();
animalNew.makeSould();

const cat = new Cat();
cat.makeSould();

console.log('Творчі завдання'.toUpperCase());

console.log('1)');

class Animal1 {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return 'Animal sound';
    }
}
class Dog1 extends Animal1 {
    speak() {
        return 'Bark!';
    }
}
const animal1 = new Animal1('Lion');
console.log(animal1.speak()); 
const dog1 = new Dog1('Pug');
console.log(dog1.speak()); 

console.log('2)');

class Product {
    constructor(name, price, discount) {
        this.name = name;
        this.price = price;
        this.discount = discount;
    }
    getDiscountPrice() {
        return this.price - (this.price * (this.discount / 100));
    }
}
const product1 = new Product('Phone', 500, 10);
console.log(product1.getDiscountPrice());

console.log('3)');

class Shape {
    constructor(color) {
        this.color = color;
    }
    draw() {
        console.log('Drawing a shape');
    }
}
class Circle extends Shape {
    constructor(color, radius) {
        super(color); 
        this.radius = radius;
    }
    draw() {
        console.log(`Drawing a circle with radius ${this.radius}`);
    }
}

const myCircle = new Circle('red', 5);
myCircle.draw();
console.log(myCircle.color); 

console.log('4)');

class Person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Employee extends Person1 {
    constructor(name, age, position) {
        super(name, age);
        this.position = position;
    }
    getInfo() {
        return `${this.name} is a ${this.position} and is ${this.age} years old`;
    }
}
const john = new Employee("John", 32, "programmer");
console.log(john.getInfo()); 

console.log('Супертворчі завдання'.toUpperCase());

console.log('1)');

class Book {
    constructor(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
}
class Bookstore {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    removeBook(book) {
        this.books = this.books.filter(b => b !== book);
    }
    listBooks() {
        if (this.books.length === 0) {
            console.log("The bookstore is empty.");
        } else {
            this.books.forEach(book => {
                console.log(`${book.title} by ${book.author} - $${book.price}`);
            });
        }
    }
}
const myBookstore = new Bookstore();
const book1 = new Book('The Catcher in the Rye', 'J.D. Salinger', 10);
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 12);
const book3 = new Book('1984', 'George Orwell', 8);
myBookstore.addBook(book1);
myBookstore.addBook(book2);
myBookstore.addBook(book3);
myBookstore.listBooks(); 
myBookstore.removeBook(book2);
myBookstore.listBooks();

console.log('ДЗ'.toUpperCase());

console.log('1)');

function Account({ login, email }) {
    this.login = login;
    this.email = email;
}
Account.prototype.getInfo = function() {
    console.log(`Login: ${this.login}, Email: ${this.email}`);
};
const mango = new Account({
    login: 'Mangozedog',
    email: 'mango@dog.woof',
});
mango.getInfo();
const poly = new Account({
    login: 'Poly',
    email: 'poly@mail.com',
});
poly.getInfo();

console.log('2)');

class User {
    constructor({name, age, followers}) {
        this.name = name;
        this.age = age;
        this.followers = followers;
    }
    getInfo() {
    console.log(`${this.name} is ${this.age} years old and has ${this.followers} followers`);
    }
}
const mangoNew = new User({
    name: 'Mango',
    age: 2,
    followers: 20,
});
mangoNew.getInfo();
const polyNew = new User({
    name: 'Poly',
    age: 3,
    followers: 17,
});
polyNew.getInfo();

console.log('3)');

class Storage {
    constructor(items) {
        this.items = items;
    }
    getItems() {
        return this.items;
    }
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        if (this.items.includes(item) === true) {
            let index = this.items.indexOf(item);
            this.items.splice(index, 1);
        } else {
            this.items.push(item);
        }
    } 
}
const storage = new Storage([
    'Нанітоіди',
    'Пролонгер',
    'Залізні жупи',
    'Антигравітатор',
]);
const items = storage.getItems();
console.table(items);
storage.addItem('Дроїд');
console.table(storage.items); 
storage.removeItem('Пролонгер');
console.table(storage.items); 

console.log('4)');

class StringBuilder {
    constructor(_value) {
        this._value = _value;
    }
    get value() {
        return this._value;
    } 
    append(str) {
        this._value += str;
    }
    prepend(str) {
        this._value = str + this._value;
    }
    pad(str) {
        this._value = str + this._value + str;
    }
}
const builder = new StringBuilder('.');
builder.append('^');
console.log(builder.value);
builder.prepend('^');
console.log(builder.value); 
builder.pad('=');
console.log(builder.value); 

console.log('5)');

class Car {
    constructor({ maxSpeed, price }) {
        this.speed = 0;           
        this.price = price;       
        this.maxSpeed = maxSpeed; 
        this.isOn = false;        
        this.distance = 0;        
    }
    static getSpecs(car) {
        console.log(`maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`);
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    turnOn() {
        this.isOn = true;
    }
    turnOff() {
        this.isOn = false;
        this.speed = 0;
    }
    accelerate(value) {
        this.speed = Math.min(this.maxSpeed, this.speed + value);
    }
    decelerate(value) {
        this.speed = Math.max(0, this.speed - value);
    }
    drive(hours) {
        if (this.isOn) {
            this.distance += hours * this.speed;
        }
    }
}
const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);
Car.getSpecs(mustang);
mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();
Car.getSpecs(mustang);
console.log(mustang.price); 
mustang.price = 4000;
console.log(mustang.price); 
