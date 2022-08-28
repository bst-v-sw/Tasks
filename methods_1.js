//Методы - свойства объекта, значения которого функция
const myCity = {
    city: 'New York',
    cityGreeting: function () {         // Это метод
        console.log('Greetings!!')
    }
}
myCity.cityGreeting()// 'Greetings!!'

//Значения ссылочного типа
const person = {
    name: 'Bob',
    age : 21
}
//Мутация объекта
person.age = 22
person.isAdult = true

console.log(person.age)
console.log(person.isAdult)

//Мутация копий объекта
const person = {
    name: 'Bob',
    age : 25
}
const person2 = person
person2.isAdult = true
person2.age = 26
console.log(person.age)
console.log(person.isAdult)

//Разделить слова в предложении запятыми
const rw = (data) => {
    return data
        .split(".")
        .map(v => v.trim().split(" ")[0])
        .join(", ");
}
console.log(rw('yfsbl lsndv skdcnk skdvbkj skvbk skdvb wkvvnwlvm')
===================================================
//Методы с JSON
let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
};

let json = JSON.stringify(student);

console.log(typeof json); // мы получили строку!

console.log(json);
//========================
//число в JSON остаётся числом
console.log( JSON.stringify(1) ) // 1

// строка в JSON по-прежнему остаётся строкой, но в двойных кавычках
console.log( JSON.stringify('test') ) // "test"

console.log( JSON.stringify(true) ); // true

console.log( JSON.stringify([1, 2, 3]) ); // [1,2,3]
//=============================
let meetup = {
    title: "Conference",
    room: {
        number: 23,
        participants: ["john", "ann"]
    }
};

console.log( JSON.stringify(meetup) );
//==================================
let room = {
    number: 23
};

let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room // meetup ссылается на room
};

room.occupiedBy = meetup; // room ссылается на meetup

console.log( JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']) );


