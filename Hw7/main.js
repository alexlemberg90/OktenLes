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
function Car(mode, producer, year, maxSpeed, engineVolume) {

    this.mode = mode
    this.producer = producer
    this.year = year
    this.maxSpeed = maxSpeed
    this.engineVolume = engineVolume
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    this.info = function () {
        for (const key in this) {
            console.log(key, this[key]);
        }
    };
    this.increaseMaxSpeed = function (addSpeed) {
        if (addSpeed > 0) this.maxSpeed = this.maxSpeed + addSpeed;
    };
    this.changeYear = function (year) {
        if (year > 1815) this.year = year;
    };

    this.addDriver = function (driver) {
        if (driver) this.driver = driver;
    };
}

const car = new Car('asd', 'qwe', 1234, 122, 4);
console.log(car);

car.drive();
car.info();
car.increaseMaxSpeed(100);
car.changeYear(2000);
car.addDriver({});
console.log(car);
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
//
//
//
//
//
//
//
//
// #zg6Fifnqig
//
// – створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
//
//     Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
//
//     За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
//
// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку
//
//
//
//
//
//
//
//
//
// #gsKLAsNWM
//
// *Через Array.prototype. створити власний foreach, filter