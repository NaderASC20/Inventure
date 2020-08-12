let username = document.getElementById('username')
let password = document.getElementById('password')
document.getElementById("loginButton").addEventListener('click', loginFunction) 
let passNotCorrect = false
function loginFunction() {

console.log(username.value)
console.log(password.value)

if(username.value == 'startup' && password.value =='1234') {
    passNotCorrect = false
    console.log("Correct username and password")
    window.location.replace("../html/startupportal.html");
    }
else if(username.value == 'invest' && password.value =='1234')  {
    passNotCorrect = false
    console.log("Correct username and password")
    window.location.replace("../html/investorportal.html");
}   

else{
    if (passNotCorrect == true) {
        return
    }

    if (passNotCorrect == false) {
    passNotCorrect = true
    let incorrectpass = document.createElement("p")
    let logo = document.getElementById("logo")
    logo.appendChild(incorrectpass)
    incorrectpass.id = "incorrectpass"
    incorrectpass.className = "incorrectpass"
    incorrectpass.innerText = "INCORRECT USERNAME OR PASSWORD"
    }
    }



}





