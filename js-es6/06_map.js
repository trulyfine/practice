let myMap = new Map();
let x = {x: 1};
let y = {y: 2};
myMap.set(x, 'foo');
myMap.set(y, 'bar');
console.log(myMap.get(x));
console.log(myMap.get(y));
myMap.delete(x);
console.log(myMap.has(x));
console.log(myMap.has(y));
myMap.set({z:3}, 'my');
console.log(myMap.keys());
for(let key in myMap.keys()) {
    console.log('-----------------');
    console.log(key);
}
let linc = {
    {a: 1},
    b: 1
}
console.log("🚀 ~ file: 06_map.js:18 ~ linc", linc);

