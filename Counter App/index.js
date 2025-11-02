
function increment() {
    let count = parseInt(document.getElementById("count").innerText)
    count = count + 1
    document.getElementById("count").innerText = count
}
let lapC=0
function lapT(){
    let i=0
    while(i<4){
        lapC=lapC+1
    }
}
lapT()
console.log(lapC)
