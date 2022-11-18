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


//UI
function UI () {
    const header = document.querySelector('h1')
    const body = document.querySelector('body');
    const container = document.createElement('main');
    const optionContainer = document.createElement('div');
    const scoreBoxContainer = document.createElement('div');
    

    container.classList.add("canvas")
    optionContainer.classList.add("option-container");
    scoreBoxContainer.classList.add("scorebox-container");

    body.appendChild(container);
    container.appendChild(header);
    container.appendChild(optionContainer);
    container.appendChild(scoreBoxContainer);
    
    

    for (let i = 0; i < options.length; i++) {
        const element = document.createElement('option');
        element.value = options[i];
        //element.textContent = options[i];
        optionContainer.appendChild(element);
        element.classList.add("option-container__options");
        element.classList.add("option-container__options--size");
        element.id= options[i];
    }

    for (let index = 1; index < 3; index++) {
        if(index == 1){
            const element = document.createElement('p');
            element.textContent = userScore;
            element.id = 'user-score';
            scoreBoxContainer.appendChild(element);
        }
        if(index == 2){
            const element = document.createElement('p');
            element.textContent = computerScore;
            element.id='computer-score';
            scoreBoxContainer.appendChild(element);
        }
    }
    const option = document.querySelectorAll('option');
    const optionArray = Array.from(option);
    const imageOption = ['./assests/images/rock.png', './assests/images/paper.png', './assests/images/scissors.png'];
    for (let index = 0; index < imageOption.length; index++) {
        optionArray.forEach((button) => {
        
            button.style.backgroundImage = `url('${imageOption[index++]}')`;
            /*const getImages = document.querySelectorAll('img');
            getImages.forEach(img => {
                img.src = imageOption[index++];
                img.alt = options;
            });   */     
        
        //const image = document.createElement('img');
        //button.appendChild(image);
        });
    } 
}
    /*for (let index = 0; index < imageOption.length; index++) {
    const getImages = document.querySelectorAll('img');
    getImages.forEach(img => {
        img.src = imageOption[index++];
        img.alt = options;
    });        
    }  */  

let listenForUserEvent = document.querySelectorAll('option');
/*
listenForUserEvent.forEach((button) =>{
    button.addEventListener('click', () =>{
        const userChoice = button.value.toString();
        playRound(userChoice,getComputerChoice(options));
    })
});*/

const getComputerChoice = (options) => {
    //Return a Random choice out of the options
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(userChoice, computerChoice) {
    const score = checkScore();
    const getUserCurrentScore = document.getElementById('user-score');
    const getComputerCurrentScore = document.getElementById('computer-score');
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
        getUserCurrentScore.textContent = --computerScore;;
    }else if(
        (
            (userChoice[0].toLowerCase() == "Rock" && computerChoice[0].toLowerCase() == "Paper") || 
            (userChoice[0].toLowerCase() == "Paper" && computerChoice[0].toLowerCase() == "Scissors") || 
            (userChoice[0].toLowerCase() == "Scissors" && computerChoice[0].toLowerCase() == "Rock")
        ) && (score != 0)
    ){
        getComputerCurrentScore.textContent = --userScore;
    }else{
        return;
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

function updateScore(roundResult){
    const getUserCurrentScore = document.getElementById('user-score');
    const getComputerCurrentScore = document.getElementById('computer-score');
    if(roundResult === ` "You Won This Round, Computer Lose One Life, " + ${--computerScore} + " "`){
        getUserCurrentScore.textContent = computerScore;
    }else if(roundResult === `"Computer Won This Round, You Lose One Life, " + ${--userScore} + " "`){
        getComputerCurrentScore.textContent = userScore;
    }else{
        return;
    }
}
//console.log(` "You Won This Round, Computer Lose One Life, " + ${--computerScore} + " "`)

function recordRoundResults (round) {
    const roundCount = [];
    for( const rounds of roundCount){
        rounds.push(round);
    }
    return roundCount;
}
const run = () => {
    recordRoundResults(updateScore
            (listenForUserEvent.forEach((button) =>{
                    button.addEventListener('click', () =>{
                        const userChoice = button.value.toString();
                        playRound(userChoice,getComputerChoice(options));
                    })
                })
            )
        );   
}

for (let index = 0; index < 2; index++) {
    run();
}
UI();