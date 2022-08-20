//Практика со строками и функциями
const name = 'Vadim';
const age = 25;

function getAge () {
    return age
}
//const output = 'Привет меня зовут'+ name +' и мой возраст' + age + 'лет'
const output =`Привет меня зовут ${name} и мой возраст ${getAge()}`
console.log(output)

//Конкатенация строк
const value = 'Hello,' + ' ' + 'World'
console.log(value)

//Шаблонные строки
const hello = 'HELLO'
const world = 'WORLD'
const greeting = `${hello} ${world}`
console.log(greeting)

//Цикл for of для строки
const  myString ='HEY'
for (const  letter of myString) {
    console.log(letter)
}