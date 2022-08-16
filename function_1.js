// 1.Функции
// Практика с функиями

//function declaration
function greet (name) {
    console.log('Привет - ', name)
}
//function expression
const greet2 = function greet2(name) {
    console.log('Привет 2 - ', name )
}
greet2('Мария')
greet('Мария')
// 2. Анонимные функции
let counter = 0
const interval = setInterval(function (){
    if (counter ===5) {
        clearInterval(interval)
    } else {
        console.log(++counter)
    }
}, 1000)
//3. Стрелочные функции
//3.1
function greet3 (name) {
    console.log('Привет - ', name)
}
    greet3('Vadim')

//3.2
const arrow =(name, age) => {
    arrow('Vadim')
    console.log('Привет - ', name, age)
}
//3.3
const arrow2 = name => console.log('Привет - ', name)
    arrow2('Vadim')
const pow2 = num => num **2
console.log(pow2(5))

// Параметры по умолчанию
const sum =( a, b ) => a + b

console.log(sum(41, 4))
console.log(sum())

function sumAll(...all) {
    let result = 0
    for (let num of all) {
        result += num
    }
    return result
}
const res = sumAll(1, 2, 3, 4, 5)
console.log(res)





