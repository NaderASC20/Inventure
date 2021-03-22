username = document.getElementById('username')
let password = document.getElementById('password')
document.getElementById("loginButton").addEventListener('click', loginFunction)
let passNotCorrect = false

function loginFunction() {

    if (username.value == 'startup' && password.value == '1234') {
        passNotCorrect = false
        console.log("Correct username and password")
        window.location.replace("../html/startupportal.html");
    } else if (username.value == 'investor' && password.value == '1234') {
        passNotCorrect = false
        console.log("Correct username and password")
        window.location.replace("../html/investorside.html");
    } else {
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
            incorrectpass.innerText = "Incorrect username or password."
        }
    }
}