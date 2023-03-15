// 监听1个属性
console.log('------------监听1个属性-------------');
let person = {};
let pname = 'zs';
Object.defineProperty(person, 'name', {
    get() {
        console.log('访问person.name');
        return pname;
    },
    set(val) {
        console.log('修改person.name');
        pname = val
    }
})
let name = person.name;
person.name = 'lisi';
// console.log("🚀 ~ file: 11_proxyDefineProperty.js:15 ~ person", person.name);  

console.log('------------监听多个属性-------------');
// 监听多个属性
let dog = {
    name: 'jimmy',
    color: 'yellow'
}
function myDefineProperty(obj, key, val) {
    Object.defineProperty(obj, key, {
        get() {
            console.log(`正在读取${key}`);
            return val;
        },
        set(newVal) {
            console.log(`正在修改${key}`);
            val = newVal;
        }
    })
}
Object.keys(dog).forEach(key => {
    myDefineProperty(dog, key, dog[key]);
})
let dname = dog.name;
console.log("🚀 ~ file: 11_proxyDefineProperty.js:40 ~ dname", dname);
dog.name = 'jack';
console.log("🚀 ~ file: 11_proxyDefineProperty.js:42 ~ dog.name", dog.name);

console.log('----------------深度监听一个对象-----------------');
// 深度监听一个对象（只需要加上递归）
// 中转站
let mytest = 1;
function deepDefineProperty(obj, name, val) {
    Object.defineProperty(obj, name, {
        get() {
            console.log(`访问${val}`);
            // console.log('访问'+ val);
            return val;
        },
        set(newVal) {
            console.log(`修改${val}为${newVal}`);
            val = newVal;
        }
    })
}
function deepDefine(obj) {
    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'object' && key !== null) {
            deepDefine(obj[key])
        }
        deepDefineProperty(obj, key, obj[key])
    })
}
let test = {
    name: 'test1',
    content: {
        date: '2023/3/3',
        time: '16:02'
    }
}
deepDefine(test);
console.log("🚀 ~ file: 11_proxyDefineProperty.js:76 ~ test.content.name:", test.content.date);

console.log('------------监听数组---------');
// 监听数组
/**
 * push unshift新增元素set监听不到 因为会新增索引，需要手动初始化，新增加的元素才能被监听到
 * pop shift删除元素或直接访问数字下标set可以被监听到 删除会更新索引
 */
let arr = [1, 2, 3];
let myobj = {
    arr
};
deepDefine(myobj);
// console.log("🚀 ~ file: 11_proxyDefineProperty.js:92 ~ set ~ arr:", myobj.arr);
// myobj.arr = [1, 2, 3, 4]; //set可以监听到
// console.log("🚀 ~ file: 11_proxyDefineProperty.js:92 ~ set ~ arr:", myobj.arr);
myobj.arr.push(4); // set无法监听到
// myobj.arr[0] = 5; // set可以监听到
// myobj.arr.shift(); // set可以监听到
// let popValue = myobj.arr.pop();
// console.log("🚀 ~ file: 11_proxyDefineProperty.js:99 ~ popValue:", popValue);

console.log('------------proxy---------');
// 解决需要遍历属性进行监听的问题 一次监听所有属性
/**
 * 深度属性的get会触发，set不能触发
 */
let person2 = {
    name: 'zs',
    school: {
        posoition: 'hz',
    }
}
let handler = {
    get(obj, key) {
        console.log(`触发get ${key}`);
        return obj[key];
    },
    set(obj, key, val) {
        console.log(`触发set ${key}`);
        obj[key] = val;
    }
}
let pproxy = new Proxy(person2, handler);
let ppname = pproxy.name;
pproxy.name = 'lisi';
console.log("🚀 ~ file: 11_proxyDefineProperty.js:107 ~ person2:", person2);
// pproxy.school = {}; // 触发set
pproxy.school.posoition = 'cd'; //深度对象的get可以监听 set不可以




