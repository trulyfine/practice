function Animal() {
    this.colors = ['red', 'blue'];
}
function Dog(name) {
    this.name = name;
}
Dog.prototype = new Animal();
let d1 = new Dog('d1');
let d2 = new Dog('d2');
console.log(d1 instanceof Animal);
console.log(d1.colors);