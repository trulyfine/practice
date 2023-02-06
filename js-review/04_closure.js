// 闭包有四种表现形式
/**
 * 1.返回一个函数
 */
let a = 1;
function A() {
    let a = 2;
    return function() {
        console.log("🚀 ~ file: 04_closure.js:8 ~ A ~ a", a);
    }
}
A()();
/**
 * 2.作为函数参数传递
 * 无论通过何种方法把内部函数传递到他所在的函数作用域之外 都会形成闭包
 */
let b = 1;
function B() {
    let b = 2;
    function insideB() {
        console.log("🚀 ~ file: 04_closure.js:20 ~ B ~ b", b);
    }
    outsideB(insideB);
}
function outsideB(fn) {
    fn();
}
B();
/**
 * 回调函数
 * 只要使用了回调函数 就是在使用闭包（点击时间，定时器等）
 */
setTimeout(function() {
    console.log("🚀 ~ file: 04_closure.js:34 ~ setTimeout ~ setTimeout");
},0);
/**
 * 立即执行函数
 */
(function C() {
    console.log("🚀 ~ file: 04_closure.js:40 ~ C ~ C");
})();