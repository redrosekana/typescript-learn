class Person {
    public static fname:string = "sukachathum"
    public static sname:string = "seawsiritaworn"
    
    //* ต้อง method static เท่านั้นที่จะเรียก static ได้
    public static displayInfomation(){
        console.log(`ชื่อ ${this.fname} นามสกุล ${this.sname}`)
    }
}

console.log(Person.fname)
console.log(Person.sname)
Person.displayInfomation()
