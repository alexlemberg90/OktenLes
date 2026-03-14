// – Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [1, 2, 3, 4, 5 ,'arr', 'mae', 'asa', true, false];

console.log(arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6],arr[7],arr[8],arr[9]);

// – Створити 3 об’єкти які описують книги. Поля об’єкту : title ,pageCount, genre.

let book1 ={
    title: 'assa',
    pageCount: 150,
    genre: 'horror'
};
let book2 ={
    title: 'vasa',
    pageCount: 100,
    genre: 'drama'
};
let book3 ={
    title: 'miki',
    pageCount: 1000,
    genre: 'comedy'
};

//     – Створити 3 об’єкти, які описують книги. Поля об’єкту : title ,pageCount, genre, authors. Поле “автори” – являється  масивом. Кожен автор має поля name та age.
//
let book4 ={
    title: 'assa',
    pageCount: 150,
    genre: 'horror',
    authors: [{
        name: 'John',
        age: 32
    }]
};
let book5 ={
    title: 'vasa',
    pageCount: 100,
    genre: 'drama',
    authors: [{
        name: 'Anna',
        age: 25
    }]
};
let book6 ={
    title: 'miki',
    pageCount: 1000,
    genre: 'comedy',
    authors: [{
        name: 'Serg',
        age: 38
    }]
};

//     – Створити масив з 10 об’єктами, які описують сутніть “користувач”. Поля: name, username,password. Вивести в консоль пароль кожного користувача
//

let users = [
    {name: 'a', username: 'qwe', password: '1234'},
    {name: 's', username: 'dfg', password: '12345'},
    {name: 'd', username: 'asd', password: '12346'},
    {name: 'f', username: 'qwe', password: '12347'},
    {name: 'g', username: 'dfg', password: '12348'},
    {name: 'h', username: 'asd', password: '12349'},
    {name: 'j', username: 'qwe', password: '12340'},
    {name: 'k', username: 'dfg', password: '123411'},
    {name: 'l', username: 'asd', password: '123412'},
    {name: 'q', username: 'asd', password: '123413 '}
];

console.log(users[0].password,users[1].password,users[2].password,users[3].password,users[4].password,users[5].password,users[6].password,users[7].password,users[8].password,users[9].password);


// – описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив – вам потрібно подумати. Нормальних варіантів опису – 2. Варіант, коли в вас буде одновимірний масив з 21 значенням виключаємо одразу
//

let temps = [
    {day:'monday',morningTemp: 6, dayTemp: 15, nightTemp: 11},
    {day: 'tuesday', morningTemp: 6, dayTemp: 15, nightTemp: 11},
    {day: 'wednesday', morningTemp: 6, dayTemp: 15, nightTemp: 11},
    {day: 'thursday', morningTemp: 6, dayTemp: 15, nightTemp: 11},
    {day: 'friday', morningTemp: 6, dayTemp: 15, nightTemp: 11},
    {day: 'saturday', morningTemp: 6, dayTemp: 15, nightTemp: 11},
    {day: 'sunday', morningTemp: 6, dayTemp: 15, nightTemp: 11},
]

// – Є змінна х, якій ви надаєте довільне числове значення.
//
//     Якщо змінна x не дорівнює нулю, виведіть ‘Вірно’, інакше виведіть ‘Невірно’. Перевірте  скрипт при a, що дорівнює 1, 0, -3


let x = +prompt('enter number');
if (x !== 0) {
    console.log('correct');
} else {
    console.log('wrong');
}

//
// – Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//
// (в першу, другу, третю або четверту частину години).
//
let time =+prompt('enter number');
if (time >= 0 && time < 15) {
    console.log('1');
} else if (time >= 15 && time < 30) {
    console.log('2');
} else if (time >= 30 && time < 45) {
    console.log(3);
} else if (time >= 45 && time < 60) {
    console.log('4');
} else {
    console.log('enter number 0-60 Please');
}

//
// – У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину (декаду) місяця потрапляє це число (у першу, другу чи третю).
//
let day = 22;

if (day >= 1 && day <= 10) {
    console.log('1');
} else if (day > 10 && day <= 20) {
    console.log('2');
} else if (day > 20 && day <= 31) {
    console.log(3);
}

// – Скласти розклад на тиждень за домопогою switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа, що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
switch (1) {
    case 1:
        console.log('monday');
        break;
    case 2:
        console.log('tuesday');
        break;
    case 3:
        console.log('wednesday');
        break;
    case 4:
        console.log('thursday');
        break;
    case 5:
        console.log('friday');
        break;
    case 6:
        console.log('saturday');
        break;
    case 7:
        console.log('sunday');
        break;

    default:
        console.log('just 7 day on week');

}

// – Користувач вводить або має два числа.
//
//         Потрібно знайти та вивести максимальне число з тих двох .
//
//         Також потрібно врахувати, коли введені рівні числа.
//

let first = +prompt('enter number');
let second = +prompt('enter number');

if (first > second) {
    console.log(first);
} else if (second > first) {
    console.log(second);
} else if (first === second) {
    console.log('====');
}
// #iBvqtjEm
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

let y = '';

if (!x) {
    y = 'default';
}
//
//         з файлу arrays.js ( лежить у вкладеннях)  взяти масив coursesAndDurationArray. За допомогою іф перевірити кожен його елемент на тривалість навчання. У випадку, якщо тривалість довша за 5 місяців, вивести в консоль “Супер”.
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер');
}
