// Массивы
// Практика с даннами массивов
const cars = ['Мазда','Форд','Мерседес','БМВ']
const fib = [1, 1, 2, 3, 5, 8, 13]
//
//console.log(cars.length)
//console.log(cars)
//console.log(cars[1])// вывод первого элемента массива
//
// Метод
// Добавить элемент в конец массива
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
// Метод переворота строки
// console.log(cars.reverse())
// console.log(cars)

//Задача 1
//Разделить строку по буквам через split, выполнить реверс строки и превратить в новую строку путем соединения элементов
const text ='Привет, мы изучаем JavaScript'
const reverseText = text.split('').reverse().join(' ')
console.log(reverseText)


