// 返回一个函数，会形成闭包
/* let x = 10;
function f() {
    let x = 20;
    function g() {
        console.log(x);
        return x;
    }
    return g;
}
let result = f();
let r = result();
console.log("🚀 ~ file: 10_scope.js ~ line 12 ~ r", r); */
// -------------------------------------

// 作用域问题 调用函数时，若函数里的变量没在函数中定义，就去定义该函数的地方查找
/* let x = 10;
function f() {
    console.log(x);
}
function g() {
    let x = 20;
    return f;
}
let result = g();
let r = result();
console.log("🚀 ~ file: 10_scope.js ~ line 27 ~ r", r); */
// ----------------------------------------

// var声明的变量是函数作用域，变量申明被提升到函数最顶部
// 函数声明也会被提升，并且先于var的变量提升
/* var x = 10
function f() {
    // undefined
    console.log(x);
    var x = 20;
}
f(); */
// ------------------------------------------

// let块级作用域{}不存在变量提升吗?如果是这样，应该能访问到var x，但实际报错，因为执行器知道下面有一个let x，这是暂时性死区
// 暂时性死区：在块级顶部到变量声明的这块区域去访问变量直接报错，由es6规范规定
/* var x = 10;
function f() {
    console.log(x);
    let x = 20;
}
f(); */
// ------------------------------------

// try catch临时增加变量对象
/* let x = 1;
try {
    x = x + y;
}catch(e) {
console.log("🚀 ~ file: 10_scope.js ~ line 56 ~ e", e);
} */
// ------------------------------------

// with手动将某个对象添加到作用域链最前端,严格模式下禁止使用with
function f(obj, x) {
    with(obj) {
        console.log(x);
    }
    console.log(x);
}
f({x: 1}, 2);
 