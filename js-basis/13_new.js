// new操作符做了什么事情
function Car(name) {
    this.name = name;
}
Car.prototype = {
    didi: function() {
        console.log('dididi');
    }
}
/* let car = new Car('lala');
console.log(car. name);
car.didi();
console.log(car.__proto__); */
let obj = {}; // 创建一个新对象
obj.__proto__ = Car.prototype; // 原型绑定
Car.call(obj,"lala"); // 绑定this到这个新对象上
let car = obj; // 返回新对象
console.log(car.name);
car.didi();
console.log(car.__proto__);
