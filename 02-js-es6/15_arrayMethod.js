let initArray = [1, 2, 3];
/**
 * map
 */
let arr2 = initArray.map(item => item * 2);
console.log("🚀 ~ file: 15_arrayMethod.js:3 ~ arr2:", arr2);
console.log("🚀 ~ file: 15_arrayMethod.js:2 ~ initArray:", initArray);
console.log('-----------------');
/**
 * filter
 */
let arr3 = initArray.filter(item => item % 2 !== 0);
console.log("🚀 ~ file: 15_arrayMethod.js:13 ~ arr3:", arr3);
console.log("🚀 ~ file: 15_arrayMethod.js:2 ~ initArray:", initArray);
console.log('--------------------');
/**
 * reduce
 */
let sum = initArray.reduce((previous, current) => {
    return previous + current;
}, 0)
console.log("🚀 ~ file: 15_arrayMethod.js:22 ~ sum ~ sum:", sum);
console.log("🚀 ~ file: 15_arrayMethod.js:2 ~ initArray:", initArray);

