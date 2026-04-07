// – Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.
//
const button = document.getElementById('btn');

button.addEventListener('click', () => {
    document.getElementById('text').style.display = 'none';
})

// – створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію. При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача
//


const Form1 = document.forms.Form1;

Form1.addEventListener('submit', () => {
    const ageValue = +Form1.age.value;
    if (ageValue < 18) {
        document.body.innerHTML += `<p>sorry you age is - ${ageValue}</p>`;
    }
});
// Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ. Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом
//
const Form2 = document.forms.Form2;
const userInfo = document.getElementById('userInfo');

Form2.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameValue = Form2.name.value;
    const surnameValue = Form2.surname.value;
    const ageValue = +Form2.age.value;
    userInfo.innerText = nameValue + ' ' + surnameValue + ' ' + ageValue;
});
//
// є сторінка, на якій є блок, в кому знаходиться цифра. Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
//
let updateNumber = +localStorage.getItem('number');
updateNumber += 1;
localStorage.setItem('number', updateNumber);
document.body.innerHTML += `<p>number of update is - ${updateNumber}</p>`;


// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM
//
let sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || [];
sessionsList.push(new Date());
localStorage.setItem('sessionsList', JSON.stringify(sessionsList));
//
// створити конвертор ваги з кг в фунти. дані заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
//
const input = document.getElementById('conversation');
const result = document.getElementById('result');
input.oninput = function () {
    result.innerText = +this.value * 2.2;
};
//
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об’єкт
// сигнатура функції –
// addToLocalStorage(arrayName:string,objToAdd:any{}):void
//
localStorage.setItem('someArr', JSON.stringify([{aswa: 1212}, {asweea: 123312}]));

function addToLocalStorage(arrayName, objToAdd) {
    const lsArr = localStorage.getItem(arrayName);
    if (!lsArr) {
        throw new Error('something went wrong!');
    }
    console.log(lsArr);
    const array = JSON.parse(lsArr);
    console.log(array);
    array.push(objToAdd);

    localStorage.setItem(arrayName, JSON.stringify(array));
}

addToLocalStorage('someArr', {caasc: 56});
addToLocalStorage('someArr', {cassasc: 5644});
//
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.
//
//     При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.
//


const tableForm = document.forms['tableForm'];
const table = document.getElementById('table');

tableForm.onsubmit = function (e) {
    table.innerText = '';
    e.preventDefault();
    const linesValue = +tableForm.lines.value;
    const cellsValue = +tableForm.cells.value;
    const dataValue = tableForm.info.value;

    for (let i = 0; i < linesValue; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < cellsValue; j++) {
            const td = document.createElement('td');
            td.innerText = dataValue;
            tr.appendChild(td);
        }

        table.appendChild(tr);

    }

};

//
// *** (подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення “100грн”
//
// при перезавантаженні сторінки до значення додається по 10грн, але !!! зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається
let moneyDiv = document.getElementById('uah');
let money = +localStorage.getItem('money') || 100;
let lastUpdate = +localStorage.getItem('lastUpdate') || 0;
let now = Date.now();

if (now - lastUpdate >= 10000) {
    money += 10;
    localStorage.setItem('money', money);
    localStorage.setItem('lastUpdate', now);
}
moneyDiv.innerText = money + 'грн';

// ***PAGINATION
//
// зробити масив на 100 об’єктів та дві кнопки prev next
//
// при завантаженні сторінки з’являються перші 10 об’єктів.
//
//     При натисканні next виводяться наступні 10 об’єктів
//
// При натисканні prev виводяться попередні 10 об’єктів

let objArr = [];
function createObj() {
    for (let i = 1; i <= 100; i++) {
        objArr.push({
            id: i,
            name: `Item - ${i}`
        });

    }
    return objArr;
}
createObj();

const listDiv = document.getElementById('list');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentPage = 1;
const itemsPerPage = 10;

function render() {
    listDiv.innerHTML = '';

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = objArr.slice(start, end);

    for (const item of pageItems) {
        const div = document.createElement('div');
        div.innerText = `${item.id} - ${item.name}`;
        listDiv.appendChild(div);
    };
}
    nextBtn.onclick = function () {
        currentPage++;
        render()
    };
    prevBtn.onclick = function () {
        currentPage--;
        render()
    };
render();