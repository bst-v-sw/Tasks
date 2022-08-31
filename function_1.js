// // 1.Функции
// // Практика с функиями
//
// //function declaration
// function greet (name) {
//     console.log('Привет - ', name)
// }
// //function expression
// const greet2 = function greet2(name) {
//     console.log('Привет 2 - ', name )
// }
// greet2('Мария')
// greet('Мария')
// // 2. Анонимные функции
// let counter = 0
// const interval = setInterval(function (){
//     if (counter ===5) {
//         clearInterval(interval)
//     } else {
//         console.log(++counter)
//     }
// }, 1000)
// //3. Стрелочные функции
// //3.1
// function greet3 (name) {
//     console.log('Привет - ', name)
// }
//     greet3('Vadim')
//
// //3.2
// const arrow =(name, age) => {
//     arrow('Vadim')
//     console.log('Привет - ', name, age)
// }
// //3.3
// const arrow2 = name => console.log('Привет - ', name)
//     arrow2('Vadim')
// const pow2 = num => num **2
// console.log(pow2(5))
//
// // Параметры по умолчанию
// const sum =( a, b ) => a + b
//
// console.log(sum(41, 4))
// console.log(sum())
//
// function sumAll(...all) {
//     let result = 0
//     for (let num of all) {
//         result += num
//     }
//     return result
// }
// const res = sumAll(1, 2, 3, 4, 5)
// console.log(res)
//
// // Передача значения по ссылке
// const personOne = {
//     name: 'Bob' ,
//     age: 21
// }
// function increasePersonAge(person) {
//     person.age += 1
//     return person
// }
// increasePersonAge(personOne)
// console.log(personOne.age)
//
// //callback функции
// console.log('Привет')
// function  printMyName() {
//     console.log('Vadim')
// }
// setTimeout(printMyName, 2000)
//
// Деструктуризция параметров
// const userProfile = {
//     name: 'VADIM',
//     commentsQty: 25,
//     hasSignedAgreement: false,
// }
// const  userInfo = ({ name, commentsQty }) => {
//     if (!commentsQty) {
//         return `User ${name} has no comments`
//     }
//     return `User ${name} has ${commentsQty} comments`
// }
// console.log(userInfo(userProfile))
// //=======================================================
// // Проверка класса instanceof через функцию
// // вместо класса
// function Rabbit() {}
//
// console.log( new Rabbit() instanceof Rabbit ); // true
// //=============================
// //Деструктуризация
// // BEGIN
// const result = getSortedName([
//     { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
//     { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
//     { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
//     { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },])
// function getSortedName(users){
//     const names = [];
//
//     for (const { name } of users) {
//         names.push(name);
//     }
//     return names.sort();
// }
//
// console.log (result)
// END
// ===========================================
//Функция, которая заполняет объект данными из другого объекта по разрешенному списку ключей.
// BEGIN
// const company = {
//     name: null,
//     state: 'moderating',
// };
//
// const data = {
//     name: 'Hexlet',
//     state: 'published',
// };
// function fill(object, keys, data){
//     const filteredData = keys.length > 0 ? _.pick(data, keys) : data;
//     Object.assign(object, filteredData);
// }
//
// console.log(fill(company,['name'], data))
//=========================================
//Функция, которая выполняет глубокое копирование объектов
// BEGIN
const data = {
    key: 'value',
    key2: {
        key: 'innerValue',
        innerKey: {
            anotherKey: 'anotherValue',
        },
    },
};
const cloneDeep = (object) => {
    const result = {};
    const entries = Object.entries(object);
    for (const [key, value] of entries) {
        result[key] = isObject(value) ? cloneDeep(value) : value;
    }

    return result;
};
console.log (cloneDeep(data))
//END


