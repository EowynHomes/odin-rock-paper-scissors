let computerChoice;
let rawRandomChoice;
let humanChoice;


//GET the computer's choice (Rock, paper, or scissors) 
function getComputerChoice(){
    //randomly select and return "rock", "paper", or "scissors".
    rawRandomChoice = Math.random();
    if (rawRandomChoice <= (1/3)) {
        computerChoice = "rock";
    } else if (rawRandomChoice <= (2/3)) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    //test what the function returns using console.log()
    console.log(computerChoice);
}
    

//GET the user's choice (rock, paper, or scissors)
    function getHumanChoice(){
        //PROMPT the user
        humanChoice = prompt("type your choice: rock, paper or scissors");
        //(just assume the user *will* enter a valid choice)
        //test what the function returns using console.log()
        console.log(humanChoice);
    }
    


//create the logic to play a single round. (case insensitive (convert player input toLowerCase should work here))


//Play the game for 5 rounds

function playGame(){
    //Variables to handle score
    //humanScore = 0;
    let humanScore = 0;
    //computerScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        
        if (humanChoice.toLowerCase() === computerChoice) {
            console.log(`${humanChoice} and ${computerChoice} are the same. It's a tie!`)
            return;
        }
        else if ((humanChoice === "rock" && computerChoice === "scissors")
            ||(humanChoice === "paper" && computerChoice === "rock")
            ||(humanChoice === "scissors" && computerChoice === "paper")){
                humanScore ++;
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        } else {
            computerScore ++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        }
        //output a string value to console.log representing the round winner.. such as "You lose! Paper beats Rock"
        //increase the humanScore or computerScore based on the winner
    }
    while((humanScore <5) && (computerScore <5)){
        playRound();
        getComputerChoice();
        getHumanChoice();
    }
}

playGame();