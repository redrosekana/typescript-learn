//* spread operator
const spread1:number[] = [1,2,3,4]
const spread2:number[] = [5,6,7,8]

spread1.push(...spread2)
console.log(spread1)