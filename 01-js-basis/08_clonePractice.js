let person = {
    name: 'zs',
    age: undefined,
    eat() {
        console.log('eat eat ....');
    },
    job: {
        name: 'hs'
    }
}
let classRoom = [
    {
        name: 'class1',
        number: 1
    },
    2,
    3
]
function deepClone(o) {
    function isObj(o) {
        return typeof o === 'object' && o !== null;
    }
    if(!isObj(o)) {
        throw Error('不是对象');
    }
    let result = Array.isArray(o) ? [...o] : {...o};
    Reflect.ownKeys(result).forEach(key => {
        result[key] = isObj(result[key]) ? deepClone(result[key]) : result[key];
    })
    return result;
}
let p1 = deepClone(person);
p1.job.name = 'wy';
p1.eat = function() {
    console.log('hhhh');
}
console.log("🚀 ~ file: 08_clonePractice.js ~ line 33 ~ p1", p1);
console.log("🚀 ~ file: 08_clonePractice.js ~ line 33 ~ person", person);
let c1 = deepClone(classRoom);
c1[0].name = 'class2';
console.log("🚀 ~ file: 08_clonePractice.js ~ line 36 ~ c1", c1);
console.log("🚀 ~ file: 08_clonePractice.js ~ line 36 ~ class", classRoom);
p1.eat();
person.eat();