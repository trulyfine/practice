// 3.组合继承
function Animal(name) {
    this.name = name;
    this.colors = ['red', 'blue'];
}
function Dog(name) {
    Animal.call(this, name);
}
Dog.prototype = new Animal(); // 缺点：此处多调用了一次父类构造函数
let d1 = new Dog('d1');
let d2 = new Dog('d2');
