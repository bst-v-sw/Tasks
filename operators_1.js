// Работа с операторами
console.log(typeof 10)
console.log(typeof 10 === 'number')
console.log('number' === 'number')
console.log(typeof 'Vadim')

console.log((typeof 'Vadim') === 10)

let isUndefined
console.log(typeof isUndefined === 'undefined')

//Оператор НЕ
console.log(!10)
console.log(!323)
console.log(!'abc')
//Двойное отрицание ложных значений всегда false
console.log(!!0)
console.log(!!'')
console.log(!!undefined)

//Операторы короткого замыкания
const value = 'Vadim' || 'Yulia' // 1 выр истинно - то 2 выр игнорируется
console.log(value)
const value2 = '' || 'Yulia'
console.log(value2)

//Префиксный оператор разделения на свойства (...)
const button = {
    width: 200,
    text: 'Buy'
}
const redButton ={
    ...button,
    color: 'red'
}
console.table(redButton)

//Объединение объектов с помощью оператора(...)
const buttonInfo = {
    text: 'Buy'
}
const buttonStyle = {
    width: 200,
    height: 300,
    color: 'yellow'
}
const button1 = {
    ...buttonInfo,
    ...buttonStyle
}
console.table(button1)
