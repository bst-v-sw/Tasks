//Практика со строками и функциями
const name = 'Vadim';
const age = 25;

function getAge () {
    return age
}
//const output = 'Привет меня зовут'+ name +' и мой возраст' + age + 'лет'
const output =`Привет меня зовут ${name} и мой возраст ${getAge()}`
console.log(output)
