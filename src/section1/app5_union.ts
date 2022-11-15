//* Union Type
let Tempo1: string | number | boolean


//* Union Type & Type Aliases
type Point1 = {
    a:number,
    b:number
}

type Point2 = {
    x:number,
    y:number
}

let Tempo2: Point1 | Point2


//* Union Type & Function 
function myPet(pets:string | string[]){
    console.log(pets)
}


//* Literals Type
type Role = "admin" | "student"


//* Template Literals Type
type vertical = "top" | "bottom" | "middle"
type horizontal = "left" | "right" | "center"

type alignment = `${vertical}-${horizontal}`







