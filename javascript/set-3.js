// Ques 1
const obj={
    Harry:56,
    Vinay:66,
    Ravi:87
}

// for(a in obj){
//     console.log("Marks of",a,"is",obj[a])
// }
// //this is array implementation
// for(let i=0;i< Object.keys(obj).length;i++ ){
//     console.log("Marks of",Object.keys(obj)[i],"is",obj[Object.keys(obj)[i]])
// }

// Ques 2
const prompt = require('prompt-sync')();
let a=10
let b
while(a!=b){
    b = prompt("Enter a number : ")
    if(a!=b){
        console.log("Try Again")
    }
}
console.log("You have entered the correct number")

// Ques 3
const mean= (u,v,x,y,z) => {
    return (u+v+x+y+z)/5
}
console.log(mean(5,7,3,6,4))