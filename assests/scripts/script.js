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

const getComputerChoice = (options) => {
    //Return a Random choice out of the options
    return console.log(options[Math.floor(Math.random() * options.length)]);
}
const getUserChoice = () => {
    const question = prompt("Select Rock, Paper, or Scissor");
    console.log(question);
    return question;
}

function decision(computerChoice, userChoice) {
    if(computerChoice === userChoice){
        return "Tie, Try Again";
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
}

const run = () => {
    for(let i = 0; i < 5; i++){
        console.log(decision(getComputerChoice(options),getUserChoice()));
    }
    
    //const start = document.createElement('button');
    //start.textContent = "StartGame";
    //document.body.appendChild(start);
    //start.addEventListener('click', decision());
}

run();


