function sayHello():string
function sayHello(name:string):string
function sayHello(name?:unknown):string{
    
    if (!name){
        return "Hello Typescript"
    }

    if (typeof name === "string"){
        return `Hello ${name}`
    }

    throw new Error("ชนิดข้อมูลไม่ถูกต้อง")
}

function addFunc(num1:number,num2:number):number
function addFunc(num1:string,num2:string):number
function addFunc(num1:unknown,num2:unknown):number{
    
    if (typeof num1 === "number" && typeof num2 === "number"){
        return num1 + num2
    }

    if (typeof num1 === "string" && typeof num2 === "string"){
        return parseInt(num1) + parseInt(num2)
    }
    
    throw new Error("ระบุชนิดข้อมูลไม่ถูกต้อง")
}







