// 继承的实现方式之一：通过原型链实现继承
function Animal() {
    this.colors = ['red', 'blue'];
}
function Dog(name) {
    this.name = name;
}
Dog.prototype = new Animal();
// console.dir(Dog.prototype.constructor);
let d1 = new Dog('111');
let d2 = new Dog('222');
console.log(d1 instanceof Animal);
