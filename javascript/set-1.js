// ques 1
let a="cat"
a=a+1
console.log(a)
// ques 2
console.log(typeof a)
//ques 3
const c={
    name:"zubaida",
    section:1,
}
// c=45 // can't reassign c again as c is the reference to object inside {} that has been stored in memory already -> hence it will throw error
// ques 4
c['friend']="simran"
console.log(c)

// ques 5 
const dict={
    yakka:"hard Work",
    longing:"a strong feeling of need or desire for someone or something"
}
console.log(dict.yakka)
console.log(dict.longing)
console.log(dict["yakka"])