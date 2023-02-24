let test = {'0': 1, '1': 2, length: 2};
let result = Array.prototype.slice.call(test); // [1, 2]
console.log("🚀 ~ file: 03_arrayLike.js:3 ~ result", result);
console.log('------------------------');
let test2 = {0: 1, 1: 2, length: 2};
let result2 = Array.prototype.slice.call(test); // [1, 2]
console.log("🚀 ~ file: 03_arrayLike.js:7 ~ test2", test2);
console.log("🚀 ~ file: 03_arrayLike.js:7 ~ result2", result2);
/**
 * 1.类数组其实是对象
 * 2.属性和数组下标相同
 * 3.具有length属性
 */
console.log('----------------');
function fun() {
    console.log(arguments);
}
fun(1,2);
