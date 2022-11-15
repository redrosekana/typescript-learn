"use strict";
class Person {
    //* ต้อง method static เท่านั้นที่จะเรียก static ได้
    static displayInfomation() {
        console.log(`ชื่อ ${this.fname} นามสกุล ${this.sname}`);
    }
}
Person.fname = "sukachathum";
Person.sname = "seawsiritaworn";
console.log(Person.fname);
console.log(Person.sname);
Person.displayInfomation();
