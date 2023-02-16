/**
 * 继承的3种实现方式
 * 2.借用构造函数实现继承
 */
 function Animal(name) {
    this.name = name;
    this.colors = ['red']
}
Animal.prototype.eat = function() {
    console.log('wangwnagwang');
}
function Dog(name) {
    Animal.call(this, name);
}
let d1 = new Dog('jimmy');
console.log("🚀 ~ file: 14_inherit3.js:16 ~ d1", d1.colors);
d1.eat();
/**
 * 缺点：
 * 无法继承父类原型上的属性和方法
 */


