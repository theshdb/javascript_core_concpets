//JS map
let a = [1,2,3,4]

let a2 = a.map(value => {
    return value + 2
})
// console.log(a2);


//JS filter
let a3 = a.filter(value => {
    return value > 6
})
// console.log(a3);


//JS reduce
let a4 = a.reduce((val1, val2) =>{
    return val1+val2
})
console.log(a4);