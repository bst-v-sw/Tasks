// //Объекты
// //Получение свойств объекта
// const myCity = {
//     city: 'New York',
//     popular: true ,
//     country : 'USA'
// }
//
// console.log(myCity.city) // 'New York'
// console.log(myCity.popular)// 'true'
//
// // Изменение (добавление) свойств объекта
// const myCity = {
//     city: 'New York',
// }
// myCity.popular = true
// console.log(myCity)
// myCity.country = 'USA'
// console.log(myCity)
//
// // Вложенные свойства объектов
// const myCity = {
//     city: 'New York',
//     info: {
//         isPopular : true,
//         country : 'USA'
//     }
// }
// console.log(myCity.info.isPopular)
// //Удаление свойства
// delete myCity.info['isPopular']
// console.log(myCity)

//Деструктуризация объектов
const userProfile = {
    name: 'VADIM' ,
    commentsQty: 25 ,
    hasSignedAgreement: false ,
}
const { name, commentsQty } = userProfile
const { hasSignedAgreement } = userProfile

console.log(name)
console.log(commentsQty)
console.log(hasSignedAgreement)
