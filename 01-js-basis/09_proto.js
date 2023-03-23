// https://juejin.cn/post/6934498361475072014#heading-8
// 手写instanceof
function Person(name) {
    this.name = name;
}
let p1 = new Person('zs');
// console.log(p instanceof Person);
function instanceOf (p, obj) {
    let baseType = ['number', 'string', 'boolean', 'symbol', 'undefined'];
    if(baseType.includes(typeof obj)) return false;
    while(true) {
        if(obj === null) {
            return false;
        }
        if(obj.__proto__ === p.prototype) {
            return true;
        }else {
            obj = obj.__proto__;
        }

    }

}
console.log(instanceOf(Array, 'p1'));