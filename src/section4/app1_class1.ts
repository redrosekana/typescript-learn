//* interface && class
interface Pet {
    namePet:string[]
    displayNamePet:()=>string
}

abstract class Employee {
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
    protected nationality:string = "thai"

    //* สามารถกำหนด contructor แบบนี้ก็ได้
    constructor(public fname:string , public sname:string , private password:number , public readonly status:boolean = true){
        
    }

    //* method
    public displayProfile():void{
        console.log(`ฉันชื่อ ${this.fname} นามสกุล ${this.sname}`)
    }

    //* getter ตัวอย่างตอนเรียก console.log(emp1.Password)
    get Password():number{
        return this.password
    }

    //* setter ตัวอย่างตอนเรียก emp1.Password = 456
    set Password(password:number){
        this.password = password
    }

    //* abstract method
    abstract displayBirthday():void
}

//* extends class
class Frontend extends Employee implements Pet {
    //* จาก interface
    namePet: string[] = ["ant","bird","car"]
    position:string
    
    constructor(fname:string,sname:string,password:number,status:boolean = true,position:string){
        //* super
        super(fname,sname,password,status)
        this.position = position
        
        console.log(this.nationality)
        console.log(this.position)
    }

    //* จาก abstract
    public displayBirthday():void{
        console.log(new Date().toLocaleString())
    }

    //* จาก interface
    public displayNamePet():string{
        return this.namePet.join(",")
    }


}
//TODO ถ้าเป็น class abstract กำหนดไม่ได้
//const emp1 = new Employee("jaja","boonyai",123)
//console.log(emp1)

//* test
// const emp2 = new Frontend("jojo","boonyai",456,false,"frontend")
// emp2.displayBirthday()
// console.log(emp2.displayNamePet())








