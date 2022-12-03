//* ใช้ได้เฉพาะ object
interface Profile1 {
    readonly fname:string
    sname:string
    age:number
}

//* ประกาศซ้ำได้ เป็นเหมือนการเพิ่ม property
interface Profile1 {
    position?:string
    married?:boolean
}

//* แตกย่อย interface ไปอีก interface หนึ่งโดยนำ property พื้นฐานจาก Profile1 มา
//* สามารถเพิ่ม property ได้
interface Profile2 extends Profile1 {
    pet:string[]
}

const pro1:Profile1 = {
    fname:"sukachathum",
    sname:"seawsiritaworn",
    age:21,
}

const pro2:Profile2 = {
    fname:"sukachathum",
    sname:"seawsiritaworn",
    age:21,
    position:"docter",
    married:true,
    pet:["dog","cat"],
}


//! สำหรับ type ประกาศซ้ำไม่ได้
// type typeTest1 = {
//     fname:string
// }

// type typeTest1 = {
//     sname:string
// }