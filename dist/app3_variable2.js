"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//* any && unknow
//? any ค่าตัวแปรเปลี่ยนได้
let a = "12.555";
//? มีการเช็คค่าตัวแปรก่อน
let b = 12.555;
function specific(num) {
    return num.toFixed(2);
}
console.log(specific(a));
