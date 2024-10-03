const startLesson = '----Урок 17 Classwork';
console.log(startLesson.toUpperCase());

console.log('Додаткові завдання'.toUpperCase());

console.log('1)');

console.log('2)');

const list = document.querySelector('.site-nav');
console.log(list);

console.log('3)');

const body = document.querySelector('body');
body.style.backgroundColor = ('teal');

console.log('4)');

const liClass = document.querySelector('.site-nav__item');
const link = liClass.firstElementChild; 
link.classList.add('site-nav__link'); 
const linkClass = document.querySelector('.site-nav__link'); 
console.log(list); 

console.log('5)');

const listElements = document.querySelectorAll('.site-nav a'); 
listElements.forEach(link => {
    if (link.getAttribute('href') === 'https://') {
        link.style.fontSize = '60px';
    }
});
console.log(listElements); 

console.log('Творчі завдання'.toUpperCase());

console.log('1)');

const linkList = document.querySelectorAll('.link-list a'); 
linkList.forEach(link => {
    const href = link.getAttribute('href');
    const isExternal = href.startsWith('http') && !href.includes(window.location.hostname);
    if (isExternal) {
        link.style.color = 'orange'; 
    }
});

console.log('2)');

if (linkList.length > 0) { 
    linkList[0].classList.add('first-link');
    linkList[linkList.length - 1].classList.add('last-link'); 
}

console.log('3, 4)');

const title = document.querySelector('.title');
title.textContent ='Title main';
title.classList.add('title-decor');
const decor = document.querySelector('.title-decor');
decor.style.color = 'red';

console.log('5)');

linkList.forEach(link => {
    if (link.classList.contains('list')) {
        console.log('Посилання містить клас "list":', link); 
    } else {
        console.log('Посилання не містить клас "list".');
    }
});

console.log('ДЗ'.toUpperCase());

console.log('1)');

const inputField = document.getElementById('input-field');
const changeBtn = document.getElementById('change-btn');
changeBtn.addEventListener('click', function() {
    changeBtn.textContent = inputField.value;
});

console.log('2)');

const image = document.getElementById('image');
const changeImageBtn = document.getElementById('change-image-btn');
changeImageBtn.addEventListener('click', function() {
    image.src = 'image2.jpg'; 
});

console.log('3)');

const linkAtr = document.querySelector('.link-atr');
const imageAtr = document.querySelector('.image-atr');
const changeBtnAtr = document.querySelector('.change-btn-atr');
changeBtnAtr.addEventListener('click', function() {
    link.href = 'https://new-url.com'; 
    imageAtr.alt = 'Новий опис зображення';
});

console.log('4)');

const itemList = document.querySelector('.item-list');
const firstItem = itemList.querySelector('li'); 
firstItem.textContent = 'Новий текст для першого елемента';

