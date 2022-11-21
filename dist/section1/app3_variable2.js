"use strict";
//* any && unknow
Object.defineProperty(exports, "__esModule", { value: true });
//? any ค่าตัวแปรเปลี่ยนได้
let a = "12.555";
//? มีการเช็คค่าตัวแปรก่อน
let b = 12.555;
function specific(num) {
    return num.toFixed(2);
}
//* สังเกตุว่าถ้าใช้ any จะส่งค่าไปได้ยังไม่ error แต่ถ้าใช้ unknow จะมี error แจ้งเตือน
console.log(specific(a));
