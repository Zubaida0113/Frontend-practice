console.log('This program adds three numbers');
function add(a,b,c){
    return a+b+c;
}
let c=add(1,2,3);
console.log(c);

console.log('Javascript hariables - var, const, let');
var a=9
var a=8 //var are global-scoped
console.log(a) //output is 8 as var can be updated and re-assigned
let b="harry"
b=9
console.log(b) //output is 9 as let can be updated 
// let d=5
// let d=6
// console.log(d) //output is syntax error as let can be updated but not re-assigned
const r = "zubaida"
console.log(r) //output is zubaida as const can't be updated or re-assigned
// const s;
// s = "zubaida"
// console.log(s) //output is error as const must be initialized
let t=9
{
    let t=99
    console.log(t)//output is 99 as let and const are block-scoped
}
console.log(t)