

let computerChoice;
let rawRandomChoice;
let humanChoice;
let humanScore = 0;
let computerScore = 0;

let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorsBtn = document.querySelector("#scissors");
let div = document.querySelector("#buttons");
let results = document.querySelector("#results");

div.addEventListener("click", buttonClicked);

results.textContent = `Human Score = ${humanScore}, Computer Score = ${computerScore}`;
let messageOne = document.createElement("p");
results.appendChild(messageOne);
let messageTwo = document.createElement("p");
results.appendChild(messageTwo);
let messageThree = document.createElement("p");
results.appendChild(messageThree);

let choiceBtns = document.querySelectorAll(".choice");

function getComputerChoice(){

    rawRandomChoice = Math.random();
    if (rawRandomChoice <= (1/3)) {
        computerChoice = "rock";
    } else if (rawRandomChoice <= (2/3)) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    console.log(`Computer choice is ${computerChoice}.`);
    return computerChoice;
}

function playRound(humanChoice, computerChoice){
    
    if (humanChoice.toLowerCase() === computerChoice) {
        messageOne.textContent=`${humanChoice} and ${computerChoice} are the same. It's a tie!`;
        messageTwo.textContent=`Score is Human: ${humanScore} to Computer: ${computerScore}.`;
        return;
    }
    else if ((humanChoice.toLowerCase() === "rock" && computerChoice === "scissors")
        ||(humanChoice.toLowerCase() === "paper" && computerChoice === "rock")
        ||(humanChoice.toLowerCase() === "scissors" && computerChoice === "paper")){
            humanScore ++;
            messageOne.textContent=`You win! ${humanChoice} beats ${computerChoice}`;
            messageTwo.textContent=`Score is Human: ${humanScore} to Computer: ${computerScore}.`;
    } else {
        computerScore ++;
        messageOne.textContent=`You lose! ${computerChoice} beats ${humanChoice}`;
        messageTwo.textContent= `Score is Human: ${humanScore} to Computer: ${computerScore}.`;
    }

    if ((humanScore >= 5)|| (computerScore>=5)) {
        messageOne.textContent = `I've had enough!`;
        messageTwo.textContent = `Good Game`;
    }
}

function buttonClicked(e) {
    let choice ="";
    if (e.target == rockBtn) {
        choice = "rock";
    } else if (e.target == paperBtn) {
        choice = "paper";
    } else if (e.target == scissorsBtn) {
        choice = "scissors";
    } else console.log(e);

    let comChoice = getComputerChoice();
    playRound(choice, comChoice);

    results.textContent = `Human Score = ${humanScore}, Computer Score = ${computerScore}`;
    results.appendChild(messageOne);
    results.appendChild(messageTwo);
    results.appendChild(messageThree);

    if (humanScore>=5||computerScore>=5){
        
        humanScore > computerScore ?
        messageOne.textContent += "You win!!!" :
        messageThree.textContent += "Computer wins";

        div.removeEventListener("click", buttonClicked);
        for (btn of choiceBtns){
            btn.classList.add("unavailable");
        }
        
    }


}

