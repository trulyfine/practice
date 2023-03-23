/**
 * 1.let和const由es6引入 var存在作用域提升，let和const不会
 */
console.log(a); // undefined
// console.log(b); // 报错
var a = 1;
let b = 2;
console.log('----------------------');
/**
 * 2.var可以重复声明 let和const不行
 */
var c = 3;
var c;
let d = 4;
// let d; // 报错
console.log("🚀 ~ file: 01_varletconst.js:13 ~ c", c); // 3
console.log('------------------------');
/**
 * 3.var是函数作用域，let const是块级作用域
 */
function F() {
    let flag = 1;
    if(flag) {
        var e = 1;
        let f = 2;
    }
    // console.log("🚀 ~ file: 01_varletconst.js:25 ~ F ~ e", e);
    // console.log("🚀 ~ file: 01_varletconst.js:25 ~ F ~ f", f); //is not defined
}
F();
// console.log("🚀 ~ file: 01_varletconst.js:25 ~ F ~ e", e);
/**
 * 4.全局声明的var变量会挂在window上
 * (在浏览器环境下会挂载到全局对象window上，在node环境下不会挂载到全局对象global上，仍然是函数作用域) 
 *  let和const不会
 */
console.log('-----------------');
var g = 1;
let h = 2;
console.log(global.g);

