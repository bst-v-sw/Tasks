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
    },
    info() {
         console.info('Информация о человеке по имени:', this.name)
     }
}
const ageKey = 'age'
console.log(person.name)
console.log(person['age'])
console.log(person['complex key'])
console.log(person[ageKey])
person.greet()

person.age++
person.languages.push('by')
//person['key_4'] = undefined
delete person['key_4']
console.log(person)
console.log(person['key_4'])

//Деструктуризация
const name = person.name
const age = person.age
const languages = person.languages
//Можно записать в строку , деструктуризировать
const {name, age, languages} = person
console.log(name, age, languages)

//Получить ключи объекта
for (let key in person) {
    if (person.hasOwnProperty(key)) {
    console.log('key: ',key)
    console.log('value: ', person[key])
}}
// Массив из ключей объекта
const keys = Object.keys(person)
console.log(keys)
//
const keys = Object.keys(person)
keys.forEach((key) => {
    console.log('key: ',key)
    console.log('value: ', person[key])
})

// Контекст( CONTEXT)
// person.info()
const logger = {
    // keys() {
    //     console.log('Object Keys: ', Object.keys(this))
    // }
    // Вывод ключей через делиметры ------
    withParams (top = false, between = false, bottom = false) {
        if (top) {
            console.log('------start-------')
        }
        Object.keys(this).forEach((key, index, array) => {
            console.log(`"${key}": ${this[key]}`)
            if (between && index !== array.length-1) {     // Убрать последний делиметр
                console.log('-----------------')
            }
        })
        if (bottom) {
            console.log('--------End----------')
        }
    }
}
// const bound = logger.keys.bind(logger)
// bound()
// logger.keys.call(person)
//logger.withParams.call(person, true, true, true)// неограниченное число параметров
logger.withParams.apply(person, [true, true, true])// только 2 параметра, один всегда массив