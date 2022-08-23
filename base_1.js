// //1.Переменные
// //camelCase
// const name = 'Vadim'
// const lastName = 'Buzmakov' // string
// let age = 25 //number
// const isProgrammer = true // boolean
// console.log(name)
//
//
// //2.Мутирование
// console.log('Имя человека: ' + name +'Фамилия человека: '+ lastName + ', а возраст: ' + age)
//
// //3.Операторы
// let currentYear = 2022
// const birthYear = 1997
//
// let age = currentYear - birthYear
// console.log(age)
//
// const a = 10
// const b =5
// let c = 32
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(++currentYear)// Инкремент
// console.log(--currentYear)//Декремент
// console.log(c)
//
// //4.Типы данных
// const isProgrammer = true
// const name = 'Vadim'
// const age = 25
// let x
// //Примитивы(всего примитивов 5)
// console.log(typeof isProgrammer)//boolean
// console.log(typeof name)//string
// console.log(typeof age)// number
// console.log(x)//undefined
// console.log(typeof null)//object --- null
//
// //5.Приоритет операторов
// const  fullAge = 25
// const birthYear = 1997
// const currentYear = 2022
// // >, <, <=, >= ------ знаки сравнения
// const isFullAge = currentYear - birthYear >= fullAge
// console.log(isFullAge)
//
// //6.Условные операторы
// const courseStatus = 'ready' // ready, fail ,pending
// if (courseStatus === 'ready') {
//     console.log('Курс уже готов и его можно проходить')
// } else if (courseStatus === 'pending') {
//     console.log('Курс пока находится в стадии разработки')
// } else {
//         console.log ('Курс не готов')
// }
// // //Тернарный оператор
// const isReady = true
// isReady ? console.log('Все готово!!!') : ('Все не готово!!!')
// //
// const value = 11
// value
//     ? console.log('условие истинно')
//     : console.log('условие ложно')
// //
// //8.Функции
// function calculateAge(year) {
//     return 2022 - year
// }
// //console.log(calculateAge(1997))
// function logInfoAbout(name, year) {
//     const age = calculateAge(year)
//     console.log('Человек по имени '+ name + 'сейчас имеет возвраст ' + age)
// }
// logInfoAbout('Вадим ' , 1997)
//
// //9.Массивы
// const cars = ['Мазда','Мерседес','Форд']
// //const cars = new Array ('Мазда' ,'Мерседес','Форд','Ауди')
// console.log(cars)
//
// console.log(cars[0])
// console.log(cars[1])
// console.log(cars[2])
// console.log(cars[3])
// console.log(cars.length) // длина массива в числовом значении
//
// cars[0] = 'Porsche'
// console.log(cars)
// cars[3] = 'Volvo'
// console.log(cars)
// cars[cars.length] = 'Мазда'
// console.log(cars)
//
// //10.Циклы
//  const cars = ['Мазда' ,'Мерседеc','Форд','Ауди']
// // for (let i = 0; i < cars.length; i++) {
// //     const car = cars[i]
// //     console.log(car)}
// for (let car of cars){
//     console.log(car)
// }
// //11.Объекты
// const person = {
//     firstname: 'Vadim' ,
//     lastName:'Buzmakov' ,
//     languages: ['Ru', 'En','De'],
//     hasWife: false,
//     greet : function (){
//         console.log('greet from person')
//     }
// }
// console.log(person.firstname)
// console.log(person.lastName)
// const key = 'languages'
// console.log(person[key])
// person.hasWife = true
// person.isProgrammer = true
// console.log(person)
// person.greet()
//
// //Условные инструкции. Инстукция switch
// const month = 12
// switch (month) {
//     case 12 :
//         console.log('декабрь')
//         break
//     case 1:
//         console.log('январь')
//         break
//     case 2:
//         console.log('февраль')
//         break
//     default:
//         console.log('Это не зимний месяц')
// }
//
// Инкремент, декремент
//Функция, которая принимает на вход строку и возвращает её копию, у которой каждый n-ный элемент
// переведен в верхний регистр. n – задается на входе в функцию.
const makeItFunny = (str, n) => {
  let i = 0;
  let result = '';
  while (i < str.length) {
    const current = str[i];
    if ((i + 1) % n === 0) {
      result = `${result}${current.toUpperCase()}`;
    } else {
      result = `${result}${current}`;
    }
    i++;
  }

  return result;
};
console.log(makeItFunny('I never look back', 2))