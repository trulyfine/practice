// json方法深拷贝 忽略函数和undefined属性以及symbol属性
let person = {
    name: 'zs',
    age: undefined,
    eat: function() {
        console.log('eat eat eat');
    },
    job: {
        name: 'hs',
        money: 15
    }
}

// JSON组合实现深拷贝
/* let p1 = JSON.parse(JSON.stringify(person));
console.log("🚀 ~ file: 03_cloneDeep.js ~ line 16 ~ p1", p1)
person.job.name = 'wy';
console.log("🚀 ~ file: 03_cloneDeep.js ~ line 18 ~ person", person.job.name);
console.log("🚀 ~ file: 03_cloneDeep.js ~ line 18 ~ p1", p1.job.name);
console.log("---------------------------------------------"); */

// 自写方法实现深拷贝
function deepClone(obj) {
    function isObj(o) {
        return (typeof o === 'object') && typeof o !== null;
    }
    if(!isObj(obj)) {
        throw new Error('非对象');
    }
    let isArray = Array.isArray(obj);
    let result = isArray ? [...obj] : {...obj};
    Reflect.ownKeys(result).forEach(key => {
        result[key] = isObj(result[key])  ? deepClone(result[key]) : result[key];
    })
    return result;
}
let p2 = deepClone(person);
p2.job.name = 'wy'
p2.eat = function() {
    console.log('p2p2p2.......');
}
console.log("🚀 ~ file: 03_cloneDeep.js ~ line 39 ~ p2", p2);
console.log("🚀 ~ file: 03_cloneDeep.js ~ line 39 ~ person", person);
p2.eat();
person.eat();

// 使用第三方库lodash
/* var _ = require('./lodash.min');
let p3 = _.cloneDeep(person);
p3.job.name = 'wy'
console.log("🚀 ~ file: 03_cloneDeep.js ~ line 45 ~ p3", p3);
console.log("🚀 ~ file: 03_cloneDeep.js ~ line 45 ~ person", person); */
