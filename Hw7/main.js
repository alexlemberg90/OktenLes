// – Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
//
// створити пустий масив, наповнити його 10 об’єктами new User(….)
//
function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
const users =[
    new User(1,'aa','afsa','a1@com','+74202323322'),
    new User(5,'aaw','asga','a2@com','+74202323322'),
    new User(3,'aae','ahsa','a3@com','+74202323322'),
    new User(4,'aar','aja','a3@com','+74202323322'),
    new User(2,'ata','aska','a4@com','+74202323322'),
    new User(6,'aya','asar','a5@com','+74202323322'),
    new User(7,'aja','asdar','a6@com','+74202323322'),
    new User(8,'aga','asas','a7@com','+74202323322'),
    new User(9,'ada','asaer','a8@com','+74202323322'),
    new User(10,'asa','asaww','a9@com','+74202323322')
]
console.log(users);
//
// – Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)
//
const filterUsers = users.filter(user=> user.id % 2 === 0);
console.log(filterUsers);
//
// – Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
const sortedUsers = users.sort((a, b)=> a.id - b.id);
console.log(sortedUsers);
//
// – створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//
// створити пустий масив, наповнити його 10 об’єктами Client
//
function Client(id, name, surname , email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}
const clients = [
    new Client(1,'asa','afsa','a1@com','+74202323322',['some','wow']),
    new Client(2,'afa','afsa','a12@com','+74202323322',['some','wow','www']),
    new Client(3,'aaa','afsa','a13@com','+74202323322',['some','wow','sas','coo']),
    new Client(4,'aqa','afsa','a14@com','+74202323322',['some']),
    new Client(5,'affa','afsa','a144@com','+74202323322',['some','wow','sas','coo']),
    new Client(6,'aaw','afsa','a15@com','+74202323322',['some','wow','sas','coo','sas','coo']),
    new Client(7,'aqwa','afsa','a16@com','+74202323322',['some','wow']),
    new Client(8,'afwa','afsa','a17@com','+74202323322',['some','wow']),
    new Client(9,'avda','afsa','a18@com','+74202323322',['some','wow']),
    new Client(10,'axca','afsa','a19@com','+74202323322',['some','wow'])
]
console.log(clients);
//
// – Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі order по зростанню. (sort)
//
const sortClients = clients.sort((a, b)=> a.order.length - b.order.length);
console.log(sortClients);
//
// – Створити функцію конструктор, яка дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//
//     — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car
//
// function Car(model, producer, year, maxSpeed, volume) {
//
//     this.model = model
//     this.producer = producer
//     this.year = year
//     this.maxSpeed = maxSpeed
//     this.volume = volume
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     };
//     this.info = function () {
//         for (const item in this) {
//             console.log(item, this[item]);
//         }
//     };
//     this.incMaxSpeed = function (addSpeed) {
//         if (addSpeed > 0) this.maxSpeed = this.maxSpeed + addSpeed;
//     };
//     this.changeYear = function (year) {
//         if (year > 1815) this.year = year;
//     };
//
//     this.addDriver = function (driver) {
//         if (driver) this.driver = driver;
//     };
// }
//
// const car = new Car('asd', 'qwe', 1999, 260, 4);
//
// car.drive();
// car.info();
// car.incMaxSpeed(100);
// car.changeYear(2000);
// car.addDriver({name:'Alex',surname:'Bobi'});

//
// – (Те саме, тільки через клас)
//
// Створити клас, який дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//
//     — addDriver (driver) – приймає об’єкт, який “водій” з довільним набором полів, і додає його в поточний об’єкт car
//
class Car {

    constructor(model, producer, year, maxSpeed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }


    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };

    info() {
        for (const key in this) {
            console.log(key, this[key]);
        }
    };

    increaseMaxSpeed(speedToAdd) {
        if (speedToAdd > 0) this.maxSpeed = this.maxSpeed + speedToAdd;
    };

    changeYear = function (year) {
        if (year > 1815) this.year = year;
    };

    addDriver = function (driver) {
        if (driver) this.driver = driver;
    };

}

const car = new Car('asd', 'qwe', 1234, 122, 4);


car.drive();
car.info();
car.increaseMaxSpeed(100);
car.changeYear(2000);
car.addDriver({name:'Alex',surname:'Bobi'});
//
// – створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
//
//     Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
//
//     За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
//
// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку
//
class Cinderella{

constructor(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}
}

const cinderella1 = new Cinderella('Alina',22,35);
const cinderella2 = new Cinderella('Alinas',23,36);
const cinderella3 = new Cinderella('Alinaa',24,37);
const cinderella4 = new Cinderella('Alinad',25,38);
const cinderella5 = new Cinderella('Alinaf',26,34);
const cinderella6 = new Cinderella('Alinac',27,34);
const cinderella7 = new Cinderella('Alinaz',28,34);
const cinderella8 = new Cinderella('Alinax',2,34);
const cinderella9 = new Cinderella('Alinaf',29,34);
const cinderella10 = new Cinderella('Alinac',11,34);

let array = [cinderella1,cinderella2,cinderella3,cinderella4,cinderella5,cinderella6,cinderella7,cinderella8,cinderella9,cinderella10];

class Prince extends Cinderella{
    constructor(name, age, findFootSize) {
        super(name,age);
        this.findFootSize = findFootSize;
    }
}

let prince = new Prince('Vasya', 22, 37);

const search = (array, prince) => {
    for (const item of array) {
        if (prince.findFootSize === item.footSize) {
            return `My Cinderella is ${item.name}`
        }
    }
}
console.log(search(array, prince));

let cinderella = array.find(value => prince.findFootSize === value.footSize);
console.log(cinderella);
//
// *Через Array.prototype. створити власний foreach, filter

Array.prototype.someForEach = function (callback) {
    const arr = this;
    for (const item of arr) {
        callback(item);
    }
};

[1, 2, 3].someForEach((value) => console.log(value));

Array.prototype.someFilter = function (callback) {
    const arr = [];
    for (const item of this) {
        if (callback(item)) {
            arr.push(item);
        }
    }

    return arr;
};

let usersArr = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

const result = usersArr.someFilter((user) => !user.status);

console.log(result);