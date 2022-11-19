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
let userChoice;



//UI
function UI () {
    const header = document.querySelector('h1')
    const body = document.querySelector('body');
    const container = document.createElement('main');
    const optionContainer = document.createElement('div');
    const scoreBoxContainer = document.createElement('div');
    const declareWinner = document.createElement('p');
    const userScoreContainer = document.createElement('div');
    const computerScoreContainer = document.createElement('div');
    const userScoreIdentifierContainer = document.createElement('p');
    const userScoreIdentifier = document.createElement('b');
    const computerScoreIdentifierContainer = document.createElement('p');
    const computerScoreIdentifier = document.createElement('b');

    container.classList.add("canvas")
    optionContainer.classList.add("option-container");
    scoreBoxContainer.classList.add("scorebox-container");
    declareWinner.classList.add("winner-declaration");

    body.appendChild(container);
    container.appendChild(header);
    container.appendChild(optionContainer);
    container.appendChild(scoreBoxContainer);
    scoreBoxContainer.appendChild(userScoreContainer);
    scoreBoxContainer.appendChild(computerScoreContainer);
    userScoreContainer.appendChild(userScoreIdentifierContainer);
    userScoreIdentifierContainer.appendChild(userScoreIdentifier);
    computerScoreContainer.appendChild(computerScoreIdentifierContainer);
    computerScoreIdentifierContainer.appendChild(computerScoreIdentifier);

    userScoreIdentifier.textContent = 'User';
    computerScoreIdentifier.textContent = 'Cpu';

    for (let i = 0; i < options.length; i++) {
        const element = document.createElement('button');
        element.value = options[i];
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
            userScoreContainer.appendChild(element);
        }
        if(index == 2){
            const element = document.createElement('p');
            element.textContent = computerScore;
            element.id='computer-score';
            computerScoreContainer.appendChild(element);
        }
    }
    const option = document.querySelectorAll('button');
    const optionArray = Array.from(option);
    const imageOption = ['./assests/images/rock.png', './assests/images/paper.png', './assests/images/scissors.png'];
    for (let index = 0; index < imageOption.length; index++) {
        optionArray.forEach((button) => {
            button.style.backgroundImage = `url('${imageOption[index++]}')`;
        });
    } 

    scoreBoxContainer.insertBefore( declareWinner, computerScoreContainer);
}
UI();
//Logic

const getComputerChoice = (options) => {
    //Return a Random choice out of the options
    return options[Math.floor(Math.random() * options.length)];
}

const buttons  = document.querySelectorAll('button');
buttons.forEach((button) =>{
    button.addEventListener("click", () =>{
        userChoice = button.value;
        playRound(userChoice, getComputerChoice(options));
    });
});

function playRound(userChoice,computerChoice) {
    const score = checkScore();
    const getUserCurrentScore = document.getElementById('user-score');
    const getComputerCurrentScore = document.getElementById('computer-score');
    // for each user choice ai make choice 
    if((computerChoice == userChoice) && (score != 0)){
        return " Tie, Try Again";
    }else if(
        (
            (userChoice == "Rock" && computerChoice == "Scissors") || 
            (userChoice == "Paper" && computerChoice == "Rock") || 
            (userChoice == "Scissors" && computerChoice == "Paper")
        ) && (score != 0)
    ){
        console.log(userChoice);
        console.log(computerChoice);
        --computerScore ;
        //userScore = userScore - 0;
        console.log("userScore is " + userScore + " 1st elseif ran");
        console.log("cpu score is " + computerScore + " 1st elseif ran");
        checkScore(userScore,computerScore);
        getComputerCurrentScore.textContent = computerScore;
        
    }else if(
        (
            (userChoice == "Rock" && computerChoice == "Paper") || 
            (userChoice == "Paper" && computerChoice == "Scissors") || 
            (userChoice == "Scissors" && computerChoice == "Rock")
        ) && (score != 0)
    ){
        console.log(userChoice);
        console.log(computerChoice);
        userScore = userScore - 1;
        //computerScore = computerScore - 0;

        console.log("userScore is " + userScore + " 2nd elseif ran");
        console.log("cpu score is " + computerScore + " 2nd elseif ran");
        checkScore(userScore,computerScore);
        getUserCurrentScore.textContent = userScore;
        
    }else{
        return;
    }
}

function checkScore (userScore,computerScore) {
    if(userScore == 0 && computerScore > 0){
        declareWinner("You Lose! Get back in the Gym and train some more", userScore);
    }else if(computerScore == 0 && userScore > 0){
        declareWinner("You Won! Keep going chase the world Championship", computerScore);
    }else{
        return;
    }
}

function declareWinner(str='',score) {
    let showWinner = document.querySelector('.winner-declaration');
    if(score == 0){
        showWinner.textContent = str;
    }
}

