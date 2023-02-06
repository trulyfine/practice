/* for(var a = 1; a < 5; a++) {
    setTimeout(function(a) {
        console.log(a);
    }, a * 1000, a)
} */
for(let a = 1; a < 5; a++) {
    (function(b) {
        setTimeout(function() {
            console.log(b);
        }, b*1000)
    })(a)
}