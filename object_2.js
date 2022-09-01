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
//
// //Деструктуризация объектов
// const userProfile = {
//     name: 'VADIM' ,
//     commentsQty: 25 ,
//     hasSignedAgreement: false ,
// }
// const { name, commentsQty } = userProfile
// const { hasSignedAgreement } = userProfile
//
// console.log(name)
// console.log(commentsQty)
// console.log(hasSignedAgreement)
//
// // Циклы for in для объектов
// const myObject ={
//     x: 10,
//     y: true,
//     z: 'abc'
// }
// for (const key in myObject) {
//     console.log(key, myObject[key])
// }
// //forEach для объектов
// const myObject ={
//     x: 10,
//     y: true,
//     z: 'abc'
// }
// Object.keys(myObject).forEach(key => {
//     console.log(key, myObject[key])
// })
//
// //Создание классов
// const animal = {
//     name: 'Animal',
//     age : 5,
//     hasTail: true
// }
//
// class Animal {
//     constructor(options) {
//         this.name = options.name
//         this.age = options.age
//         this.hasTail = options.hasTail
//
//     }
// }
//
// const animal = new Animal({
//     name: 'Animal',
//     age : 5,
//     hasTail: true
// })
//
// /
// class Cat extends Animal {
//      static type = 'CAT'
//      constructor(options){
//       super()
//         this.color = options.color
//     }
//
//    get ageInfo() {
//        return this.age * 7
//      }
//     set ageInfo(newAge) {
//         this.age = newAge
//    }
//  }
//
//     const cat = new Cat({
//         name: 'Cat',
//         age : 7,
//         hasTail: true,
//        color: 'black'
//      })
//
//  class Component {
//    constructor(selector) {
//          thsi.$el = document.querySelector(selector)
//      }
//
//      hide(){
//          this.$el.style.display = 'none'
//      }
//
//      show(){
//          this.$el.style.display = 'black'
//      }
//  }
// /// ======================================
//  class Box extends Component {
// constructor(options) {
//         super(options.selector)
//          this.$el.style.width = this.$el.style.height = options.size + 'p'
//         this.$el.style.color = options.color
//      }
//  }
// const box1 = new Box({
//    selector: '#box1',
//    size: 100,
//   color: 'red'
//  })
// /
// //Проверить принадлежность объекта классу
// class Animal {
//     static [Symbol.hasInstance](obj) {
//         if (obj.canEat) return true;
//     }
// }
//
// let obj = { canEat: true };
// console.log(obj instanceof Animal); // true: вызван Animal[Symbol.hasInstance](obj)
//===========================
//Функция, которая создает объект и возвращает его.
function f1(name, object){
    const result = { name ,
        state: 'moderating',
        createdAt: Date.now(),
        ... object}
    return result;
}
console.log(f1())
