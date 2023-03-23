let old = {
    name: 'zs',
    age: 22,
    job: {
        name: 'hundsun',
        money: 15
    }
}
// 浅拷贝
let new1 = Object.assign({}, old);
new1.job.money = 16;
console.log("🚀 ~ file: 02_clone.js ~ line 11 ~ money", old.job.money);
// 浅拷贝
let new2 = {...old};
new2.job.money = 23;
console.log("🚀 ~ file: 02_clone.js ~ line 16 ~ money", old.job.money);