function showRoundResult(userChoice, computerChoice){
    const modal = document.createElement('div');
    let showChoiceMadeByUser;
    let showChoiceMadeByCpu;
    if(userChoice == "Rock" && computerChoice == "Scissors"){
        showChoiceMadeByUser = document.createElement('div');
        showChoiceMadeByCpu = document.createElement('div');
        showChoiceMadeByUser.style.backgroundImage = `url()`;
        showChoiceMadeByCpu.style.backgroundImage = `url("./assests/images/hand-scissors.png")`;
        modal.appendChild(showChoiceMadeByUser);
        modal.appendChild(showChoiceMadeByCpu);
    }
    if(userChoice == "Paper" && computerChoice == "Rock"){
        showChoiceMadeByUser = document.createElement('div');
        showChoiceMadeByCpu = document.createElement('div');
        showChoiceMadeByUser.style.backgroundImage = `url("./assests/images/paper-hand")`;
        showChoiceMadeByCpu.style.backgroundImage = `url("./assests/images/rock-reversed.png")`;
        modal.appendChild(showChoiceMadeByUser);
        modal.appendChild(showChoiceMadeByCpu);
    }
    if(userChoice == "Scissors" && computerChoice == "Paper"){
        modal.style.backgroundImage = `url("./assests/images/scissors-beating-paper.png")`
    }
    if(userChoice == "Rock" && computerChoice == "Paper"){
        showChoiceMadeByUser = document.createElement('div');
        showChoiceMadeByCpu = document.createElement('div');
        showChoiceMadeByUser.style.backgroundImage = `url("./assests/images/rock-hand.png")`;
        showChoiceMadeByCpu.style.backgroundImage = `url("./assests/images/hand-reversed.png")`;
        modal.appendChild(showChoiceMadeByUser);
        modal.appendChild(showChoiceMadeByCpu);
    }
    if(userChoice == "Paper" && computerChoice == "Scissors"){
        showChoiceMadeByUser = document.createElement('div');
        showChoiceMadeByCpu = document.createElement('div');
        showChoiceMadeByUser.style.backgroundImage = `url("./assests/images/paper-hand.png")`;
        showChoiceMadeByCpu.style.backgroundImage = `url("./assests/images/hand-scissors.png")`;
        modal.appendChild(showChoiceMadeByUser);
        modal.appendChild(showChoiceMadeByCpu);
    }
    if(userChoice == "Scissors" && computerChoice == "Rock"){
        showChoiceMadeByUser = document.createElement('div');
        showChoiceMadeByCpu = document.createElement('div');
        showChoiceMadeByUser.style.backgroundImage = `url("./assests/images/hand-scissors-reversed.png)`;
        showChoiceMadeByCpu.style.backgroundImage = `url("./assests/images/rock-reversed.png")`;
        modal.appendChild(showChoiceMadeByUser);
        modal.appendChild(showChoiceMadeByCpu);
    }
    if(userChoice == "Rock" && computerChoice == "Rock"){
        modal.style.backgroundImage = `url("./assests/images/rock-rock.png")`;
    }
    if(userChoice == "Paper" && computerChoice == "Paper"){
        modal.style.backgroundImage = `url("./assests/images/paper-paper.png")`;
    }
    if(userChoice == "Scissors" && computerChoice == "Scissors"){
        showChoiceMadeByUser = document.createElement('div');
        showChoiceMadeByCpu = document.createElement('div');
        showChoiceMadeByUser.style.backgroundImage = `url("./assests/images/hand-scissors-reversed.png)`;
        showChoiceMadeByCpu.style.backgroundImage = `url("./assests/images/hand-scissors.png")`;
        modal.appendChild(showChoiceMadeByUser);
        modal.appendChild(showChoiceMadeByCpu);
    }
    if(userChoice == "Gun" && computerChoice == "Gun"){
        showChoiceMadeByUser = document.createElement('div');
        showChoiceMadeByCpu = document.createElement('div');
        showChoiceMadeByUser.style.backgroundImage = `url("./assests/images/gun-hand.png)`;
        showChoiceMadeByCpu.style.backgroundImage = `url("./assests/images/gun-hand.png")`;
        modal.appendChild(showChoiceMadeByUser);
        modal.appendChild(showChoiceMadeByCpu);
    }
}

function storeGameResult(result) {
    let gameresult = [];
    return gameresult.push(result);
}

function createGun(){
    const gunButton = document.createElement('button');
    const findOptions = document.querySelector('.option-container');
    gunButton.style.backgroundImage = `url("./assests/images/gun-hand.png")`;
    findOptions.appendChild(gunButton);
}

function activateGun(gameresult){
    if(gameresult == "You Won! Keep going chase the world Championship" ){
        createGun();
    }
}

/*const listenForUserEvent = document.querySelectorAll('button');
const convertListenForUserEventNodeListIntoArrays = Array.from(listenForUserEvent);

console.log(convertListenForUserEventNodeListIntoArrays)


const getUserChoice = (choice) => {
    return choice;
    return choice.forEach(button =>{
        button.addEventListener('click', () =>{
            playRound(button.value, getComputerChoice(options))
        });
    });   
}*/ 
/*
const storeUserChoice = (storedChoice) => {
    return storedChoice;
}*/







/*
function recordRoundResults (round) {
    const roundCount = [];
    for( const rounds of roundCount){
        rounds.push(round);
    }
    return roundCount;
}*/
   
/*for (let index = 0; index < imageOption.length; index++) {
    const getImages = document.querySelectorAll('img');
    getImages.forEach(img => {
        img.src = imageOption[index++];
        img.alt = options;
    });        
    }  */ 