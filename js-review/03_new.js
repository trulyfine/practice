function Person(name) {
    this.name = name;
}
Person.prototype.eat = function() {
    console.log(`${this.name} is eating.........`);
}
let zs = new Person('zs');
zs.eat();
let obj = {};
obj.__proto__ = Person.prototype;
Person.call(obj,'lisi');
let lisi = obj;
lisi.eat();