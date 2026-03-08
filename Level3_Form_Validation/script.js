function validateForm(){

let name=document.getElementById("name").value
let email=document.getElementById("email").value

if(name=="" || email==""){

document.getElementById("msg").innerText="Fill all fields"
return false

}

document.getElementById("msg").innerText="Form submitted"

return false

}