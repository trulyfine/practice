// 递归函数是否需要返回值
let person = {
    name: 'zs',
    age: 18,
    lover: undefined,
    school: {
        name: 'CDUT',
        city: 'chengdu'
    },
    eat: function() {
        console.log('eat.........');
    }
}
function myClone(source, target) {
    /* function isObj(source) {
        return typeof source === 'object' && source !== null;
    } */
    source.name = 'lisi';
    target = Array.isArray(source) ? [...source] : {...source};
    /* console.log("🚀 ~ file: 10_recursion.js:19 ~ myClone ~ target", target);
    Reflect.ownKeys(source).forEach(key => {
        target[key] = isObj(source[key]) ? myClone(source[key], target[key]) : source[key]
    }) */
}
let copy = {};
myClone(person, copy);
console.log("🚀 ~ file: 10_recursion.js:14 ~ person", person);
console.log("🚀 ~ file: 10_recursion.js:25 ~ copy", copy);
