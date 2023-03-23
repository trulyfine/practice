/**
 * object.defineProperty对数组进行监听
 */
let color = ['red', 'yellow', 'blue'];
function deepDefineProperty(obj, key, val) {
    Object.defineProperty(obj, key, {
        get() {
            console.log(`访问get`);
            return val;
        },
        set(newVal) {
            console.log(`访问set`);
            val = newVal;
        }
    })
}
function deeepDefine(obj) {
    Object.keys(obj).forEach(key => {
        if(typeof obj[key] === 'object' && obj[key] !== null) {
            deeepDefine(obj[key]);
        }
        deepDefineProperty(obj, key, obj[key]);
    })
}
deeepDefine(color);
// color[0]; // 访问get
// color[0] = '0';  //访问set
// color.push('black'); // get set都不触发
// color.unshift('green');// 访问get访问get访问set访问get访问set访问set
// color.pop(); //访问get
// color.shift() //访问get访问get访问set访问get访问set

/**
 * proxy监听数组
 */
let color2 = ['red', 'yellow', 'blue'];
let cproxy = new Proxy(color2,{
    get(target, key) {
        console.log(`访问get`);
        return Reflect.get(target, key);
    },
    set(target, key, val) {
        console.log(`访问set`);
        target[key] = val;
        return true;
    }
})
// cproxy[0]; //访问get
// cproxy[0] = '0'; //访问set
// cproxy.push('black'); //访问get访问get访问set访问set
// cproxy.unshift('green');
// cproxy.pop();
cproxy.shift();
/**
 * 使用proxy,数组的每一个方法的set和get都能被监听到
 */
