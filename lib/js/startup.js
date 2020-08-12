let button = document.getElementsByClassName("myButton");
button[0].addEventListener("click", createInvestors);
var investorArray = []

document.getElementById("ResultsContainerID").style.borderWidth = "0px"

function createInvestors() {
    document.getElementById("ResultsContainerID").style.borderWidth = "3px"
    let angelInvestersCheck = document.getElementById("Angel Investors").checked;
    let ventureCapsCheck = document.getElementById("Venture Capitalists").checked;
    let personalInvestersCheck = document.getElementById("Personal Investors").checked;

    // Fetches random people
    fetch('https://randomuser.me/api?results=6')
    .then(function(response){
        return response.json();
    }).then(function(returnedJson){
        for (let i = 0; i < returnedJson.results.length; i++) {
            let newInvestorObj = {
                name : "",
                age : "",
                headshot: "",
                phone: "",
                email: "",
                location: "",
                investorType : "",
            }
            // Loops over random people and puts investors in a list
            let name = returnedJson.results[i].name.first + " " + returnedJson.results[i].name.last;
            let age = returnedJson.results[i].dob.age;
            let headshot = returnedJson.results[i].picture.thumbnail;
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
            }
            else if (angelInvestersCheck == false && ventureCapsCheck == false && personalInvestersCheck == false) {
                if (randnum == 1) {
                   // investorType = "Angel Investor"
                }
                if (randnum == 2) {
                   //  investorType = "Venture Capitalist"
                }
                if (randnum == 3) {
                   //  investorType = "Personal Investor"
                }
            }
            else if (angelInvestersCheck == false && ventureCapsCheck == false && personalInvestersCheck == true) {
                if (randnum == 1) {
                    investorType = "Personal Investor"
                }
                if (randnum == 2) {
                    investorType = "Personal Investor"
                }
                if (randnum == 3) {
                    investorType = "Personal Investor"
                }
            }
            else if (angelInvestersCheck == true && ventureCapsCheck == false && personalInvestersCheck == true) {
                if (randnum == 1) {
                    investorType = "Angel Investor"
                }
                if (randnum == 2) {
                    investorType = "Angel Investor"
                }
                if (randnum == 3) {
                    investorType = "Personal Investor"
                }
            }
            else if (angelInvestersCheck == true && ventureCapsCheck == false && personalInvestersCheck == false) {
                if (randnum == 1) {
                    investorType = "Angel Investor"
                }
                if (randnum == 2) {
                    investorType = "Angel Investor"
                }
                if (randnum == 3) {
                    investorType = "Angel Investor"
                }
            }
            else if (angelInvestersCheck == true && ventureCapsCheck == true && personalInvestersCheck == false) {
                if (randnum == 1) {
                    investorType = "Angel Investor"
                }
                if (randnum == 2) {
                    investorType = "Venture Capitalist"
                }
                if (randnum == 3) {
                    investorType = "Venture Capitalist"
                }
            }
            else if (angelInvestersCheck == false && ventureCapsCheck == true && personalInvestersCheck == true) {
                if (randnum == 1) {
                    investorType = "Venture Capitalist"
                }
                if (randnum == 2) {
                    investorType = "Venture Capitalist"
                }
                if (randnum == 3) {
                    investorType = "Personal Investor"
                }
            }
            else if (angelInvestersCheck == false && ventureCapsCheck == true && personalInvestersCheck == false) {
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

            console.log(investorArray)
            console.log(investorArray)
            console.log(investorArray)

        }})
    
    populateInvestors()
}

function populateInvestors(){
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

    for (let i=0; i < 6; i++) {
        
        var investorCard = document.createElement("div");
        document.getElementById("ResultsContainerID").appendChild(investorCard);
        investorCard.className = "investorCard"

        let cardList = document.getElementsByClassName("investorCard");

        let nameTextDiv = document.createElement("div")
        cardList[i].appendChild(nameTextDiv)
        nameTextDiv.className = "nameTextDiv"

        let nameTextDivList = document.getElementsByClassName("nameTextDiv");

        let nameText = document.createElement("p");
        nameTextDivList[i].appendChild(nameText);
        nameText.className = "nameText"

        let nameTextList = document.getElementsByClassName("nameText");
        nameTextList[i].innerText = "test"
    

        // var nameTextDiv = document.createElement("div");
        // document.x[i].appendChild("nameTextDiv");
        // nameTextDiv.className = "nameTextDiv";
    }
}
