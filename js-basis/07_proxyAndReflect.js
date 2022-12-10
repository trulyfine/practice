let parent = {
    name: 'parent',
    get value() {
        return this.name;
    }
}
let proxy = new Proxy(parent, {
    get: function(tgt, key, receiver) {
        // return tgt[key]; // parent
        return Reflect.get(tgt,key,receiver); //child
    }
})
let child = {
    name: 'child'
}
Object.setPrototypeOf(child, proxy);
console.log(child.value);