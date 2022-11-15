"use strict";
//* rest parameter
function sumNumber(...data) {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        sum += data[i];
    }
    return sum;
}
console.log(sumNumber(1, 2, 3, 4));
console.log(sumNumber(1, 2, 3, 4, 5));
console.log(sumNumber(1, 2, 3, 4, 5, 6));
