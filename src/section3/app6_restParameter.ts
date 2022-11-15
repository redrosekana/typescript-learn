//* rest parameter
function sumNumber(...data:number[]){
    let sum:number = 0
    for (let i:number=0;i<data.length;i++){
        sum += data[i]
    }
    return sum
}

console.log(sumNumber(1,2,3,4))
console.log(sumNumber(1,2,3,4,5))
console.log(sumNumber(1,2,3,4,5,6))