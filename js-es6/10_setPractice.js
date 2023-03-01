let arr1 = [1, 2, 1, 3, 4, 5];
let arr2 = [4, 5, 6, 7];
// 数组去重
let arr3 = Array.from(new Set(arr1));
console.log("🚀 ~ file: 10_setPractice.js:5 ~ arr3", arr3);
// 并集
let arr4 = Array.from(new Set([...arr1, ...arr2]));
console.log("🚀 ~ file: 10_setPractice.js:8 ~ arr4", arr4);
