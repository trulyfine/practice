// 深拷贝的3种方式
/**
 * 使用JSON.stringify和JSON.parse方法
 */
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
// console.log("🚀 ~ file: 09_deepCopy.js:16 ~ person", person);
let res = JSON.stringify(person);
// console.log("🚀 ~ file: 09_deepCopy.js:17 ~ res", res);
let copy = JSON.parse(JSON.stringify(person));
console.log("🚀 ~ file: 09_deepCopy.js:21 ~ copy", copy);
/**
 * 手写函数自己实现
 */
console.log('-------------------------------------');
function myClone(obj) {
    let copy = {};
    function isObj(o) {
        return typeof o === 'object' && o !== null;
    }
    copy = Array.isArray(obj) ? [...obj] : {...obj};
    Reflect.ownKeys(obj).forEach(key => {
        copy[key] = isObj(obj[key]) ? myClone(obj[key]) : obj[key];
    })
    return copy;
}
let myCopy = myClone(person);
myCopy.name = 'lisi';
console.log("🚀 ~ file: 09_deepCopy.js:38 ~ myCopy", myCopy);
console.log("🚀 ~ file: 09_deepCopy.js:17 ~ person", person);


