// 组合继承
function Animal(name) {
    this.name = name;
    this.colors = ['red', 'blue'];
}
function Dog(name) {
    Animal.call(this, name);
}
Dog.prototype = new Animal();
let d1 = new Dog('d1');
let d2 = new Dog('d2');
