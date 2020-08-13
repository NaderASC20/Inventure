'use strict';
let button1 = document.getElementsByClassName("myButton");
button1[0].addEventListener("click", createInvestors);

var investorArray = []
document.getElementById("ResultsContainerID").style.borderWidth = "0px"

document.getElementById("xButtonID").addEventListener("click", closeChat)

function closeChat() {
    document.getElementById("chatWindowID").style.display = "none"
}

let cardList = document.getElementsByClassName("investorCard");
let ResultsContainer = document.getElementById("ResultsContainerID");
let portalContainer = document.getElementById("portalContainerID")
let clicked = 0

function createInvestors() {
    clicked++
    if (clicked >= 2) {
        console.log("clicked more than once")
        return;
    } else {
        document.getElementById("submitButton").onclick = ""
        console.log(cardList)
        console.log(cardList)
        investorArray = []

        document.getElementById("ResultsContainerID").style.borderWidth = "3px"
        let angelInvestersCheck = document.getElementById("Angel Investors").checked;
        let ventureCapsCheck = document.getElementById("Venture Capitalists").checked;
        let personalInvestersCheck = document.getElementById("Personal Investors").checked;

        // Fetches random people
        fetch('https://randomuser.me/api?results=18')
            .then(function (response) {
                return response.json();
            }).then(function (returnedJson) {
                for (let i = 0; i < returnedJson.results.length; i++) {
                    let newInvestorObj = {
                        name: "",
                        age: "",
                        headshot: "",
                        phone: "",
                        email: "",
                        location: "",
                        investorType: "",
                    }
                    // Loops over random people and puts investors in a list
                    let name = returnedJson.results[i].name.first + " " + returnedJson.results[i].name.last;
                    let age = returnedJson.results[i].dob.age;
                    let headshot = returnedJson.results[i].picture.large;
                    let phone = returnedJson.results[i].cell;
                    let email = returnedJson.results[i].email;
                    let location = `${returnedJson.results[i].location.city}, ${returnedJson.results[i].location.country}`
                    let investorType
                    let randnum = Math.floor(Math.random() * (3 - 1 + 1) + 1)
                    console.log(randnum)

                    // Else if permutations
                    if (angelInvestersCheck == true && ventureCapsCheck == true && personalInvestersCheck == true) {
                        if (randnum == 1) {
                            investorType = "Angel Investor"
                        }
                        if (randnum == 2) {
                            investorType = "Venture Capitalist"
                        }
                        if (randnum == 3) {
                            investorType = "Personal Investor"
                        }
                    } else if (angelInvestersCheck == false && ventureCapsCheck == false && personalInvestersCheck == false) {
                        if (randnum == 1) {
                            // investorType = "Angel Investor"
                        }
                        if (randnum == 2) {
                            //  investorType = "Venture Capitalist"
                        }
                        if (randnum == 3) {
                            //  investorType = "Personal Investor"
                        }
                    } else if (angelInvestersCheck == false && ventureCapsCheck == false && personalInvestersCheck == true) {
                        if (randnum == 1) {
                            investorType = "Personal Investor"
                        }
                        if (randnum == 2) {
                            investorType = "Personal Investor"
                        }
                        if (randnum == 3) {
                            investorType = "Personal Investor"
                        }
                    } else if (angelInvestersCheck == true && ventureCapsCheck == false && personalInvestersCheck == true) {
                        if (randnum == 1) {
                            investorType = "Angel Investor"
                        }
                        if (randnum == 2) {
                            investorType = "Angel Investor"
                        }
                        if (randnum == 3) {
                            investorType = "Personal Investor"
                        }
                    } else if (angelInvestersCheck == true && ventureCapsCheck == false && personalInvestersCheck == false) {
                        if (randnum == 1) {
                            investorType = "Angel Investor"
                        }
                        if (randnum == 2) {
                            investorType = "Angel Investor"
                        }
                        if (randnum == 3) {
                            investorType = "Angel Investor"
                        }
                    } else if (angelInvestersCheck == true && ventureCapsCheck == true && personalInvestersCheck == false) {
                        if (randnum == 1) {
                            investorType = "Angel Investor"
                        }
                        if (randnum == 2) {
                            investorType = "Venture Capitalist"
                        }
                        if (randnum == 3) {
                            investorType = "Venture Capitalist"
                        }
                    } else if (angelInvestersCheck == false && ventureCapsCheck == true && personalInvestersCheck == true) {
                        if (randnum == 1) {
                            investorType = "Venture Capitalist"
                        }
                        if (randnum == 2) {
                            investorType = "Venture Capitalist"
                        }
                        if (randnum == 3) {
                            investorType = "Personal Investor"
                        }
                    } else if (angelInvestersCheck == false && ventureCapsCheck == true && personalInvestersCheck == false) {
                        if (randnum == 1) {
                            investorType = "Venture Capitalist"
                        }
                        if (randnum == 2) {
                            investorType = "Venture Capitalist"
                        }
                        if (randnum == 3) {
                            investorType = "Venture Capitalist"
                        }
                    }
                    newInvestorObj.name = name
                    newInvestorObj.age = age
                    newInvestorObj.headshot = headshot
                    newInvestorObj.phone = phone
                    newInvestorObj.email = email
                    newInvestorObj.location = location
                    newInvestorObj.investorType = investorType
                    investorArray.push(newInvestorObj);

                    portalContainer = document.getElementById("portalContainerID");
                    ResultsContainer = document.getElementById("ResultsContainerID");
                    // let nameTextDivList= document.getElementsByClassName("nameTextDiv");
                    // let nameTextList = document.getElementsByClassName("nameText");
                    // let pictureTextContainerList = document.getElementsByClassName("pictureTextContainer");
                    // let imgContainerList = document.getElementsByClassName("imgContainer");
                    // let bioContactInfoList = document.getElementsByClassName("bioContactInfo");
                    // let pContainerList = document.getElementsByClassName("pContainer");
                    // let investorTypeTextList = document.getElementsByClassName("investorTypeText");
                    // let AgeTextList = document.getElementsByClassName("AgeText");
                    // let EmailTextList = document.getElementsByClassName("EmailText")
                    // let LocationTextList = document.getElementsByClassName("LocationText")
                    // let PhoneTextList = document.getElementsByClassName("PhoneText")

                    var investorCard = document.createElement("div"); //Create element 
                    document.getElementById("ResultsContainerID").appendChild(investorCard); // Append under node (Make list statement and sleect index i of list)
                    investorCard.className = "investorCard" // Add class name to give styling

                    let nameTextDiv = document.createElement("div");
                    cardList[i].appendChild(nameTextDiv);
                    nameTextDiv.className = "nameTextDiv"

                    let nameTextDivList = document.getElementsByClassName("nameTextDiv");

                    let nameText = document.createElement("p");
                    nameTextDivList[i].appendChild(nameText);
                    nameText.className = "nameText"

                    let nameTextList = document.getElementsByClassName("nameText");
                    nameTextList[i].innerText = investorArray[i].name

                    let pictureTextContainer = document.createElement("div")
                    cardList[i].appendChild(pictureTextContainer)
                    pictureTextContainer.className = "pictureTextContainer"

                    let pictureTextContainerList = document.documentElement.getElementsByClassName("pictureTextContainer")
                    let imgContainer = document.createElement("div")
                    pictureTextContainerList[i].appendChild(imgContainer)
                    imgContainer.className = "imgContainer"

                    let imgContainerList = document.getElementsByClassName("imgContainer");
                    let headshotIMGsrc = investorArray[i].headshot
                    let headshotIMG = document.createElement("img")
                    imgContainerList[i].appendChild(headshotIMG)
                    headshotIMG.src = headshotIMGsrc

                    let bioContactInfo = document.createElement("div")
                    cardList[i].appendChild(bioContactInfo)
                    bioContactInfo.className = "bioContactInfo"

                    let bioContactInfoList = document.getElementsByClassName("bioContactInfo");
                    let pContainer = document.createElement("div")
                    bioContactInfoList[i].appendChild(pContainer)
                    pContainer.className = "pContainer"

                    let pContainerList = document.getElementsByClassName("pContainer");
                    let investorTypeText = document.createElement("p")
                    let AgeText = document.createElement("p")
                    let EmailText = document.createElement("p")
                    let LocationText = document.createElement("p")
                    let PhoneText = document.createElement("p")
                    let ChatNow = document.createElement("a")

                    pContainerList[i].appendChild(investorTypeText)
                    investorTypeText.className = "investorTypeText"
                    investorTypeText.innerText = `Type: ${investorArray[i].investorType}`

                    pContainerList[i].appendChild(AgeText)
                    AgeText.className = "AgeText"
                    AgeText.innerText = `Age: ${investorArray[i].age}`

                    pContainerList[i].appendChild(EmailText)
                    EmailText.className = "EmailText"
                    EmailText.innerText = `Email: ${investorArray[i].email}`

                    pContainerList[i].appendChild(LocationText)
                    LocationText.className = "LocationText"
                    LocationText.innerText = `Location: ${investorArray[i].location}`

                    pContainerList[i].appendChild(PhoneText)
                    PhoneText.className = "PhoneText"
                    PhoneText.innerText = `Phone #: ${investorArray[i].phone}`

                    pContainerList[i].appendChild(ChatNow)
                    ChatNow.className = "myButton2"
                    ChatNow.innerText = "Chat Now"

                    let ChatNowList = document.getElementsByClassName("myButton2")
                    ChatNowList[i].addEventListener("click", openChat)

                    function openChat() {
                        let chatBox = document.getElementById("chatWindowID")
                        chatBox.style.display = "flex"
                        document.getElementById("headshot").src = investorArray[i].headshot
                        document.getElementById("headerName").innerText = `Chat with ${investorArray[i].name}`
                    }

                    let elementsArray = document.querySelectorAll(".myButton2");

                    elementsArray.forEach(function (elem) {
                        elem.addEventListener("click", function (event) {
                            event.preventDefault()
                            document.getElementById("chatWindowID").style.display = "flex"
                            let messageDivList = document.getElementsByClassName("messageDiv")
                            console.log(messageDivList)
                            for (let x = 0; x < messageDivList.length; x++) {
                                messageDivList[x].parentNode.removeChild(messageDivList[x])
                            }

                        });
                    });
                }
            })
    }
}