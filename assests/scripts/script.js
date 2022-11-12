//Ui yes but later

//Input:  User input and Ai inputs

//Output : Decide Winner

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
    let j = options[Math.floor(Math.random() * options.length)];
    console.log(j);
    return options[Math.floor(Math.random() * options.length)];
}
const getUserChoice = (options) => {
    options = prompt("Select Rock, Paper, or Scissors");
    console.log(options);
    return options;
}

function playRound(userChoice, computerChoice) {
    let roundResult = ' ';
    let score = checkScore();
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

/*function jjj( round, score){
    round.forEach(scores =>  {
        scores == 0 ? score : "keep going"
    });
}*/

function checkScore () {
    if(userScore == 0){
        return "You Lose";
    }else if(computerScore == 0){
        return "You Win";
    }else{
        return;
    }
}


/*
function decision(round) {
    for(i = 0; i < 1; i++){
        if(round){
            /*if(userScore == 0){
                return "You Lose";
            }else if(computerScore == 0){
            return "You Win";
            }
            return round;
        }
    }
}
*/
const run = () => {
    console.log(playRound(getUserChoice(options), getComputerChoice(options)));
}

run();



//const start = document.createElement('button');
    //start.textContent = "StartGame";
    //document.body.appendChild(start);
    //start.addEventListener('click', decision());
    /*else if((computerChoice == "Rock" && userChoice == "Scissors")
        || (computerChoice == "Paper" && userChoice == "Rock")
        || (computerChoice == "Scissors" && userChoice == "Paper")){
            return ++computerScore;
    }

    for(let i = 0; i < 3; i++){
        if(round){
            if(userScore == 0){
                return "You Lose";
            }else if(computerScore == 0 & round){
                return "You Win";
            }
            return round;
        }
    }

    /*if(computerChoice == userChoice){
        return "Tie, Try Again";
    }else if((computerChoice !== userChoice) && (((userChoice || computerChoice) == "Rock") && ((userChoice || computerChoice) != "Paper")) ){
        return  `${(computerChoice == "Rock" && userChoice == "Scissor") ? "You Lose Computer Win, Rock beats scissors" : "You Win Computer Loses"}`;
    }else if((computerChoice !== userChoice) && (((userChoice || computerChoice) == "Paper") && ((userChoice || computerChoice) != "Scissor" ))){
        return `${(computerChoice == "Paper" && userChoice == "Rock") ? "You Lose Computer Win, Paper beats rock" : "You Win Computer Loses"}`;
    }else if((computerChoice !== userChoice) && (((userChoice || computerChoice) == "Scissor") && ((userChoice || computerChoice) != "Rock" ))){
        return `${(computerChoice == "Scissor" && userChoice == "Paper") ? "You Lose Computer Win, Scissor beats paper" : "You Win Computer Loses"}`;
    }else{
        return "You Lose";
    }*/