const target = new Date('2015-01-01');
const handler = {
    get(target, key) {
        if(key === 'getDate') {
            // bind方法返回一个新函数（原函数的拷贝） 拥有指定的this和参数
            return target.getDate.bind(target);
        }
        return Reflect.get(target, key);
    }
}
let proxy = new Proxy(target, handler);
console.log(proxy.getDate());