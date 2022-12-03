"use strict";
//* destructuring array
const arrayDes = ["john", "jojo", "jaja"];
const [one, ...two] = arrayDes;
console.log(one, two);
//* destructuring object
const objectDes = { p1: "tata", p2: 45 };
const { p1, p2 } = objectDes;
console.log(p1, p2);
