// Proxy 相当于去修改设置对象的属性行为，而Reflect则是获取对象的这些行为(的原始版本)。两者经常搭配使用
// 代理相当于是源对象的一层拦截器，通过代理对象对源对象进行基本操作（比对读写对象属性）会先通过代理对象进行一次处理，代理对象和源对象相互影响
let obj = {
    a: 1
}
let nextObj = {
    b: 2
}
let proxy = new Proxy(obj,{
    get: function(tgt, key, receiver) {
        console.log('!!!!!!!!!',receiver === nextObj);
        return tgt[key] + 100
    },
    set: function(tgt, key, val) {
        return tgt[key] = 'VAL' + val
    }
})
Object.setPrototypeOf(nextObj, proxy);
// console.log("🚀 ~ file: 04_proxyReflect.js ~ line 14 ~ next-------", nextObj.a);
nextObj.a = 2;
console.log("🚀 ~ file: 04_proxyReflect.js ~ line 14 ~ next-------", nextObj.a);
console.log("🚀 ~ file: 04_proxyReflect.js ~ line 14 ~ obj-------", obj.a);
/* proxy.a = 2
console.log(obj.a); */
/* proxy.a = 1;
console.log("🚀 ~ file: 04_proxyReflect.js ~ line 14 ~ proxy", proxy.a);
console.log("🚀 ~ file: 04_proxyReflect.js ~ line 14 ~ obj", obj.a);
obj.a = 2;
console.log("🚀 ~ file: 04_proxyReflect.js ~ line 17 ~ obj", obj.a)
console.log("🚀 ~ file: 04_proxyReflect.js ~ line 17 ~ obj", proxy.a) */

// -----------------------------------
