const startLesson = '----Урок 19 Classwork';
console.log(startLesson.toUpperCase());

console.log('Додаткові завдання'.toUpperCase());

console.log('1)');

const clearBtn = document.querySelector(".js-clear");
const paragraf = document.querySelector(".output");
let paragrafText = '';

document.addEventListener("keydown", (event) => {
    paragrafText += event.key
    paragraf.textContent = paragrafText;
})
clearBtn.addEventListener("click", () => {
    paragraf.textContent = "";
})

console.log('2)');

const userInput = document.getElementById("input");
const userMessage = document.getElementById("message");

userInput.addEventListener("keypress", (event) => {
    userMessage.textContent = event.value;
})

console.log('3)');

const userKeyBord = document.getElementById("keybord-text");
let fullTextKey = "";

document.addEventListener("keypress", (event) => {
    fullTextKey += event.code;
    userKeyBord.textContent = fullTextKey; 
})

console.log('4)');

const boxKey = document.getElementById("box");

document.addEventListener("keydown", (event) => {
    event.preventDefault();
    if (event.code === "KeyY") {
        boxKey.style.backgroundColor = "yellow";
    } 
    if (event.code === "KeyG") {
        boxKey.style.backgroundColor = "green";
    } 
})

console.log('Творчі завдання'.toUpperCase());

console.log('1)');

const boxTransofrm = document.getElementById("box2");
let transformNumberTop = 50;
let transformNumberLeft = 50;

document.addEventListener("keydown", (event) => {
    event.preventDefault();
    if (event.code === "ArrowDown") {
        transformNumberTop += 5;
        boxTransofrm.style.top = `${transformNumberTop}%`;
    } 
    if (event.code === "ArrowUp") {
        transformNumberTop -= 5;
        boxTransofrm.style.top = `${transformNumberTop}%`;
    } 
    if (event.code === "ArrowLeft") {
        transformNumberLeft -= 5;
        boxTransofrm.style.left = `${transformNumberLeft}%`;
    } 
    if (event.code === "ArrowRight") {
        transformNumberLeft += 5;
        boxTransofrm.style.left = `${transformNumberLeft}%`;
    } 
})

console.log('2)');

let gameMarke = document.getElementById("game-marke");
const gameKey = document.getElementById("game-key");
let gameConsol = document.getElementById("game-status");
const newGameBtn = document.getElementById("new-game_btn");
const gameList = ['t', 'D', 'h', 'L', 'p', 'Y', 'g', 'u', 'Q', 'E', 'N', 'D'];
let currentKeyIndex = 0;
document.addEventListener("keydown", (event) => {
    if (event.key === "Shift" || event.key === "Control" || event.key === "Alt" || event.key === "CapsLock") {
        return; 
    }
    let rightKey = gameList[currentKeyIndex];
    let nextKey = gameList[currentKeyIndex + 1] || 'немає'; 
    gameMarke.textContent = `Наступна клавіша >>> ${nextKey} <<<`;

    if (rightKey === event.key) {
        currentKeyIndex += 1;
        gameConsol.textContent = 'Чудово так тримати!!!';
        gameConsol.style.color = 'green';
    } else {
        currentKeyIndex = 0;
        gameConsol.textContent = 'УПС! Все спочатку...';
        gameConsol.style.color = 'red';
    }
    if (currentKeyIndex >= gameList.length) {
        gameConsol.textContent = 'Вітаємо, ти пройшов гру!';
        currentKeyIndex = 0; 
    }
})
gameKey.textContent = gameList.join(', '); 
gameConsol.textContent = ' ';
newGameBtn.addEventListener('click', () => {
    currentKeyIndex = 0;
    gameConsol.textContent = 'Нова гра розпочата!';
    gameMarke.textContent = `Наступна клавіша >>> ${gameList[currentKeyIndex]} <<<`;
})


console.log('Супер творчі завдання'.toUpperCase());

console.log('1)');

const block = document.querySelector(".block");

let clickMouse = false;
let blockX, blockY;

block.addEventListener('mousedown', (e) => {
    clickMouse = true;
    blockPosition = block.getBoundingClientRect();
    blockX = e.clientX - blockPosition.left - blockPosition.width / 2;
    blockY = e.clientY - blockPosition.top - blockPosition.height / 2;
})
document.addEventListener('mouseup', () => {
    clickMouse = false;
});
document.addEventListener('mousemove', (e) => {
    if (clickMouse) {
        const newLeft = e.clientX - blockX;
        const newTop = e.clientY - blockY;
        block.style.left = `${newLeft}px`;
        block.style.top = `${newTop}px`;
    }
});

console.log('ДЗ'.toUpperCase());

console.log('1)');

const gallery = document.querySelector('.gallery');
document.addEventListener('keydown', (event) => {
const scrollAmount = 100; 

if (event.key === 'ArrowRight') {
    gallery.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
} else if (event.key === 'ArrowLeft') {
    gallery.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
}
});

console.log('2)');

const controls = document.getElementById('controls');
const input = controls.querySelector('input');
const renderBtn = controls.querySelector('[data-action="render"]');
const destroyBtn = controls.querySelector('[data-action="destroy"]');
const boxesContainer = document.getElementById('boxes');

renderBtn.addEventListener('click', () => createBoxes(Number(input.value)));
destroyBtn.addEventListener('click', destroyBoxes);
function createBoxes(amount) {
    const boxes = [];
    let width = 30;
    let height = 30;
    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.width = `${width}px`;
        box.style.height = `${height}px`;
        box.style.backgroundColor = getRandomColor();
        width += 10;
        height += 10;
        boxes.push(box);
    }
    boxesContainer.append(...boxes);
}
function destroyBoxes() {
    boxesContainer.innerHTML = '';
}
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}