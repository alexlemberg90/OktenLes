// – створити блок,
let div = document.createElement('div');
// – додати йому класи wrap, collapse, alpha, beta
div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');
// – додати стилі (довільні значення) : колір фону, колір тексту, розмір тексту
//done
// – додати цей блок в body.
document.body.appendChild(div);
// – клонувати його повністю, та додати клон в body.
let cloneDiv = div.cloneNode(true);
document.body.appendChild(cloneDiv);

// – Є масив:
//
let arr= ['Main','Products','About us','Contacts'];
//
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let ul = document.createElement('ul')
for (const string of arr) {
   let li = document.createElement('li');
   li.appendChild(document.createTextNode(string));
   ul.appendChild(li);
}
document.body.appendChild(ul);

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (const course of coursesAndDurationArray) {
    const div = document.createElement('div');
    div.innerText = `${course.title} ${course.monthDuration}`
    document.body.appendChild(div);
}
//
// - Є масив
//він з верху=))
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h2 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.


for (const course of coursesAndDurationArray) {

    const div = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.innerText = course.title;
    const p = document.createElement('p');
    p.innerText = course.monthDuration

    div.append(h2, p);

    document.body.appendChild(div);
}
//
// =========
//
// – Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
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
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
//
// Приклад структури знаходиться у файлі example.png, який лежить в папці з поточним файлом
let mainDiv = document.createElement(`div`);
mainDiv.style.border = `solid 1px red`
for (const course of coursesArray) {
    let courseDiv = document.createElement(`div`);
    courseDiv.style.border = `solid 1px black`
    courseDiv.innerHTML = `
name - ${course.title}<br>
monthDuration - ${course.monthDuration}
hourDuration -  ${course.hourDuration}<br>
moduels :
`;

    mainDiv.appendChild(courseDiv);

    let ul = document.createElement(`ul`);
    courseDiv.appendChild(ul);

    for (const courseElement of course.modules) {
        let li = document.createElement(`li`);
        li.innerHTML = courseElement;
        ul.appendChild(li)
    }

}
document.body.appendChild(mainDiv)