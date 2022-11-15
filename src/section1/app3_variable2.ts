//* any && unknow
//? any ค่าตัวแปรเปลี่ยนได้
let a:any = "12.555"
//? มีการเช็คค่าตัวแปรก่อน
let b:unknown = 12.555

function specific(num:number){
    return num.toFixed(2)
}

console.log(specific(a))
export {}


