//* ใช้ได้เฉพาะ object
interface Profile {
    readonly firstname:string
    lastname:string
    age:number
}

const myProfile:Profile = {
    firstname:"Sukachathum",
    lastname:"Seawsiritaworn",
    age:20
}

//? ประกาศซ้ำได้
interface Profile {
    position?:string
    married?:boolean
}

