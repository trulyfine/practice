// --------回调函数可以形成闭包-----------
for(var i = 1; i <= 5; i++) {
    setTimeout(function timer(j) {
        console.log(j)
    }, i * 1000, i);
}

// -----------立即执行函数形成闭包----------

/* for(var i = 1; i <= 5; i++) {
    (function fn(j) {
        setTimeout(function timer() {
            console.log(j)
        }, i * 1000);
    })(i)
    
} */