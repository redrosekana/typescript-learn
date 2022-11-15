"use strict";
class Employee {
    //* สามารถกำหนด contructor แบบนี้ก็ได้
    constructor(fname, sname, password, status = true) {
        this.fname = fname;
        this.sname = sname;
        this.password = password;
        this.status = status;
        // //* public private
        // public fname:string
        // public sname:string
        // readonly status:boolean = true
        // private password:number
        // //TODO แตกต่างจาก js ตรงที่ถ้าจะประกาศใน constructor ต้องมีการประกาศตัวแปรข้างนอกด้วย
        // constructor(fname:string,sname:string,pwd:number) {
        //     this.fname = fname
        //     this.sname = sname
        //     this.password = pwd
        // }
        //* protected ทำให้ class ใน extend และ class ตัวมันเอง สามารถเข้าถึงค่าได้
        this.nationality = "thai";
    }
    //* method
    displayProfile() {
        console.log(`ฉันชื่อ ${this.fname} นามสกุล ${this.sname}`);
    }
    //* getter ตัวอย่างตอนเรียก emp1.Password = 456
    get Password() {
        return this.password;
    }
    //* setter ตัวอย่างตอนเรียก console.log(emp1.Password)
    set Password(password) {
        this.password = password;
    }
}
//* extends class
class Frontend extends Employee {
    constructor(fname, sname, password, position) {
        //* super
        super(fname, sname, password);
        this.position = position;
        //* จาก interface
        this.namePet = ["ant", "bird", "car"];
        console.log(this.nationality);
    }
    displayBirthday() {
        console.log(new Date().toLocaleString());
    }
    displayNamePet() {
        return this.namePet.join(",");
    }
}
//TODO ถ้าเป็น class abstract กำหนดไม่ได้
//const emp1 = new Employee("jaja","boonyai",123)
const emp2 = new Frontend("jojo", "boonyai", 456, "frontend");
emp2.displayBirthday();
console.log(emp2.displayNamePet());
