// ...的扩展
function f(x, y, z) {
    console.log(x, y, z);
}
let arr1 = [1, 2, 3]
// f(1, 2, 3);
// f(arr1)
f(...arr1);

// ...的收缩：收集参数
/* function fn(...arg){
    console.log(arg);
} */
function fn(){
    console.dir(arguments);
    /* let arr = Array.prototype.slice.call(arguments);
    console.log(arr); */
}
console.log('----------------');
fn(1, 2, 'li', 4)