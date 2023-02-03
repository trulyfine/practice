// 手写instanceof
function instanceOf (f, obj) {
    let baseType = ['string', 'number', 'boolean', 'undefined', 'symbol'];
    if (baseType.includes(typeof obj)) {
        return false;
    }
    let fp = f.prototype;
    let op = obj.__proto__;
    while(true) {
        if(op === null) {
            return false;
        }
        if(op === fp) {
            return true;
        }
        op = op.__proto__;
    }
}
// console.log(null.__proto__);
console.log(instanceOf(Array, [1]));
console.log([1] instanceof Array);