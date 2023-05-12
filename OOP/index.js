
// ! Object

/*
let araba = {
    renk: "siyah",
    model: "sedan",
    marka: "passat"
}
console.log(araba.model);
*/


// ! Function

/*
let passat = {
    color: "beyaz",
    brand: "volkswagen",
    speed: 0,
    speedRun: function (value) {
        this.speed += value
    }
}

passat.speedRun(30);
console.log(passat);
*/


// ! Constructer ES6
/*
class Kamyon {
    constructor(color, brand, price) {
        this.color = color;
        this.brand = brand;
        this.price = price;
    }
}

let kamyon = new Kamyon("black", "Mercedes", "2m");
console.log(kamyon);
*/


// ! Class
/*
class Car {
    constructor(color) {
        this.color = color;
        this.speed = 0;
    }

    speedRun(value) {
        this.speed += value;
    }
}

let car = new Car("gray");
car.speedRun(350);
console.log(car);
*/


// ! Inheritance
/*
class User {
    constructor(userName, password) {
        this.userName = userName;
        this.password = password;
    }
}

class Application extends User {
    constructor(userName, password, g_mail) {
        super(userName, password)
        this.g_mail = g_mail;
    }
}

let applicationProperties = new Application("keremkenan", "1234", "mai@gmail.com");
console.log(applicationProperties);
*/

// ! Encapsulation
/*
class User {
    #password; // private
    constructor(userName, password) {
        this.#password = password;
        this.userName = userName;
    }

    getPasword() {
        return this.#password;
    }
    setPassword(password) {
        this.#password = password;
    }
}

let user = new User("kerem", "1234");
console.log(user.getPasword());
user.setPassword("8080");
console.log(user.getPasword());
*/


// ! Polymorphisim
/*
class Shape {
    draw() {
        console.log("shape");
    }
}

class Circle extends Shape {
    draw() {
        console.log("perfect mega circle");
    }
}

let shape = new Shape();
let circle = new Circle();
console.log(shape.draw());
console.log(circle.draw());
*/


// ! Abstraction
// TypeScript konusudr.



