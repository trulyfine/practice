/**
 * 继承的3种方式
 * 1.原型链实现继承
 */
function Animal(name) {
    this.name = name;
    this.colors = ['red']
}
function Dog(name) {
    this.name = name;
}
Dog.prototype = new Animal();
let dog1 = new Dog('tom');
let dog2 = new Dog('jemmy');
console.log(dog1 instanceof Animal);
console.log(dog1 instanceof Dog);
/* dog1.colors = ['green'];
console.log(dog2.colors); */
console.log('------------------------');
console.log(dog1.colors === dog2.colors);
dog1.colors.push('green');
console.log(dog2.colors);
/**
 * 缺点
 * 1.无法向父类传递参数
 * 2.父类的引用类型属性会被实例共享（理想状态只共享方法）
 */
