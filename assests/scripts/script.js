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
    // for each user choice ai make choice 
    if((computerChoice[0].toLowerCase() == userChoice[0].toLowerCase()) && (score != 0)){
        return " Tie, Try Again";
    }else if(
        (
            (userChoice[0].toLowerCase() == "Rock" && computerChoice[0].toLowerCase() == "Scissors") || 
            (userChoice[0].toLowerCase() == "Paper" && computerChoice[0].toLowerCase() == "Rock") || 
            (userChoice[0].toLowerCase() == "Scissors" && computerChoice[0].toLowerCase() == "Paper")
        ) && (score != 0)
    ){
        roundResult = "You Won This Round, Computer Lose One Life, " + --computerScore + " ";
        return roundResult;
    }else if(
        (
            (userChoice[0].toLowerCase() == "Rock" && computerChoice[0].toLowerCase() == "Paper") || 
            (userChoice[0].toLowerCase() == "Paper" && computerChoice[0].toLowerCase() == "Scissors") || 
            (userChoice[0].toLowerCase() == "Scissors" && computerChoice[0].toLowerCase() == "Rock")
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

function recordRoundResults () {
    const roundCount = [];
    for( const rounds of roundCount){
        rounds.push(playRound(getUserChoice(options), getComputerChoice(options)));
        console.log(rounds);
    }
    return roundCount;
}
const run = () => {
    //console.log(playRound(getUserChoice(options), getComputerChoice(options)));
    console.log(recordRoundResults());    
}

run();