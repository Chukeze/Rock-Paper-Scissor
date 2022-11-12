//Psuedocode 
/**
 * For every user choice
 * Ai makes a choice
 * compare user choice to ai chose
 * which ever has higher precedence wins
 */


const options = ['Rock', 'Paper', 'Scissors'];
let computerScore = 3;
let userScore = 3;

const getComputerChoice = (options) => {
    //Return a Random choice out of the options
    return options[Math.floor(Math.random() * options.length)];
}
const getUserChoice = (options) => {
    options = prompt("Select Rock, Paper, or Scissors");
    return options;
}

function playRound(userChoice, computerChoice) {
    let roundResult = ' ';
    const score = checkScore();
    if((computerChoice == userChoice) && (score != 0)){
        return " Tie, Try Again";
    }else if(
        (
            (userChoice == "Rock" && computerChoice == "Scissors") || 
            (userChoice == "Paper" && computerChoice == "Rock") || 
            (userChoice == "Scissors" && computerChoice == "Paper")
        ) && (score != 0)
    ){
        roundResult = "You Won This Round, Computer Lose One Life, " + --computerScore + " ";
        return roundResult;
    }else if(
        (
            (userChoice == "Rock" && computerChoice == "Paper") || 
            (userChoice == "Paper" && computerChoice == "Scissors") || 
            (userChoice == "Scissors" && computerChoice == "Rock")
        ) && (score != 0)
    ){
        roundResult = "Computer Won This Round, You Lose One Life, " + --userScore + " ";
        return roundResult;
    }else{
        return " Why is this Not Working";
    }
}

function checkScore () {
    if(userScore == 0){
        return "You Lose";
    }else if(computerScore == 0){
        return "You Win";
    }else{
        return;
    }
}

const run = () => {
    console.log(playRound(getUserChoice(options), getComputerChoice(options)));
}

run();