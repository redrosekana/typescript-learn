"use strict";
//* generic function
function cutArray(arr, num) {
    return arr.slice(0, num);
}
//console.log(cutArray<number>([1,2,3,4,5],3))
//console.log(cutArray<string>(["1","2","3","4","5"],1))
//console.log(cutArray<boolean>([true,true,false],5))
//* generic mutiple type && generic constraint
function combine(num, value) {
    return `${num * 10} ${!value}`;
}
//console.log(combine<number,boolean>(3,true))
