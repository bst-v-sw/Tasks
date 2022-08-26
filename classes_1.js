//Наследование классов
сlass Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        console.log(`${this.name} бежит со скоростью ${this.speed}.`);
    }
    stop() {
        this.speed = 0;
        alert(`${this.name} стоит.`);
    }
}

let animal = new Animal("Мой питомец");

class Rabbit {
    constructor(name) {
        this.name = name;
    }
    hide() {
        console.log(`${this.name} прячется!`);
    }
}

let rabbit = new Rabbit("Мой кролик");
