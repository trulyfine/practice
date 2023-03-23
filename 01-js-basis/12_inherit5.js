/**
 * 使用class完成继承,只是语法糖，实际还是函数
 */
class Animal {
    constructor(name) {
        this.name = name;
        this.colors = ['red', 'blue'];
    }
    eat() {
        console.log(this.name + ' is eating');
    }
}
class Dog extends Animal {
    constructor(name,host) {
        super(name);
        this.host = host;
    }
}
let d1 = new Dog('旺财', '张三');
let d2 = new Dog('修狗', '李四');
d1.colors.push('green');
console.log("🚀 ~ file: 12_inherit5.js:22 ~ d1.colors", d1.colors);
console.log("🚀 ~ file: 12_inherit5.js:22 ~ d2.colors", d2.colors);
d1.eat();
d2.eat();
