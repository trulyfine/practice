function Car(name) {
    this.name = name;
}
Car.prototype.drive = function() {
    console.log(this.name + ' dididi');
}

// 创建一个空对象
let obj = {};
// 原型绑定
obj.__proto__ = Car.prototype;
// 绑定this
Car.call(obj, '大众');
// 返回该对象
let car1 = obj;
console.log(car1 instanceof Car);
car1.drive();