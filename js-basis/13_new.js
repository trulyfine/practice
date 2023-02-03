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
let obj = {};
obj.__proto__ = Car.prototype;
Car.call(obj,"lala");
let car = obj;
console.log(car.name);
car.didi();
console.log(car.__proto__);
