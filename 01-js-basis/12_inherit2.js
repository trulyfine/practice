// 2.借用构造函数实现继承
function Animal(name) {
    this.name = name;
    this.colors = ['red', 'blue'];
}
Animal.prototype.eat = function() {
    console.log('eat.........');
}
function Dog(name, sound) {
    Animal.call(this, name);
    this.sound = sound;
}
let d1 = new Dog('jimmy','汪汪汪');
// 无法继承父类原型上的方法
