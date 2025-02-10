// this is the old way of writing js functions
function avg(a,b){
    return (a+b)/2;
}
let a=5
let b=9
console.log(avg(a,b))

// Arrow functions are prefered
const sum = (a,b) => {
return a+b
}
console.log(sum(4,5))