document.getElementById("sendButton").addEventListener("click", sendFunction)

function sendFunction() {
    let messagingContainer = document.getElementsByClassName("messagingContainer")[0]
    let messageDiv = document.createElement("div")
    messageDiv.className = "messageDiv"

    messagingContainer.appendChild(messageDiv)
    let messageP = document.createElement("p")

    let inputBox = document.getElementById("inputBoxInput")
    messageP.innerText = inputBox.value
    messageDiv.appendChild(messageP)

    inputBox.value = ""
}




// const usernameElement = document.getElementById("username");
// const messageElement = document.getElementById("message");
// const button = document.getElementById("submitButton");

// button.addEventListener("click",updateDB);

// //Set database object here

// let database = firebase.database().ref();

// // created a new database object

// /**
//  * Updates the database with the username and message.
//  */
// function updateDB(event){
//     event.preventDefault();
//     const message    = messageElement.value;

//     messageElement.value  = "";

//     console.log(username + " : " + message);

//     //Update database here
//     let userInput = {
//         "Name": username,
//         "Message": message,
//     };

//     database.push(userInput);

// }

// // Set database "child_added" event listener here
// database.on('child_added', addToBoard);

// let messageBoard = document.querySelector(".allMessages")


// function addToBoard(rowData) {
//     let row = rowData.val();

//     let myName = row.Name
//     let myMessage = row.Message

//     let pElement = document.createElement('p');
//     pElement.innerText = myName + " : " + myMessage;
//     messageBoard.appendChild(pElement);
// }