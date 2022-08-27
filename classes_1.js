//Наследование классов
// class Animal {
//     constructor(name) {
//         this.speed = 0;
//         this.name = name;
//     }
//     run(speed) {
//         this.speed = speed;
//         console.log(`${this.name} бежит со скоростью ${this.speed}.`);
//     }
//     stop() {
//         this.speed = 0;
//         console.log(`${this.name} стоит.`);
//     }
// }
//
// // Наследуем от Animal указывая "extends Animal"
// class Rabbit extends Animal {
//     hide() {
//         console.log(`${this.name} прячется!`);
//     }
// }
//
// let rabbit = new Rabbit("Белый кролик");
//
// rabbit.run(5); // Белый кролик бежит со скоростью 5.
// rabbit.hide(); // Белый кролик прячется!
//
// //===============================
// class Animal {
//
//     constructor(name) {
//         this.speed = 0;
//         this.name = name;
//     }
//
//     run(speed) {
//         this.speed = speed;
//         console.log(`${this.name} бежит со скоростью ${this.speed}.`);
//     }
//
//     stop() {
//         this.speed = 0;
//         console.log(`${this.name} стоит.`);
//     }
//
// }
//
// class Rabbit extends Animal {
//     hide() {
//         console.log(`${this.name} прячется!`);
//     }
//
//     stop() {
//         super.stop(); // вызываем родительский метод stop
//         this.hide(); // и затем hide
//     }
// }
//
// let rabbit = new Rabbit("Белый кролик");
//
// rabbit.run(5); // Белый кролик бежит со скоростью 5.
// rabbit.stop(); // Белый кролик стоит. Белый кролик прячется!

//========================================
class Rabbit {}
let rabbit = new Rabbit();

// это объект класса Rabbit?
console.log( rabbit instanceof Rabbit ); // true
