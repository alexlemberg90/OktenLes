// – є масив
//
let coursesAndDurationArray = [

    {title: 'JavaScript Complex', monthDuration: 5},

{title: 'Java Complex', monthDuration: 6},

{title: 'Python Complex', monthDuration: 6},

{title: 'QA Complex', monthDuration: 4},

{title: 'FullStack', monthDuration: 7},

{title: 'Frontend', monthDuration: 4}

];

//
// за допомогою map перетворити кожен елемент на наступний тип {id,title,monthDuration
//
//     Зробити все ВИКЛЮЧНО за допомогою інлайн конструкції
//
let courses = coursesAndDurationArray.map((item,index) => ({...item,id: index+1}));
console.log(courses);
//
//     Створити функцію, яка робить глибоку копію об’єкта.
//
//         Додати перевірки на undefined, null, NaN.
//
//         Подумати і реалізувати логіку, в якій кінцевий об’єкт буде мати функції, які в нього були до цього моменту.

function cloner(obj) {
    if (obj) {
        let funcArr = [];
        for (const key in obj) {
            if (typeof obj[key] === 'function') {
                const functionClone = obj[key].bind({});
                funcArr.push({functionClone, key});
                console.log(funcArr)
            }
        }
        const cloneObj = JSON.parse(JSON.stringify(obj));
        for (const foo of funcArr) {
            cloneObj[foo.key] = foo.functionClone;
        }
        return cloneObj

    }

    throw new Error('cannot clone');

}

const clone = cloner({title: 'Frontend', monthDuration: 4, foo() {
        console.log('Frontend')}})
console.log(clone)