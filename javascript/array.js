let marks=[56,76,32,88,"Not Present", null,false]
console.log(marks)
console.log(marks[0])
console.log(marks[2])
console.log(marks[4])
console.log(marks[6])
console.log(marks[7]) //undefined as index 7 doesn't exist
console.log(marks[5])
console.log(marks.length) 
marks[7]=99//add at end
console.log(marks)
marks[4]=90//update
console.log(marks)

//arrays are mutable and can be changed

for(let i=0;i<marks.length;i++){
    console.log(marks[i])
}
a=[1,2,3,4]
a.forEach((i) => {
    console.log(i*i)
})