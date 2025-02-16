const form = document.getElementById("Myform");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name=document.getElementById('name').value
    const address=document.getElementById('address').value
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    const name_err=document.getElementById("name-err")
    const address_err=document.getElementById("address-error")
    const emailErr = document.getElementById("email-error");
    const passErr = document.getElementById("password-error");
    
    name_err.textContent = "";
    address_err.textContent = "";
    emailErr.textContent = "";
    passErr.textContent = "";

    let isValid=true

    if(name==="" || name.length<2 ||name.includes(0,9)){
        name_err.textContent = "Please enter your name properly."
        isValid = false
    }
    if (address === "") {
        address_err.textContent = "Please enter your address.";
        isValid = false;
    }
    if (email === "" || !email.includes("@") || !email.includes(".")) {
        emailErr.textContent = "Please enter a valid email address.";
        isValid = false;
    }
    if (pass === "" || pass.length < 6) {
        passErr.textContent = "Please enter a password with at least 6 characters.";
        isValid = false;
    }
)}

// function resetErrors(){
//     const name_err=document.getElementById("name-err")
//     const address_err=document.getElementById("address-error")

//     name_err.textContent = "";
//     address_err.textContent = "";
//     document.getElementById("email-error").textContent = "";
//     document.getElementById("password-error").textContent = "";
// }