
// – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами а і б
//

const square = (a, b) => a * b;
console.log(square(5, 4));
//
// – створити функцію, яка обчислює та повертає площу кола з радіусом r
//
const circ = (radius) => Math.PI * radius * radius;
//
// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r
//
const cylinder =(radius, height) => 2 * Math.PI * radius * height;
//
// – створити функцію, яка приймає масив та виводить кожен його елемент
//
const arrElem = (array) => {
    for (const item of array)
        console.log(item);}

arrElem([2,3,4,5])
//
// – створити функцію, яка створює параграф з текстом. Текст задати через аргумент
//
const par = (text) => document.write(`<p>${text}</p>`);

par('sdsd')
//
// – створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
const list = (text) => document.write(`
                        <ul>
                            <li>${text}</li>
                            <li>${text}</li>
                            <li>${text}</li>
                        </ul>
                        `);
list(5);
//
// – створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
const listCreate = (text, counter) => {
    document.write('<ul>');
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}
//
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
const arrFunc = (array) => {

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
const objArr = (users) => {
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
    }
}
//
// – створити функцію, яка повертає найменше число з масиву
//
const arrayMin = (numbers) => {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let number = numbers[i];
        if (number < min) {
            min = number
        }
    }

    return min;
}
//
// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
//
const sum = (arr) => {
    let number = 0;
    for (const item of arr) {
        number = number + item;
    }
    return number;
}
//
// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
//
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
//
const swap = (arr,index1,index2) => {
    if (index1 < arr.length && index2 < arr.length) {

        let temp = arr[index1]; // 11
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }
    return arr;
}
//
// – Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//
// Приклад exchange(10000,[{currency:’USD’,value:40},{currency:’EUR’,value:42}],’USD’) // => 250

const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let currency;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            currency = item;
        }
    }
    return sumUAH/currency.value;

}

console.log(exchange(10000, [{currency: 'USD', value: 44}, {currency: 'EUR', value: 50}], 'EUR'));