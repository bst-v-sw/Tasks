// Массивы
// Практика с даннами массивов
// const cars = ['Мазда','Форд','Мерседес','БМВ']
// const people = [
//     {name: 'Vadim' , budget: 4200},
//     {name: 'Victoria' , budget: 3500},
//     {name: 'Olga' , budget: 1700},
// ]
// const fib = [1, 1, 2, 3, 5, 8, 13]
// //
// console.log(cars.length)
// console.log(cars)
// console.log(cars[1])// вывод первого элемента массива
// //
// // Метод
// // Добавить элемент в конец массива
// cars.push('Рено')
// //Добавить элемент в начало массива
// cars.unshift('Волга')
// console.log(cars)
// //Убрать первый элемент из массива
// const firstItem = cars.shift()
// console.log(firstItem)
// //Вызывает последний элемент и удаляет его
// const lastCar = cars.pop()
// console.log(lastCar)
// console.log(cars)
// // Метод переворота строки
// console.log(cars.reverse())
// console.log(cars)
//
// //Возврат индекса по элементу
// const index = cars.indexOf('БМВ')
// console.log(index)
// cars[index] = 'Porshe'
// console.log(cars)
//
// // Поиск индекса по элементу
// const index = people.findIndex(function (person) {
//     return person.budget === 3500
// })
// console.log(index)
//
// //Поиск Элемента
// //упрощенная запись - через стрелочную функцию
// const person = people.find(person => person.budget === 3500)
//     console.log(person)
//
// //Задача 1
// //Разделить строку по буквам через split, выполнить реверс строки и превратить в новую строку путем соединения элементов
// const text ='Привет, мы изучаем JavaScript'
// const reverseText = text.split('').reverse().join(' ')
// console.log(reverseText)
//
// // Задача 2
// //Перевести все элементы к верхнему регистру
// const upperCaseCars = cars.map(car => {
//     return car.toUpperCase(cars)
// })
// console.log(upperCaseCars)
// //Фильтрация элементов массива
// const pow2Fib = fib.map(num => num ** 2)
// const filteredNumbers = pow2Fib.filter(num => num >20)
// console.log(filteredNumbers)
//
// // Фильтр и выбор элемента
// const people = [
//     {name: 'Vadim' , budget: 4200},
//     {name: 'Victoria' , budget: 3500},
//     {name: 'Olga' , budget: 1700},
// ]
// const allBudget = people
//     .filter(person => person.budget > 2000)
//     .reduce((acc, person) => {
//         acc += person.budget
//     return acc
// }, 0)
// console.log(allBudget)
//
// //Метод For Each
// const myArray = [1, 2, 3]
// console.log(myArray) // [1, 2, 3]
//
// myArray.forEach(el => console.log(el * 2))
//
// console.log(myArray)
//
// //Метод map
// const myArray = [1, 2, 3]
// console.log(myArray) // [1, 2, 3]
// const newArray = myArray.map( el => el * 3)
//
// console.log(myArray) // [1, 2, 3]
// console.log(newArray) // [3, 6, 9]
//
// //Деструктуризация массивов
// const fruits = ['apple', 'banana']
// const [fruitOne, fruitTwo] = fruits
//
// console.log(fruitOne)
// console.log(fruitTwo)

// Цикл for для массивов
// const myArray = ['first','second','third']
//
// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i])
// }
// Метод перебора  forEach
const myArray = ['first','second','third']
myArray.forEach((element, index) => {
    console.log(element, index)
})




