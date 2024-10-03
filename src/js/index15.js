const startLesson = '----Урок 15 Classwork';
console.log(startLesson.toUpperCase());

console.log('Додаткові завдання'.toUpperCase());

const analitik = [
	{ id: '000', likes: 5, tags: ['js', 'nodejs'] },
	{ id: '001', likes: 2, tags: ['html', 'css'] },
	{ id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
	{ id: '003', likes: 8, tags: ['css', 'react'] },
	{ id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
]
const userId = analitik.reduce((idAcc, analitik) => {
    idAcc.push(analitik.id);
    return idAcc;
}, []);
console.log(userId);

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

console.log('1)');

const summH = players.reduce((totlaTime, players) => totlaTime += players.timePlayed, 0);
console.log(summH);

console.log('2)');

const timePlay = (a, b) => a.timePlayed - b.timePlayed;
console.log(players.sort(timePlay));

console.log('3)');

const cart = [
    { label: 'Apples', price: 100, quantity: 2 },
    { label: 'Bananas', price: 120, quantity: 3 },
    { label: 'Lemons', price: 70, quantity: 4 },
];
const quantity = cart.reduce((totalQuantity, cart) => totalQuantity += cart.quantity, 0);
console.log(quantity);

console.log('4)');

const arr = [
    { name: 'John', age: 32 },
    { name: 'Jane', age: 26 },
    { name: 'Mike', age: 42 },
    { name: 'Emily', age: 29 }
];

arr.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
    }
    return 0;
});

console.log(arr);

console.log('Творчі завдання'.toUpperCase());

const tweets = [
    { id: '000', likes: 5, tags: ['js', 'nodejs'] },
    { id: '001', likes: 2, tags: ['html', 'css'] },
    { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
    { id: '003', likes: 8, tags: ['css', 'react'] },
    { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

console.log('1)');

const arrTags = tweets.reduce((tagsArr, tweets) => {
    tagsArr.push(tweets.tags);
    return tagsArr;
}, []);
console.log(arrTags);

console.log('2)');

const tagStats = tweets.reduce((acc, tweet) => {
tweet.tags.forEach(tag => {
    if (!acc[tag]) {
        acc[tag] = 1;
    } else {
        acc[tag]++;
    }
    });
    return acc;
}, {});
console.log(tagStats);

console.log('3)');

const products = [
    { name: 'Product 1', price: 100, quantity: 5 },
    { name: 'Product 2', price: 50, quantity: 10 },
    { name: 'Product 3', price: 200, quantity: 2 },
    { name: 'Product 4', price: 50, quantity: 5 }
];
const sortPrice = (a, b) => b.price - a.price;
console.log(products.sort(sortPrice));
const sortQuantity = (a, b) => a.quantity - b.quantity;
console.log(products.sort(sortQuantity));

console.log('4)');

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, numbers) => acc + numbers, 0)
const average = sum / numbers.length;
console.log(average);

console.log('5)');

const frukt = [
    { name: 'apple', value: 2 },
    { name: 'banana', value: 3 },
    { name: 'orange', value: 4 },
];
const arrToObj = frukt.reduce((acc, frukt) => {
    acc[frukt.name] = frukt.value;
    return acc;
}, {})
console.log(arrToObj); 

console.log('Супертворчі завдання'.toUpperCase());

console.log('1)');

const events = [
    { name: 'Event 1', date: '10/02/2023' },
    { name: 'Event 2', date: '15/03/2023' },
    { name: 'Event 3', date: '01/01/2023' },
    { name: 'Event 4', date: '01/02/2023' }
];
events.sort((a, b) => {
    const dateA = new Date(a.date.split('/').reverse().join('-'));
    const dateB = new Date(b.date.split('/').reverse().join('-'));
    return dateA - dateB;
});
console.log(events);

console.log('2)');

const items = [
    { name: 'Item A', popularity: 5 },
    { name: 'Item C', popularity: 2 },
    { name: 'Item D', popularity: 3 },
    { name: 'Item B', popularity: 5 }
];
const sortPopularity = (a, b) => b.popularity - a.popularity;
console.log(items.sort(sortPopularity));
const sortName = (a, b) => a.name - b.name;
console.log(items.sort(sortName));

console.log('ДЗ'.toUpperCase());

const users = [
{
    name: 'John',
    balance: 500,
    friends: [],
    skills: ['JavaScript', 'React', 'Node.js']
},
{
    name: 'Alice',
    balance: 1200,
    friends: ['John', 'Bob'],
    skills: ['HTML', 'CSS', 'JavaScript']
},
{
    name: 'Bob',
    balance: 900,
    friends: ['John', 'Alice'],
    skills: ['CSS', 'PHP', 'React']
},
{
    name: 'Mike',
    balance: 300,
    friends: ['Alice'],
    skills: ['Java', 'Spring', 'Node.js']
}
];

console.log('1)')

const totalBalance = users.reduce((acc, user) => acc + user.balance, 0);
console.log(totalBalance);

console.log('2)')

const chekFriends = users.reduce((acc, users) => {
    if (users.friends.length >= 1) {
        acc.push(users.name);
    }
    return acc;
}, [])
console.log(chekFriends);

console.log('3)')

const sortFriends = (a, b) => a.friends.length - b.friends.length;
console.log(users.sort(sortFriends));

console.log('4)')

const allSkills = users.map(user => user.skills).reduce((acc, skills) => acc.concat(skills), []);
const uniqueSkills = [];
allSkills.forEach(skill => {
if (!uniqueSkills.includes(skill)) {
    uniqueSkills.push(skill);
}
});
uniqueSkills.sort();

console.log(uniqueSkills);
