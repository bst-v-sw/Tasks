// //Методы - свойства объекта, значения которого функция
// const myCity = {
//     city: 'New York',
//     cityGreeting: function () {         // Это метод
//         console.log('Greetings!!')
//     }
// }
// myCity.cityGreeting()// 'Greetings!!'
//
// //Значения ссылочного типа
// const person = {
//     name: 'Bob',
//     age : 21
// }
// //Мутация объекта
// person.age = 22
// person.isAdult = true
//
// console.log(person.age)
// console.log(person.isAdult)
//
// //Мутация копий объекта
// const person = {
//     name: 'Bob',
//     age : 25
// }
// const person2 = person
// person2.isAdult = true
// person2.age = 26
// console.log(person.age)
// console.log(person.isAdult)

//Разделить слова в предложении запятыми
const rw = (data) => {
    return data
        .split(".")
        .map(v => v.trim().split(" ")[0])
        .join(", ");
}
console.log(rw('yfsbl lsndv skdcnk skdvbkj skvbk skdvb wkvvnwlvm')

