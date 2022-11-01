//* type assertion
let a:unknown = "Hello TypeScript"

function specific(value:string){
    return value.toUpperCase()
}

console.log(specific(a as string))
console.log(specific(<string> a))

export {}