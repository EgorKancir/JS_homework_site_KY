const startLesson = '----Урок 18 Classwork';
console.log(startLesson.toUpperCase());

console.log('Додаткові завдання'.toUpperCase());

console.log('1)');

const colorPickerOptions = [
    {label: 'red', color: '#F44336'},
    {label: 'green', color: '#4CAF50'},
    {label: 'blue', color: '#2196F3'},
    {label: 'grey', color: '#607D8B'},
    {label: 'pink', color: '#E91E63'},
    {label: 'indigo', color: '#3F51B5'},
];
const btnGroup = document.querySelector('.homework-group__element1');
colorPickerOptions.map(({label, color}) => {
    let newBtn = document.createElement('button');
    newBtn.textContent = `Label: ${label}; Color: ${color}`;
    newBtn.style.color = color;
    btnGroup.appendChild(newBtn);
})

console.log('2)');

let btnHtml = colorPickerOptions.map(({label, color}) => {
    return `<button style='color: ${color}'>Label: ${label}</button>`
})
btnGroup.innerHTML = btnHtml;

console.log('3)');

const cardBlok = document.querySelector('.homework-group__element2')
function createCard(place, name, discription, price) {
    let cardBox = document.createElement('article');
    cardBox.classList.add('product');
    place.append(cardBox);
    let cardName = document.createElement('h2');
    cardName.classList.add('product__name');
    cardName.textContent = `${name}`;
    cardBox.append(cardName);
    let cardDiscription = document.createElement('p');
    cardDiscription.classList.add('product_descr');
    cardDiscription.textContent = `${discription}`;
    cardBox.append(cardDiscription);
    let cardPrice = document.createElement('p');
    cardPrice.classList.add('product__price');
    cardPrice.textContent = `Ціна: ${price} кредитів`;
    cardBox.append(cardPrice);
    console.log(place);
}
createCard(cardBlok, 'Auto', 'Bla-bla-bla', 30000);

console.log('4)');

function createNewCard(place, name, discription, price) {
    let newCard = `
    <article class="product">
        <h2 class="product__name">${name}</h2>
        <p class="product__descr">${discription}</p>
        <p product__price>Ціна: ${price} кредитів</p>
    </article>
    `;
    place.insertAdjacentHTML('afterend', newCard);
    console.log(place);
}
createNewCard(cardBlok, 'Car', 'Bla-bla-bla!', 500000);

console.log('Творчі завдання'.toUpperCase());

console.log('3)');

const listBlok = document.querySelector('.homework-group__element3')
function createList(place, number) {
    let list = document.createElement('ul');
    place.append(list);
    for (let i = 1; i <= number; i++) {
        list.insertAdjacentHTML('beforeend', `<li> Item ${i}</li>`)
    }
}
createList(listBlok, 5);

console.log('4)');

const images = ['https://images.pexels.com/photos/16053278/pexels-photo-16053278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/13733057/pexels-photo-13733057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/15851469/pexels-photo-15851469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'];
function getImageToGallery(imageArr) {
    const gallery = document.getElementById('gallery')
    imageArr.forEach(imageSrc => {
        gallery.insertAdjacentHTML('beforeend',  `<img src="${imageSrc}" alt="Gallery image" style="width: 100%; height: auto; margin-bottom: 10px;">`);
    });
}
getImageToGallery(images);

console.log('ДЗ'.toUpperCase());

console.log('1)');

const categoriesGroup = document.getElementById('categories');
const categoriesArr = categoriesGroup.querySelectorAll('.item')
console.log(`Кількість кетегорій: ${categoriesArr.length}`);
categoriesArr.forEach(item => {
    const categoryTitle = item.querySelector('h2').textContent;
    const elementsCount = item.querySelectorAll('ul li').length;
    console.log(`Категорія: ${categoryTitle}`);
    console.log(`Кількість елементів: ${elementsCount}`);
});

console.log('2)');

const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
];
const ingredientsList = document.getElementById('ingredients');
ingredients.forEach(element => {
    let ingredientElement = document.createElement('li');
    ingredientElement.textContent = element;
    ingredientsList.append(ingredientElement);
});

console.log('3)');

const newImages = [
    {
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];
function createGallery(imagesArr) {
    const gallery = document.getElementById('newgallery');
    const maket = imagesArr.map(({url, alt}) => 
        `<li>
            <img src="${url}" alt="${alt}">
        </li>`
    ).join('');
    gallery.insertAdjacentHTML('beforeend', maket);
}
createGallery(newImages);

