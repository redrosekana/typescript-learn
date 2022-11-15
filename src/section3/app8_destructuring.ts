//* destructuring array
const arrayDes:string[] = ["john","jojo","jaja"]
const [one,two,three] = arrayDes
console.log(one,two,three)

//* destructuring object
const objectDes:{p1:string,p2:number} = {p1:"tata",p2:45}
const {p1,p2} = objectDes
console.log(p1,p2)