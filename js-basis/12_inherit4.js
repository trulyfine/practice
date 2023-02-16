/**
 * 4.寄生组合方法实现继承
 */
function Animal(name) {
    this.name = name;
    this.colors = ['red', 'blue'];
}
Animal.prototype.eat = function() {
    console.log('eat.........');
}
function Dog(name) {
    Animal.call(this, name);
}
/**
 * 这个方法和Object.create()方法只传第一个参数时实现效果一样
 * @param {*} obj 
 * @returns 
 */
function objCreate(obj) {
    function F(){};
    F.prototype = obj;
    return new F();
}
Dog.prototype = objCreate(Animal.prototype); //在这里少调用了一次父类的构造方法
console.log("🚀 ~ file: 12_inherit4.js:25 ~ Dog.prototype", Dog.prototype.constructor); 
let d1 = new Dog('jimmy');
console.log("🚀 ~ file: 12_inherit4.js:26 ~ d1", d1 instanceof Dog);
console.log("🚀 ~ file: 12_inherit4.js:26 ~ d1", d1 instanceof Animal);
d1.eat()

