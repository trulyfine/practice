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
console.log("🚀 ~ file: 06_map.js:13 ~ myMap.keys()", myMap.entries()); //都是iterator对象
console.log("🚀 ~ file: 06_map.js:13 ~ myMap.keys()", myMap.keys());
console.log("🚀 ~ file: 06_map.js:13 ~ myMap.keys()", myMap.values());
for(let key in myMap.keys()) {
    console.log('-----------------');
    console.log(key);
}
myMap.clear();
console.log("🚀 ~ file: 06_map.js:21 ~ myMap", myMap);


