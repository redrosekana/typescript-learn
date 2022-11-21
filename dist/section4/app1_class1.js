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
        // public readonly status:boolean = true
        // private password:number
        // //TODO แตกต่างจาก js ตรงที่ถ้าจะประกาศใน constructor ต้องมีการประกาศตัวแปรข้างนอกด้วย
        // constructor(fname:string,sname:string,pwd:number) {
        //     this.fname = fname
        //     this.sname = sname
        //     this.password = pwd
        // }
        //* protected ทำให้ class ใน extend และ class ตัวมันเอง สามารถเข้าถึงค่าได้ แต่ด้านนอกไม่ได้
        this.nationality = "thai";
    }
    //* method
    displayProfile() {
        console.log(`ฉันชื่อ ${this.fname} นามสกุล ${this.sname}`);
    }
    //* getter ตัวอย่างตอนเรียก console.log(emp1.Password)
    get Password() {
        return this.password;
    }
    //* setter ตัวอย่างตอนเรียก emp1.Password = 456
    set Password(password) {
        this.password = password;
    }
}
//* extends class
class Frontend extends Employee {
    constructor(fname, sname, password, status = true, position) {
        //* super
        super(fname, sname, password, status);
        //* จาก interface
        this.namePet = ["ant", "bird", "car"];
        this.position = position;
        console.log(this.nationality);
        console.log(this.position);
    }
    //* จาก abstract
    displayBirthday() {
        console.log(new Date().toLocaleString());
    }
    //* จาก interface
    displayNamePet() {
        return this.namePet.join(",");
    }
}
//TODO ถ้าเป็น class abstract กำหนดไม่ได้
//const emp1 = new Employee("jaja","boonyai",123)
//console.log(emp1)
//* test
// const emp2 = new Frontend("jojo","boonyai",456,false,"frontend")
// emp2.displayBirthday()
// console.log(emp2.displayNamePet())
