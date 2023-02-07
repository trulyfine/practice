// 浅拷贝的两种方式
/**
 * Object.assign()
 */
let o1 = {
    a: 111,
    b: 2
}
let o2 = {
    b: 3,
    c: 4
}
let o3 = Object.assign(o1, o2);
console.log("🚀 ~ file: 08_shallowCopy.js:14 ~ o1", o1);
console.log("🚀 ~ file: 08_shallowCopy.js:14 ~ o2", o2);
console.log("🚀 ~ file: 08_shallowCopy.js:14 ~ o3", o3);

/**
 * ...扩展符号
 */
let o4 = {...o1, ...o2};
console.log('--------------------------------------');
console.log("🚀 ~ file: 08_shallowCopy.js:14 ~ o1", o1);
console.log("🚀 ~ file: 08_shallowCopy.js:14 ~ o2", o2);
console.log("🚀 ~ file: 08_shallowCopy.js:22 ~ o4", o4);

