const startLesson = '----Урок 19 Classwork';
console.log(startLesson.toUpperCase());

console.log('Додаткові завдання'.toUpperCase());

console.log('1)');

const firstBtn = document.querySelector('.firstbtn');
firstBtn.addEventListener('click', () => {
    firstBtn.style.background = 'blue';
});

console.log('2)');

const secondBtn = document.querySelector('.secondbtn');
const seconTitle = document.querySelector('.secondtitle');
secondBtn.addEventListener('click', () => {
    seconTitle.classList.add('title-style');
})

console.log('3)');

const inputField = document.querySelector('#userInput');
const submitButton = document.querySelector('#submitBtn');
const outputDiv = document.querySelector('#outputDiv');

submitButton.addEventListener('click', () => {
    const inputText = inputField.value;
    outputDiv.textContent = inputText;
})

console.log('4)');

const inputUser = document.querySelector('#inputName');
const submitUser = document.querySelector('#submitName');
submitUser.addEventListener('click', () => {
    const userName = inputUser.value;
    alert(`Вітаємо ви успішно зареєструвалися ${userName}`);
})

console.log('Творчі завдання'.toUpperCase());

console.log('5)');

const btnHallo = document.querySelector('.buttonfive');
btnHallo.addEventListener('click', () => {
    alert('Hallo!');
})

console.log('6)');

const userName = document.querySelector('#user-name');
const submitUserName = document.querySelector('#submit-username');
submitUserName.addEventListener('click', () => {
    const newUser = userName.value;
    alert(`Вітаємо ${newUser}`);
})

console.log('7)');

const colorBtn = document.querySelector('.buttonseven');
function getRandonColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;  
}
colorBtn.addEventListener('click', () => {
    const randomColor = getRandonColor();
    document.body.style.backgroundColor = randomColor;
})

console.log('8)');

const onOffBtn = document.querySelector('.buttoneight');
const onOffTitle = document.querySelector('.on-off_title');
onOffBtn.addEventListener('click', () => {
    onOffTitle.classList.toggle('visit');
})

console.log('9)');

function greetUser() {
    const userInfo = prompt('Введіть ваше ім`я');
    if (userInfo) {
        alert(`Hallo ${userInfo}!!!`);
    } else {
        alert('Hallo new user!!!')
    }
}
window.onload = greetUser;

console.log('10)');

const textContent = document.querySelector('#textContent');
const increaseBtn = document.querySelector('#increaseBtn');
const decreaseBtn = document.querySelector('#decreaseBtn');
let textSize = 14;
increaseBtn.addEventListener('click', () => {
    textSize += 2;
    textContent.style.fontSize = `${textSize}px`;
});
decreaseBtn.addEventListener('click', () => {
    textSize -= 2;
    textContent.style.fontSize = `${textSize}px`;
});

console.log('11)');

const userFirstname = document.querySelector('#form__firstname');
const userLastname = document.querySelector('#form__lastname');
const userEmail = document.querySelector('#form__email');
const formSubmit = document.querySelector('#form__submit');

formSubmit.addEventListener("click", () => {
    alert(`Your Firstname: "${userFirstname.value}"; Your Lastname: "${userLastname.value}"; Your Email: "${userEmail.value}";`);
})

console.log('12)');

const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
});
canvas.addEventListener('mousemove', (e) => {
    if (isDrawing) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    }
});
canvas.addEventListener('mouseup', () => {
    isDrawing = false;
});
canvas.addEventListener('mouseleave', () => {
    isDrawing = false;
});

console.log('ДЗ'.toUpperCase());

console.log('1)');

const btnOpenModal = document.querySelector('.button__modal[data-action="open-modal"]');
const btnCloseModal = document.querySelector('.button__modal[data-action="close-modal"]');
const backdropModal = document.querySelector('.backdrop__modal');

btnOpenModal.addEventListener("click", () => {
    backdropModal.classList.add('show-modal');
});
btnCloseModal.addEventListener("click", () => {
    backdropModal.classList.remove('show-modal');
});

console.log('2)');

const backdropBtn = document.querySelector(".js-backdrop");

backdropBtn.addEventListener("click", () => {
    backdropModal.classList.remove('show-modal');
});

console.log('3)');

const radioBtn = document.querySelectorAll('input[name="color"]');

radioBtn.forEach(radio => {
    radio.addEventListener("click", (event) => {
        document.body.style.backgroundColor = event.target.value;
    })
})

console.log('4)');

const inputUserName = document.getElementById("name-input");
const spanElement = document.getElementById("name-output");

inputUserName.addEventListener("input", () => {
    let inputContent = inputUserName.value;
    if (inputContent.length >= 1) {
        spanElement.textContent = inputContent;
    } else {
        spanElement.textContent = 'незнайомець';
    }
})

console.log('5)');

const validInput = document.getElementById("validation-input");

validInput.addEventListener("blur", () => {
    const requiredLength = parseInt(validInput.getAttribute("data-length"), 10);
    const currentLength = validInput.value.length; 
    if (currentLength >= requiredLength) {
        validInput.classList.add("valid"); 
        validInput.classList.remove("invalid"); 
    } else {
        validInput.classList.add("invalid"); 
        validInput.classList.remove("valid"); 
    }
});

console.log('6)');

const inputSize = document.getElementById("font-size-control");
const spanSize = document.getElementById("text");
let sizeText = '14px';
spanSize.style.fontSize = sizeText;

inputSize.addEventListener("input", () => {
    sizeText = `${inputSize.value}px`;
    spanSize.style.fontSize = sizeText;
})
