"use strict";
//* spread operator
const spread1 = [1, 2, 3, 4];
const spread2 = [5, 6, 7, 8];
spread1.push(...spread2);
console.log(spread1);
