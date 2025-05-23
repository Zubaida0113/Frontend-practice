console.log("Ajax in one Video")

let fetchbtn=document.getElementById("fetchbtn")
fetchbtn.addEventListener('click',fetchdatahandler)

function fetchdatahandler(){
    console.log("fetchdatahandler function called")

    //instantiate xhr object
    const xhr=new XMLHttpRequest();

    //open an xhr object
    xhr.open('GET','zubi.txt',true)

    //what to do on progress
    xhr.onprogress=function(){
        console.log("on progress function called")
    }
    //what to do when response is ready
    xhr.onload=function(){
        if(this.status==200){
            console.log(this.responseText)
        }
        else{
            console.log("some error occured")
        }
    }
    //send the request
    xhr.send();
}