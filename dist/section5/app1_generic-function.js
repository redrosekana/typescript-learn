"use strict";
//* generic function
function cutArray(arr, num) {
    return arr.slice(0, num);
}
console.log(cutArray([1, 2, 3, 4, 5], 3));
console.log(cutArray(["1", "2", "3", "4", "5"], 1));
console.log(cutArray([true, true, false], 5));
//* generic mutiple type && generic constraint
function combine(num, value) {
    return `${num * 10} ${!value}`;
}
console.log(combine(3, true));
