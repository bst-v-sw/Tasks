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
//Цикл while . Извлечь из строки подстроку
const myString = ( text, length ) => {
    let i = 0 ;
    let result = '';
    while ( i <= length - 1) {
        result = `${result}${text[i]}`;
        i= i + 1 ;
    }
    return result
}
console.log(myString('Until lambs become lions' , 14))

//Цикл while с условием в теле цикла
const countChars = ( str, char) => {
    let i = 0 ;
    let count = 0;
    while ( i <= str.length) {
        if ( str[i] === char) {
            count += 1 ;
        };
        i= i + 1 ;
    }
    return count ;
}
console.log(countChars('Until lambs become lions' ,'l'))

