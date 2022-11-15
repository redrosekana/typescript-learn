//* interface method
interface monitor1 {
    //TODO กำหนดได้สองแบบ
    //displayScreen1:()=>number
    displayScreen1():number
}
interface monitor2 {
    displayScreen2:()=>string
}


//* intersection interface
type monitor3 = monitor1 & monitor2

const test2:monitor3 = {
    displayScreen1:function(){
        return 2+2
    },
    displayScreen2:function(){
        return "2"+"2"
    }
}

console.log(test2.displayScreen1())
console.log(test2.displayScreen2())