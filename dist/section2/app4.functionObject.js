"use strict";
function displayComponent(animal) {
    animal.name = "adam";
    animal.age = 25;
    return animal;
}
//! ถ้าหากว่ากำหนด property ในตัวแปรเพิ่มแล้วในฟังชันก์มี property เท่าเดิมก็สามารถเข้าถึงตัวแปร property ได้
//! แต่อาจจะมี error เตือนตอนเข้าถึงข้อมูล ซึ่งไม่ควรทำแบบนี้แต่แรก ควรกำหนด object ให้ชัดไปเลย
const ant = {
    name: "tony",
    age: 15
};
//* test
console.log(displayComponent(ant));
