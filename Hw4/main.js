// – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами  а і б
//

function square(a, b) {
    return  a * b;
}
let res = square(1,2)
console.log(res)
//
// – створити функцію, яка обчислює та повертає площу кола з радіусом r
//
function circ(radius) {
    return Math.PI * radius * radius;
}

//
// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r
//
function cylinder(radius, height) {
    return 2 * Math.PI * radius * height
}

console.log(cylinder(4, 20));
//
// – створити функцію, яка приймає масив та виводить кожен його елемент
//
let listOfItems = ['html',' css','javascript',' ‘mysql’', '‘mongodb’', '‘react’', '‘angular’', '‘node.js’'];

function arrElem(array) {
    for (const item of array) {
        console.log(item);
    }

}
arrElem(listOfItems);
//
// – створити функцію, яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
//
function par(text) {
    document.write(`<p>${text}</p>`);
}

par('asd');
//
// – створити функцію, яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
//
function list(text) {
    document.write(`
                        <ul>
                            <li>${text}</li>
                            <li>${text}</li>
                            <li>${text}</li>
                        </ul>
                        `)
}
list('waazaap');
//
// – створити функцію, яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
//
function listCreate(text, counter) {
    document.write('<ul>');
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');

}

listCreate('zzzup', 5);
//
//     – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
//
function arrFunc(array) {

    document.write(`<ul>`);
    for (const item of array) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);

}

arrFunc([1, 2, 5, 'some', true]);
//
// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.
//
let users = [
    {id:1, name: 'vasya', age: 31, status: false},
    {id:2, name: 'petya', age: 30, status: true},
    {id:3, name: 'kolya', age: 29, status: true},
    {id:4, name: 'olya', age: 28, status: false},
    {id:5, name: 'max', age: 30, status: true},
    {id:6, name: 'anya', age: 31, status: false},
    {id:7, name: 'oleg', age: 28, status: false},
    {id:8, name: 'andrey', age: 29, status: true},
    {id:9, name: 'masha', age: 30, status: true},
    {id:10, name: 'olya', age: 31, status: false},
    {id:11, name: 'max', age: 31, status: true}
];

function objArr(users) {
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
    }
}

objArr(users);
//
//     – створити функцію яка повертає найменьше число з масиву
//
function arrayMin(numbers) {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let number = numbers[i];
        if (number < min) {
            min = number
        }
    }

    return min;
}

console.log(arrayMin([4, 5, 22, 12, 1233,]));
//
// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
//
function sum(arr) {
    let number = 0;
    for (const item of arr) {
        number = number + item;
    }
    return number;

}

console.log(sum([12, 21, 22]));
//
// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
//
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
//
function swap(arr,index1,index2) {
    if (index1 < arr.length && index2 < arr.length) {

        let temp = arr[index1]; // 11
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }
    return arr;
}

console.log(swap([1, 2, 3, 4], 0, 1));
//
// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//
// Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let currency;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            currency = item;
        }
    }
    return sumUAH/currency.value;

}

console.log(exchange(10000, [{currency: 'USD', value: 44}, {currency: 'EUR', value: 50}], 'EUR'));