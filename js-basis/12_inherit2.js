// 借用构造函数实现继承
function Animal(name) {
    this.name = name;
    this.colors = ['red', 'blue'];
}
function Dog(name) {
    Animal.call(this, name);
}
