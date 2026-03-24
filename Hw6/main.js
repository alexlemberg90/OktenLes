// – Знайти та вивести довжину наступних стрінгових значень
//
//  ‘hello world’
//
// ‘lorem ipsum’
//
// ‘javascript is cool’
//
let words1 = 'hello world';
let words2 = 'lorem ipsum';
let words3 = 'javascript is cool';
console.log(words1.length);
console.log(words2.length);
console.log(words3.length);
//
// – Перевести до великого регістру наступні стрінгові значення
//
//       ‘hello world’, ‘lorem ipsum’, ‘javascript is cool’
//
console.log(words1.toUpperCase());
console.log(words2.toUpperCase());
console.log(words3.toUpperCase());
//
// – Перевести до нижнього регістру наступні стрінгові значення
//
//       ‘HELLO WORLD’, ‘LOREM IPSUM’, ‘JAVASCRIPT IS COOL’
//
let words4 = 'HELLO WORLD';
let words5 = 'LOREM IPSUM';
let words6 = 'JAVASCRIPT IS COOL';

console.log(words4.toLowerCase());
console.log(words5.toLowerCase());
console.log(words6.toLowerCase());

// – Є “брудна” стрінга let str = ‘ dirty string   ‘ . Почистити її від зайвих пробілів.
//
let str = ' dirty string   ';
let strClear = str.trim();
//
// – Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//
let str2 = "Ревуть воли як ясла повні";

const stringToarray = (str) => str.split(' ');

let strArr = stringToarray(str2);
console.log(strArr);
//
// – є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об’єкти в масиві на стрінгові.
//
let numArr = [10,8,-7,55,987,-1011,0,1050,0]

const strNum = numArr.map(number => number.toString());
console.log(strNum);
//
// – створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки  – залежно від значення аргументу direction.
//
let nums = [11,21,3];
//
// sortNums(nums,’ascending’) // [3,11,21]
//
// sortNums(nums,’descending’) // [21,11,3]
//
function sortNums(array,direction) {
    if (direction === 'ascending') { return array.sort((a, b) => a - b);}
    if (direction === 'descending') { return array.sort((a, b) => b - a);}
}

console.log(sortNums(nums,'descending'));
//
// – є масив
//
let coursesAndDurationArray = [
    {title: '‘JavaScript Complex’', monthDuration: 5},
{title: '‘Java Complex’', monthDuration: 6},
{title: '‘Python Complex’', monthDuration: 6},
{title: '‘QA Complex’', monthDuration: 4},
{title: '‘FullStack’', monthDuration: 7},
{title: '‘Frontend’', monthDuration: 4}
];

//
//  — відсортувати його за спаданням за monthDuration
//
//  — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
//
//  — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
//
const newObjArray = coursesAndDurationArray
    .sort((a,b) => b.monthDuration - a.monthDuration)
    .filter(value => value.monthDuration > 5).map((value,index) => ({...value, id: index + 1}));
console.log(newObjArray);
//
// взяти з arrays.js масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// –написати пошук всіх об’єктів, в яких в modules є sass
//
// –написати пошук всіх об’єктів, в яких в modules є docker
const sassArr = coursesArray.filter(course =>  course.modules.includes('sass'));
const dockerArr = coursesArray.filter(course => course.modules.includes('docker'));

console.log(sassArr);
console.log(dockerArr);
//
// описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
// Приклад моделі об’єкту карти:
//
// {
//
//     cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’
//
//     value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
//
//     color:”, // ‘red’,’black’
//
// }

const suits = ['spade', 'diamond', 'heart', 'club'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
const cards = [];

for (const suit of suits) {
    for (const value of values) {
        const card = {cardSuit: suit, value: value};
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        } else {
            card.color = 'black';
        }
        cards.push(card);
    }
}


// - знайти піковий туз
console.log(cards.find(card => card.value === 'ace' && card.cardSuit === 'spade'));

// - всі шістки
console.log(cards.filter(card => card.value === '6'));

// - всі червоні карти
console.log(cards.filter(card => card.color === 'red'));


// - всі буби
console.log(cards.filter(card => card.cardSuit === 'diamond'));

// - всі трефи від 9 та більше
console.log(cards.filter(card => card.cardSuit === 'club' && (card.value !== '6' || card.value !== '7' || card.value !== '8' || card.value !== '9')));



// #EP5I1UUzAX
//
// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
//
// Приклад моделі кінцевого об’єкту
//
// {
//
//     spades:[],
//
//         diamonds:[],
//
//     hearts:[],
//
//     clubs:[]
//
// }
const sortedCards = cards.reduce((accum, card) => {
    switch (card.cardSuit) {
        case 'spade':
            accum.spades.push(card);
            break;
        case 'diamond':
            accum.diamonds.push(card);
            break;
        case 'club':
            accum.clubs.push(card);
            break;
        case 'heart':
            accum.hearts.push(card);
            break;

    }


    return accum;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});


console.log(sortedCards);