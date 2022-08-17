//Objects
//Работа с полями объектов
const person = {
    name: 'Vadim',
    age: 25,
    isProgrammer: true,
    languages: ['ru', 'de', 'eng'],
    'complex key':'Complex Value',
    ['key' + (1 + 3)] : 'Computed Key',
    greet() {
        console.log('greet from person')
    }
}
//const ageKey = 'age'
// console.log(person.name)
// console.log(person['age'])
// console.log(person['complex key'])
// console.log(person[ageKey])
// person.greet()

// person.age++
// person.languages.push('by')
// //person['key_4'] = undefined
// delete person['key_4']
// console.log(person)
// console.log(person['key_4'])

//Деструктуризация
const name = person.name
const age = person.age
const languages = person.languages
//Можно записать в строку , деструктуризировать
const {name, age, languages} = person
console.log(name, age, languages)