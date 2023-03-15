let person = {
    name: 'zs'
}
// 会栈溢出 因为return person.name时候会触发get,导致循环访问

/* Object.defineProperty(person, 'name', {
    get() {
        return person.name
    }
})
person.name; */
let handler = {
    get(obj, key) {
        console.log('正在访问get');
        // 不会栈溢出因为触发的是代理对象的get 而返回的是原对象的obj[key]
        return obj[key];
    },
    set(obj, key, val) {
        obj[key] = val;
    }
}
let proxyObj = new Proxy(person, handler);
proxyObj.name;

