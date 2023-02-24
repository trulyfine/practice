function getIterator(list) {
    let i = 0;
    return {
        next: function() {
            let done = i >= list.length;
            let value = !done ? list[i] : undefined;
            i++;
            return {
                done,
                value
            }
        }
    }
}
const myIterator = getIterator([1, 2, 3]);
console.log("🚀 ~ file: 07_iterator.js:16 ~ myIterator", myIterator);
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());