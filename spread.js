// SPREAD OPERATION using arrays
// syntax (...)

arr = [1,2,3,5,7,9]

function avg(a,b,c){
    return (a+b+c)/3
}

// let a = avg(...arr) //opens array and passes as arguments
// console.log(a);


let arr2 = [10,11, ...arr, 13, 14]      //this add elements of array not array itself
// console.log(arr2);


// we can also copy and concatinate arrays using spread operation
arr3 = [...arr] //copy 

arr4 = [...arr, ...arr2]
// console.log(arr4);






//SPREAD OPERATION using objects

obj1 = {
    name: "shdb",
    age : 22,
    favLang : "Python"
}


// obj2 = {}
// obj2.name = obj1.name
// obj2.age = obj1.age
// obj2.favLang = "JavaScript"

//insted of using the above technique we can use spread operation
obj2 = {...obj1, favLang:"JavaScript"}

console.log(obj2);
