function Animal(name, leg, speed) {
    this.name = name;
    this.leg = leg;
    this.speed = speed;
}

var parrot = new Animal("parrot 1", 2, 100);

console.log(parrot);