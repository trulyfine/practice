/**
 * 继承的3种实现方式
 * 3.借用构造函数实现组合继承
 */
 function Animal(name) {
    this.name = name;
    this.colors = ['red']
}
function Dog(name) {
    Animal.call(this, name);
}
Dog.prototype = new Animal();
let dog1 = new Dog('tom');
let dog2 = new Dog('jemmy');
console.log(dog1 instanceof Animal);
console.log(dog1 instanceof Dog);
console.log(Dog.prototype.constructor); // 需要指回Dog
Dog.prototype.constructor = Dog;
/**
 * 缺点：
 * 除了在生成子类实例时，还多调用了一次父类构造方法Dog.prototype = new Animal();
 */

