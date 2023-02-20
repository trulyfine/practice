/* let { f1, f2 } = {f1: 't1', f2:'t2'};
console.log("🚀 ~ file: 04_destruct.js:2 ~ f1", f1);
console.log("🚀 ~ file: 04_destruct.js:3 ~ f2", f2); */
let { f2, f1 } = {f1: 't1', f2:'t2'};
console.log("🚀 ~ file: 04_destruct.js:2 ~ f1", f1);
console.log("🚀 ~ file: 04_destruct.js:3 ~ f2", f2);
console.log('--------------------------');
/**
 * 函数参数解构
 */
function func1({ x, y }) {
    console.log(x + y);
}
func1({a:1, b:2}); // NaN
