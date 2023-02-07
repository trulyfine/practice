// 手写instanceof
const primitives = ['number', 'string', 'boolean', 'symbol', 'null', 'undefined'];
function isInstance(F, obj) {
    if (primitives.includes(typeof obj)) {
        return false;
    }
    while(true) {
        if (obj === null) {
            return false;
        }
        if(obj.__proto__ === F.prototype) {
            return true;
        } else {
            obj = obj.__proto__;
        }
    }
}
function Car(name) {
    this.name = name;
}
function Mycar(name) {
    this.name = name;
}
Mycar.prototype = new Car();
let car1 = new Car('大众');
let car2 = new Mycar('mycar');
console.log(isInstance(Car, car1));
console.log(isInstance(Mycar, car2));
console.log(isInstance(Car, car2));