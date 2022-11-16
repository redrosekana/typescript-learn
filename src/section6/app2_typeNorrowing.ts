//* instanceof Norrowing
class Car{
    
}

class Van{

}

function compareClass(op:Car | Van){
    if (op instanceof Car){
        console.log("Class Car")
    }else if (op instanceof Van){
        console.log("Class Van")
    }
}


//* Discriminated Unions
interface Rectangle{
    width:number
    height:number
    type:"rectangle"
}

interface Triangle{
    base:number
    height:number
    type:"triangle"
}

type Shape = Rectangle | Triangle

function calculateShape(shape:Shape):number{
    if (shape.type === "rectangle"){
        return shape.height * shape.width
    }else if (shape.type === "triangle"){
        return 0.5 * shape.base * shape.height
    }else{
        throw new Error("กำหนดข้อมูลไม่ถูกต้อง")
    }
}
