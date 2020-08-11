
let button = document.getElementsByClassName("myButton");
button[0].addEventListener("click", populateInvestors);
const investorArray = []


function populateInvestors() {
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
        }})
    console.log(investorArray)
}

let inverstorCard = document.createElement('div')
    headshotDiv.src = headshot
    document.body.appendChild(headshotDiv)