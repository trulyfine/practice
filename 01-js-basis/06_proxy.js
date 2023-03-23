const parent = {
    get value() {
      return '19Qingfeng';
    },
  };
  
  const proxy = new Proxy(parent, {
    // get陷阱中target表示原对象 key表示访问的属性名
    get(target, key, receiver) {
      console.log(receiver === proxy);
      return target[key];
    },
  });
  
  const obj = {
    name: 'wang.haoyu',
  };
  
  // 设置obj继承与parent的代理对象proxy
  Object.setPrototypeOf(obj, proxy);
  
  // log: false
console.log(obj.value);